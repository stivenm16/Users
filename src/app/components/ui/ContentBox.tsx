'use client'

import { Suspense, useEffect, useState } from 'react'
import { Post, Spinner } from '.'

interface ContentBoxProps {
  children?: React.ReactNode
}
interface Post {
  id: string
  firstName: string
  lastName: string
  picture: string
  title: string
}
//ContentBox should receive a Child Component as prop to render it instaed of CodeEditor, also this logic needs to be moved to custom hook
const ContentBox: React.FC<ContentBoxProps> = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts')
      const newPosts = await res.json()
      setPosts(newPosts.data)
    }
    fetchPosts()
  }, [])
  // const { handlePagination, currentContent } = usePagination()

  // useEffect(() => {
  //   const data = [...dataStructure.StateFull, ...dataStructure.StateLess]
  //   const matchingData = findElementByTitle(data, currentContent!)

  //   setCurrentData(matchingData)
  // }, [currentContent])

  return (
    <div className="flex relative flex-col min-h-[85svh] z-1000 w-full justify-between ">
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
                posts.map((post) => (
                  <Post
                    key={post.id}
                    srcImg={post.picture}
                    content={post.title}
                    name={post.firstName}
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
