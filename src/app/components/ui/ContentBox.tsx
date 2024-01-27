'use client'

import usePosts from '@/app/hooks/usePosts'
import { Suspense } from 'react'
import { Comment, Modal, Post, SearchInput, Spinner } from '.'

interface ContentBoxProps {
  children?: React.ReactNode
}

const ContentBox: React.FC<ContentBoxProps> = () => {
  const {
    dataFilter,
    handleClick,
    handleModal,
    handleSearch,
    openModal,
    dataModal,
  } = usePosts()
  return (
    <div
      className={`flex relative flex-col min-h-[50svh] z-1000 w-full justify-between  `}
    >
      <SearchInput onSearch={handleSearch} />
      <Modal isOpen={openModal} onClose={handleModal}>
        <div>
          <h1 className="text-xl font-bold antialised text-indigo-950 mb-5 ">
            <div className="flex flex-col gap-5">
              {dataModal?.length &&
                dataModal.map((item: any, index: number) => {
                  return (
                    <Comment
                      key={index}
                      img={item.owner.picture}
                      message={item.message}
                      name={item.owner.firstName}
                      date={item.publishDate}
                    />
                  )
                })}
            </div>
          </h1>
          <p className="text-indigo-900">{dataModal?.text}</p>
        </div>
      </Modal>
      <>
        <div className={`w-3/5 mx-auto  rounded-2xl`}>
          <div className="flex  flex-col justify-center items-center">
            <Suspense fallback={<Spinner size={10} />}>
              {dataFilter.length ? (
                dataFilter.map((post, index) => (
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
                <Spinner size={10} />
              )}
            </Suspense>
            <Spinner />
          </div>
        </div>
      </>
    </div>
  )
}

export default ContentBox
