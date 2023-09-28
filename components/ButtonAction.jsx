"use client"

import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {MdDeleteOutline, MdOutlineModeEditOutline} from 'react-icons/md'

const ButtonAction = ({id}) => {
  const router = useRouter();
  const postId = parseInt(id)

  const {mutate: deletePost, isLoading} = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${postId}`)
    },
    onSuccess: () => {
      router.push('/')
      router.refresh();
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return (
    <div className="flex items-center justify-center gap-4">
 
      <Link href={`/edit/${postId}`} 
      className="bg-green-600 text-white px-4 py-2 border border-green-600 flex justify-start items-center">
      <MdOutlineModeEditOutline /> Edit</Link>

      {isLoading ? (
          <span>Loading...</span>
      ) : (
        <button
          onClick={()=>deletePost()}
          className="bg-red-600 text-white px-4 py-2 flex justify-center items-center relative">
          <MdDeleteOutline size={20} color="white" style={{position: "absolute", top: "10px", left: "0px"}}/>
          Delete
        </button>
      )}
      

    </div>
  )
}

export default ButtonAction