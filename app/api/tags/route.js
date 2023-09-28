import { NextResponse } from 'next/server'
import prisma from '../../lib/connect'

export const GET = async () => {
  try{
    const tags = await prisma.tag.findMany()
    return NextResponse.json(tags, {status : 200})
  } catch(error){
    return NextResponse.json({message: "Could not fetch tags."}, {status : 500})
  }
}