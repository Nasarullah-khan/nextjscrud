"use client"

import BackButton from '@/components/BackButton'
import PostForm from '@/components/PostForm'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter();

  const handleCreatePost = (data) => {
    mutate(data)
  }

  const {mutate, isLoading} = useMutation({
    mutationFn: (newPost) => {
      return axios.post("/api/posts/create", newPost)
    },
    onError: (error) => {
      console.error(error)
    },
    onSuccess: () => {
      router.push("/")
      router.refresh()
    }
  })

  return (
    <div>
      <BackButton />
      <h1 className='text-2xl mb-4 font-bold'>Create Blog</h1>
      <PostForm submit={handleCreatePost} isEditing={false}/>
    </div>
  )
}

export default page