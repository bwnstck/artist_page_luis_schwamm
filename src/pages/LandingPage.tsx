import Image from 'next/image'

import { getData } from '$lib/data'

import styled from 'styled-components'

import profilePicture from '$images/Profilbild.png'
import authors from '$meta/authors.yml'
import { AuthorContent } from '$types/data'

function LandingPage() {
  const author = getData({ data: authors, slug: 'luis' }) as AuthorContent

  const iFrameSrc =
    'https://bandcamp.com/EmbeddedPlayer/album=1522687561/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/artwork=small/transparent=true/'

  return (
    <BackgroundImage>
      <Title>{author.name}</Title>
      <ImageWrapper>
        <Image src={profilePicture} alt="Das ist Luis" />
      </ImageWrapper>

      {author?.introduction && <Paragraph>{author.introduction}</Paragraph>}

      <Player>
        <iframe src={iFrameSrc} seamless>
          <a href="https://luisschwamm.bandcamp.com/album/m-ngel">
            Mängel by Luis Schwamm
          </a>
        </iframe>
      </Player>
      {/* <SocialList /> */}
    </BackgroundImage>
  )
}

export default LandingPage

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/landing.jpg');
  background-position: center;
  background-size: cover;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Title = styled.h1`
  text-align: center;
  padding: 0;
`
const ImageWrapper = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;

  > div {
    :hover {
      transform: scale(1.1);
    }
  }
`

const Player = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;

  > iframe {
    border: 0;
    width: 100%;
    height: 120px;
  }
`

const Paragraph = styled.p`
  text-align: center;
`
