import Layout from '$components/Layout'
import BasicMeta from '$components/meta/BasicMeta'
import OpenGraphMeta from '$components/meta/OpenGraphMeta'

import LandingPage from './LandingPage'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      {/* <TwitterCardMeta url={'/'} /> */}
      <div>
        <LandingPage />
        <LandingPage />
      </div>
    </Layout>
  )
}
