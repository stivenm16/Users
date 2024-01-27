import { key, url } from '@/app/api/global'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const id = req.url?.split('/').pop()
  const data = await fetch(`${url}/post/${id}/comment`, {
    headers: { 'app-id': key },
  })
  const json = await data.json()

  return NextResponse.json(json)
  // return NextResponse.json(users)
}
