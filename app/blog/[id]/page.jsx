import BackButton from "@/components/BackButton"
import ButtonAction from "@/components/ButtonAction"
import prisma from '../../lib/connect'

  const getPost = async (id) => {
    
    const response = await prisma.post.findFirst({
      where:{id: id},
      select:{
        id: true,
        title: true,
        content: true,
        tag: true
      }
    })
    return response
  }

const BlogDetail = async ({params}) => {
  const id = parseInt(params.id)
  const post = await getPost(id)
  return (
    <div>
      <BackButton />
      <h1 className="text-2xl font-bold my-4">{post?.title}</h1>
      <ButtonAction id={id}/>
      <div>{post?.tag.name}</div>
      <p className="text-slate-700 ">{post?.content}</p>
    </div>
  )
}

export default BlogDetail