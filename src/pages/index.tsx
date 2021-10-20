import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'

import styled from 'styled-components'
import LandingPage from '../components/LandingPage'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      {/* <TwitterCardMeta url={'/'} /> */}
      <Container>
        <LandingPage />
        <LandingPage />
      </Container>
    </Layout>
  )
}

const Container = styled.div``
