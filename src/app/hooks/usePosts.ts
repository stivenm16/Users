import { useEffect, useState } from 'react'
import { PostType } from '../types/users'

const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [dataModal, setDataModal] = useState<any>()

  const [dataFilter, setDataFilter] = useState<PostType[]>([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts')
      const newPosts = await res.json()
      setPosts(newPosts.data)
      setDataFilter(newPosts.data)
    }
    fetchPosts()
  }, [])
  const handleModal = () => {
    setOpenModal(!openModal)
  }
  const handleClick = (id: string) => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/posts/comments/${id}`)
      const newPosts = await res.json()

      if (newPosts.data.length === 0) return
      setDataModal(newPosts.data)
      handleModal()
    }
    fetchPosts()
  }

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setDataFilter(posts)
    } else {
      const filter = posts.filter((post) => post.tags.includes(query))
      setDataFilter(filter)
    }
  }
  return {
    handleClick,
    openModal,
    handleModal,
    dataModal,
    dataFilter,
    handleSearch,
  }
}

export default usePosts
