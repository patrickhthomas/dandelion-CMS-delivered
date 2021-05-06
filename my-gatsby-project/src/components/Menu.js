import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

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
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`


const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={{color: 'black', fontSize: '1.2em', fontWeight: '700', background: 'radial-gradient(50.56% 97.5% at 50% 119.33%, rgba(255, 209, 58, 0.7) 0%, rgba(255, 255, 255, 0) 100%)', padding: '1em', paddingLeft: '50%', paddingRight: '50%',  }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
