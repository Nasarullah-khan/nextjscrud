import PostCard from "@/components/PostCard";
import prisma from './lib/connect'

const getPosts = async () => {

  const response = await prisma.post.findMany({
    select:{
      id: true,
      title: true,
      content: true,
      tag: true
    },
    orderBy:{
      createdAt: "desc"
    }
  })

  return response;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex justify-start items-center gap-4 flex-wrap">
      {posts.map((item)=>(
        <PostCard key={item.id} post={item} />
      ))}
    </main>
  )
}
