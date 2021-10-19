import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { SocialList } from '../components/SocialList'
import styled from 'styled-components'
import { getAuthor } from '../lib/authors'

export default function Index() {
  const authorName = getAuthor('luis').name
  const authorDescription = getAuthor('luis').introduction
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      {/* <TwitterCardMeta url={'/'} /> */}
      <div className="container">
        <div>
          <Title>{authorName} 👋</Title>
          <img
            src={'/images/profilePicture.jpg'}
            alt="Ich bins, Luis"
            // width={500}  automatically provided
            // height={500}  automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
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
