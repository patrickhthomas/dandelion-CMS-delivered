import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { globalStyles } from '../styles/globalStyles.js'


const Root = styled.div`
 
  p,
  li {
    font-family: ${props => props.theme.fonts.body};
    font-size: 1em;
    line-height: 140%;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
  }
  h1 {
    font-family: ${props => props.theme.fonts.headerBold};
    font-size: 2.5em;
    line-height: 150%;
    letter-spacing: .025em;
    text-transform: uppercase;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
  }
  h2 {
    font-family: ${props => props.theme.fonts.header};
    font-size: 1.75em;
    line-height: 110%;
    letter-spacing: .07em;    
    text-transform: uppercase;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
   
  }
  h3 {
    font-family: ${props => props.theme.fonts.headerBold};
    font-size: 1.25em;
    line-height: 120%;
    text-transform: uppercase;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
  }
  a {
    font-family: ${props => props.theme.fonts.body};
    font-size: 1em;
  }
  overflow-x: hidden;
  ul,
  li {
    list-style: none;
  }
  section {
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: auto;
  }

`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Main = styled.div`
section {
       @media (min-width: ${props => props.theme.responsive.medium}) {
        background-color: ${props => props.theme.colors.tertiary};

        padding: 2em;
        margin-bottom: 5em;

    }
 }

 .isVisible{
  opacity: 100%;

  transition: all 0.5s ease-in;
    @media (min-width: ${props => props.theme.responsive.small}) {
     box-shadow: 0px 0px 5px rgba(113, 54, 186, 0.7);
  }
  
}



.isHidden{
  opacity: 0%;
  transform: scale(.8);
  transition: all 0.5s ease-in;
}

.overrideInView{
  background-color: white;
}
`

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])


  return (
    <Root className="siteRoot"
     data-sal="slide-right"
     data-sal-delay="50"
     data-sal-duration="900"
     data-sal-easing="ease-in-back">
      <div className="siteContent">
        <Skip href="#main" id="skip-navigation">
          Skip to content
        </Skip>
        <Menu />
        <Main id="main">{props.children}</Main>
      </div>
      <Global styles={globalStyles} />
    </Root>
  )
}

export default Layout
