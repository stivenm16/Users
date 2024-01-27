import { NextResponse } from 'next/server'
import { key, url } from '../global'
import { PostType } from '@/app/types/users'

export async function GET(): Promise<NextResponse<PostType[]>> {
  const data = await fetch(`${url}/post`, {
    headers: { 'app-id': key },
  })
  const users: PostType[] = await data.json()

  return NextResponse.json(users)
}
