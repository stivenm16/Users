import { key, url } from '@/app/api/global'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const id = req.url?.split('/').pop()
  const data = await fetch(`${url}/post/${id}/comment`, {
    headers: { 'app-id': key },
  })
  const json = await data.json()

  return Response.json(json)
}
