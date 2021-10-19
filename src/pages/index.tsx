import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { SocialList } from '../components/SocialList'
import styled from 'styled-components'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      {/* <OpenGraphMeta url={'/'} /> */}
      {/* <TwitterCardMeta url={'/'} /> */}
      <div className="container">
        <div>
          <Title>Hi, ich bin Luis 👋</Title>
          <SocialList />
        </div>
      </div>
    </Layout>
  )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
