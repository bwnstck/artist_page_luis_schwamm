import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  // const router = useRouter()
  const [active, setActive] = useState(false)
  const handleOnPress = () => setActive(!active)
  console.log({ active })
  return (
    <>
      {active && (
        <MenuWrapper>
          <h2>MENU</h2>
          {}
        </MenuWrapper>
      )}
      <ButtonWrapper onClick={handleOnPress}>
        <MenuMan
          src={'/images/Vector.png'}
          alt="Das ist das Menü"
          width={48}
          height={48}
          placeholder="blur"
        />
      </ButtonWrapper>
    </>
  )
}

const MenuWrapper = styled.div`
  position: fixed;
  right: calc(5% + 52px);
  bottom: calc(5% + 52px);
  z-index: 10;

  height: 300px;
  width: 200px;

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 16px;

  h2 {
    color: white;
  }
`
const MenuMan = styled(Image)`
  position: absolute;
  bottom: 0;
`
export const StyledImage = styled(Image)`
  border-radius: 50%;
`
const ButtonWrapper = styled.button`
  border: 3px solid #fcaf45;
  border-radius: 50%;
  background-color: #333333;
  padding: 12px;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 5%;
  bottom: 5%;

  :active {
    background-color: #ef4189;
  }
`
