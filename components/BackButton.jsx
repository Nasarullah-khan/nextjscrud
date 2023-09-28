"use client"
import { useRouter } from "next/navigation"
const BackButton = () => {
  const router = useRouter()

  return (
    <button 
    onClick={()=>router.back()}
    className="bg-slate-200 px-4 py-2 hover:bg-black hover:text-white">Back</button>
  )
}

export default BackButton