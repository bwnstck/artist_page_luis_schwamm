import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'

import styled from 'styled-components'
import { getAuthor } from '../lib/authors'
import Image from 'next/image'
import LandingPage from '../components/LandingPage'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      {/* <TwitterCardMeta url={'/'} /> */}
      <Container>
        <LandingPage />
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  /* background-color: red; */
`
