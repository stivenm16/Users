'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
import { Spinner } from '.'

interface ContentBoxProps {
  children?: React.ReactNode
}
1
//ContentBox should receive a Child Component as prop to render it instaed of CodeEditor, also this logic needs to be moved to custom hook
const ContentBox: React.FC<ContentBoxProps> = () => {
  // const { handlePagination, currentContent } = usePagination()
  const [currentData, setCurrentData] = useState<any>()
  // useEffect(() => {
  //   const data = [...dataStructure.StateFull, ...dataStructure.StateLess]
  //   const matchingData = findElementByTitle(data, currentContent!)

  //   setCurrentData(matchingData)
  // }, [currentContent])

  return (
    <div className="flex relative flex-col min-h-[85svh] z-1000 w-full justify-between ">
      <div className="flex gap-10">
        <div className={`w-3/5 mx-auto  rounded-2xl`}>
          {currentData ? (
            <div key={currentData.title} id={currentData.title}>
              <h4 className="text-xl font-bold text-white mb-5">
                {currentData.title}
              </h4>
              <span className="text-md font-medium text-white">
                {currentData.description}
              </span>
              <Suspense
                fallback={
                  <div className="mt-10">
                    <Spinner size={12} />
                  </div>
                }
              >
                <></>
              </Suspense>
            </div>
          ) : (
            <div className="flex flex-col justify-center mt-44 text-white items-center gap-5">
              <Spinner size={12} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentBox
