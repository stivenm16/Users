import { User } from '@/app/types/users'
import { NextResponse } from 'next/server'
import { key, url } from '../global'

export async function GET(): Promise<NextResponse<User[]>> {
  const data = await fetch(`${url}/user`, {
    headers: { 'app-id': key },
  })
  const users: User[] = await data.json()

  return NextResponse.json(users)
}
