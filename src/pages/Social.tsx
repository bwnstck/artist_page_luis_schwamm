import Image from 'next/image'

import { getData } from '$lib/data'

import ImageContainer from '../components/ImageContainer'

import styled from 'styled-components'

import profilePicture from '$images/Profilbild.png'
import authors from '$meta/authors.yml'
import { AuthorContent } from '$types/data'

const Social = () => {
  const author = getData({ data: authors, slug: 'luis' }) as AuthorContent

  return (
    <ImageContainer backgroundUrl={'/images/landing.jpg'}>
      <Title>{author.name}</Title>
      <ImageWrapper>
        <Image src={profilePicture} alt="Das ist Luis" />
      </ImageWrapper>

      {author?.introduction && <Paragraph>{author.introduction}</Paragraph>}
    </ImageContainer>
  )
}

export default Social

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

const Paragraph = styled.p`
  text-align: center;
`
