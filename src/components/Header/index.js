import React, { Component } from 'react'
import styled from 'styled-components'
import Shape from './HeaderGradient.svg'

const HeaderWrapper = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
`

const HeaderGradient = styled.div`
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  z-index: 2;
`

const CodeDiv = styled.div`
  width: 600px;
  height: 320px;
  background: #4e4e74;
  border-radius: 10px;
  transform: scale(1.3) translateX(50px) translateY(200px) perspective(3190px)
    rotateY(-29deg) rotateX(4deg) rotate(4deg);
  box-shadow: 5px 10px 21px 0px RGBA(118, 118, 185, 0.75);
`

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 60%;
  z-index: 10;
  position: relative;
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderInner>
          <div>Text here</div>
          <CodeDiv />
        </HeaderInner>
        <HeaderGradient>
          <img src={Shape} />
        </HeaderGradient>
      </HeaderWrapper>
    )
  }
}

export default Header
