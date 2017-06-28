import React from 'react'

import PageLayout from '../layouts/PageLayout'

const Page = ({content, leftPanel, topMenu}) => {
  // console.log('contenZ',content)
  return (
    <PageLayout topMenu={topMenu} leftPanel={leftPanel}>
    {/*<div>sss*/}
      {content}
      {/*</div>*/}
    </PageLayout>
  )
}

export default Page
