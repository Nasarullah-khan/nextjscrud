import { NextResponse } from 'next/server'
import prisma from '../../../lib/connect'

export const DELETE = async (req, {params}) => {
  const id = parseInt(params.postId)
  try{
    await prisma.post.delete({
      where:{
        id: id
      }
    })
    return new Response(null, {status: 204})
  }catch(error){
    console.log(error)
    return NextResponse.json({message: "Something went wrong"}, {status: 500})
  }
}

export const PATCH = async (req, {params}) => {
  
  const {postId} = params
  const id = parseInt(postId)

  try{
    const body = await req.json();
    await prisma.post.update({
      where: {id: id},
      data: {
        title: body.title,
        content: body.content,
        tagId: parseInt(body.tagId)
      }
    })

    return NextResponse.json({message: "Updated successfully"}, {status: 200})
  } catch(error){

    console.log(error)
    return NextResponse.json({message: "Cannot update. Something went wrong."}, {status: 500})
  }
}

export const GET = async (req, {params}) => {
  const {postId} = params;
  const id = parseInt(postId)

  try{
    const post = await prisma.post.findFirst({
      where: {id: id},
      include: {tag: true}
    })
    return NextResponse.json(post, {status: 200})

  } catch(error){
    return NextResponse.json({message: "Something went wrong"}, {status: 500})
  }
}