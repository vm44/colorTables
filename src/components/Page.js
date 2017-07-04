import React from 'react'

import PageLayout from '../layouts/PageLayout'

const Page = ({content, leftPanel, topMenu}) => {
  return (
    <PageLayout topMenu={topMenu} leftPanel={leftPanel}>
      {content}
    </PageLayout>
  )
}

export default Page
