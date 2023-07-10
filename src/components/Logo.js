import React from 'react'
import styled from 'styled-components';
import Logos from '../Assets/Group.png';

const LogoContainer = styled.div`
  margin: 20px 0 70px 0;
`

const LogoImage = styled.img.attrs(({src})=>({
  //src: 'https://app.useanvil.com/img/email-logo-black.png'
  src:src,
}))`
  height: 100px;
`

const Logo = () => (
  <LogoContainer>
    <LogoImage src={Logos}/>
  </LogoContainer>
)

export default Logo
