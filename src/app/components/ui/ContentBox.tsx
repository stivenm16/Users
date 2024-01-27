'use client'

import { PostType } from '@/app/types/users'
import { Suspense, useEffect, useState } from 'react'
import { Comment, Modal, Post, Spinner } from '.'

interface ContentBoxProps {
  children?: React.ReactNode
}

const ContentBox: React.FC<ContentBoxProps> = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [dataModal, setDataModal] = useState<any>()
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts')
      const newPosts = await res.json()
      setPosts(newPosts.data)
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

  return (
    <div
      className={`flex relative flex-col min-h-[85svh] z-1000 w-full justify-between  `}
    >
      <Modal isOpen={openModal} onClose={handleModal}>
        <div>
          <h1 className="text-xl font-bold antialised text-indigo-950 mb-5 ">
            <div className="flex flex-col gap-5">
              {dataModal?.length
                ? dataModal.map((item: any, index: number) => {
                    return (
                      <Comment
                        key={index}
                        img={item.owner.picture}
                        message={item.message}
                        name={item.owner.firstName}
                        date={item.publishDate}
                      />
                    )
                  })
                : 'No comments'}
            </div>
          </h1>
          <p className="text-indigo-900">{dataModal?.text}</p>
        </div>
      </Modal>
      <div className="flex gap-10">
        <div className={`w-3/5 mx-auto  rounded-2xl`}>
          <div className="flex  flex-col justify-center items-center">
            <Suspense
              fallback={
                <div className="mt-10">
                  <Spinner size={10} />
                </div>
              }
            >
              {posts.length ? (
                posts.map((post, index) => (
                  <Post
                    key={post.id}
                    title={post.text}
                    srcImg={post.image}
                    content={post.text}
                    name={post.owner.firstName}
                    likesT={post.likes}
                    categories={post.tags}
                    handleClick={() => handleClick(post.id)}
                    {...post}
                  />
                ))
              ) : (
                <div className="mt-40">
                  <Spinner size={10} />
                </div>
              )}
            </Suspense>
            <Spinner />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBox
