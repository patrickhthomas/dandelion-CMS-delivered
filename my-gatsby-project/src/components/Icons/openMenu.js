import React from 'react'
import styled from '@emotion/styled'
import openMenu from '../../../static/images/bars-light.svg'

const MenuIcon = styled.div`
width: 100%;
margin: 0;
display: grid;
 img {
     max-width: 4em;
     justify-self: end;
     padding-right: 1em;
     padding-top: 1em;
 }
`

const MenuButton = () => {
  return (
    <MenuIcon>
    <img src={openMenu}/>
    </MenuIcon>
  )
}

export default MenuButton