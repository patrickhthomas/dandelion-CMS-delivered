import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Collapsible from 'react-collapsible';

const Header = styled.header`
  background: ${props => props.theme.colors.white};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;


  ul {
    display: flex;
    justify-content: stretch;
    
  }

  li {
    display: inline-block;
    margin-left: 1em;
    text-align: center;
    line-height: 140%;
    align-items: flex-start;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    padding: 1em;
    padding-left: 15%;
    padding-right: 15%;
    transition: all 0.2s;
    border-radius: .2em;
    &:hover {
      color: ${props => props.theme.colors.highlight};
      background: ${props => props.theme.colors.tertiary};
      font-size: 1.1em;
    }
  }
`

const smallViewport = props => props.theme.responsive.small


const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Collapsible trigger="Start here">
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} 
              activeStyle={{
                color: 'black', 
                fontSize: '1.2em', 
                fontWeight: '700', 
                background: 'radial-gradient(.5em .5em at 50% 77%, #FFD13A 0%, #FFD13A 56.77%, #FFFFFF 58.85%)', 
                paddingBottom: '1em',  
              }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
    </Collapsible>
  )
}

export default Menu
