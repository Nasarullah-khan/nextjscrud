import Link from "next/link"

const PostCard = ({post}) => {
  const {id, title, content, tag} = post;
  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="bg-black py-1 px-4 rounded-full">{tag.name}</div>
        <div className="card-actions justify-end">
          <Link href={`/blog/${id}`} className="hover:underline">Read more...</Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard