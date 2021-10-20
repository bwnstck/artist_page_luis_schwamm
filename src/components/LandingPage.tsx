import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAuthor } from '../lib/authors'
const authorName = getAuthor('luis').name
import Image from 'next/image'

function LandingPage() {
  const authorName = getAuthor('luis').name
  const authorDescription = getAuthor('luis').introduction
  const iFrameSrc =
    'https://bandcamp.com/EmbeddedPlayer/album=1522687561/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/artwork=small/transparent=true/'

  return (
    <BackgroundImage>
      <Title>{authorName} 👋</Title>
      <ImageWrapper>
        <StyledImage
          src={'/images/Profilbild.png'}
          alt="Das ist Luis"
          width={253}
          height={256}
          placeholder="blur"
        />
      </ImageWrapper>
      <Paragraph>{authorDescription}</Paragraph>
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

const Player = styled.div`
  height: 120px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  > iframe {
    width: 100%;
    height: 120px;
    border: 0;
  }
`
const StyledImage = styled(Image)`
  border-radius: 50%;
`

const ImageWrapper = styled.div`
  /* max-width: 800px; */
  margin: 0 auto;
`
const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/landing.jpg');
  background-position: center;
  background-size: cover;
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #ef4189;
  box-shadow: 10;
`
const Paragraph = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: peachpuff;
`
