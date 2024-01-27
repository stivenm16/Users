'use client'
import { ContentBox, Layout } from '@/app/components/ui'

import { ContentProvider } from './redux/ContentContex'

const page = () => {
  return (
    <Layout>
      {/* <ContentProvider> */}
        <ContentBox />
      {/* </ContentProvider> */}
    </Layout>
  )
}

export default page
