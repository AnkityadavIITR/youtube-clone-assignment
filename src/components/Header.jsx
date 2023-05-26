import styled from '@emotion/styled'
import React from 'react'

const Header = () => {
  return (
    <Nav>
      <img src="./Icons/youtube-shorts-logo-42480.png" alt="" />
    </Nav>
  )
}
const Nav=styled.div`
  padding: 8px 4em;
  background-color:#fff;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  z-index: 10;
  img{
    width: 80px;
  }
  
  @media (max-width: 450px){
    padding-left: 1em;
  }


 
`

export default Header
