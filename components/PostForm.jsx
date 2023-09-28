"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form"

const PostForm = ({submit, isEditing, initialValue}) => {
  console.log(initialValue)

  const {register, formState:{errors}, handleSubmit} = useForm({defaultValues: initialValue});

  const {data: tagsData, isLoading} = useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      const response = await axios.get('/api/tags')
      return response.data;
    }
  })

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5">


      <input {...register("title", {required: true})}
      type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      {errors.title?.type === "required" && <div className="">Title is required.</div>}

      <textarea {...register("content", {required:{value: true, message: "Title is required"} })}
       className="textarea textarea-bordered" placeholder="Bio"></textarea>
       {errors.content?.type === "required" && <div className="">Content is required.</div>}

      {isLoading ? (
        <div>
          <span className="loading loading-ring loading-md"></span>
        </div>
      ) : (
        <select {...register("tagId", {required: true})}
        className="select select-bordered w-full max-w-xs" defaultValue={''}
        >
          <option disabled value=''>Select tag</option>
          {tagsData?.map((item)=>(
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        
      )
      }
      {errors.tag?.type === "required" && <div className="">Tag is required.</div>}
      

      <button type="submit" className="btn btn-primary ">
        {isEditing ? 'Update' : "Create"}
      </button>

      </form>
    </div>
  )
}

export default PostForm