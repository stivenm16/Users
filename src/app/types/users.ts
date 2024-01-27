export interface User {
  id: string
  title: string
  firstName: string
  lastName: string
  picture: string
}

export interface PostType {
  id: string
  likes: number
  owner: User
  image: string
  text: string
  tags: string[]
  publishDate: string
}

export interface Comment {
  id: string
  message: string
  owner: User
  post: string
  publishDate: string
}
