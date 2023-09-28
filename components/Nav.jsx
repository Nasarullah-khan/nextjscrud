import Link from "next/link"

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <Link href="/create" className="btn btn-ghost">Create Post</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav