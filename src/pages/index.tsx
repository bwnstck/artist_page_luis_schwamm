import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { SocialList } from '../components/SocialList'
import styled from 'styled-components'
import { getAuthor } from '../lib/authors'
// import Image from 'next/image'

export default function Index() {
  const authorName = getAuthor('luis').name
  const authorDescription = getAuthor('luis').introduction
  return (
    <Layout>
      <BasicMeta url={'/'} />
      {/* <OpenGraphMeta url={'/'} /> */}
      {/* <TwitterCardMeta url={'/'} /> */}
      <div className="container">
        <div>
          <Title>{authorName} 👋</Title>
          {/* <Image
            src={'profilePicture.jpg'}
            width={500}
            height={500}
            alt="Ich bins, Luis"
          /> */}
          <Paragraph>{authorDescription}</Paragraph>
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
const Paragraph = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: peachpuff;
`
