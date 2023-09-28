import { NextResponse } from 'next/server'
import prisma from '../../../lib/connect'

export const POST = async (req) => {
  const body = await req.json();
console.log(body)
  try{
    const post = await prisma.post.create({
      data:{
        title: body.title,
        content: body.content,
        tagId: parseInt(body.tagId)
      }
    })

    return NextResponse.json(post, {status: 200})

  } catch(error){
    console.log(error)
    return NextResponse.json({message: "Post not created."}, {status: 500})
  }
}