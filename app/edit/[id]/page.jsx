"use client"

import BackButton from '@/components/BackButton'
import PostForm from '@/components/PostForm'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = ({params}) => {
  const router = useRouter()
  const {id} = params;
  const postId = parseInt(id);

  const handleEditPost = (data) => {
    updatePost(data)
  }

  const {mutate: updatePost, isLoading:createPostLoading} = useMutation({
    mutationFn: async (newPost) => {
      return await axios.patch(`/api/posts/${postId}`, newPost)
    },
    onError: (error) => {
      console.error(error)
    },
    onSuccess: () => {
      router.push("/")
      router.refresh()
    }
  })

  const {data, isLoading} = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${postId}`)
      return response.data
    }
  })

  if(isLoading || createPostLoading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <BackButton />
      <h1 className='text-2xl mb-4 font-bold'>Edit Blog</h1>
      <PostForm submit={handleEditPost} initialValue={data} isEditing />
    </div>
  )
}

export default page