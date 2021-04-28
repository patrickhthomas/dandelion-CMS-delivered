import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Clock from '../components/Icons/clock'
import Pin from '../components/Icons/pin'



const Wrapper = styled.section`
 .divider{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
    @media (min-width: ${props => props.theme.responsive.medium}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
 }

  .location{
    width: 100%;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2em 1fr;
    grid-template-rows: auto;
  }
  .hours {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2em 1fr;
    grid-template-rows: auto;
  }
  height: ${props => props.height || 'auto'};
  @media (min-width: ${props => props.theme.responsive.small}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
  }
  clock {
      grid-column: 1 / 1;
  }
`
const Title = styled.h2`
  margin-bottom: 1em;
`

const Address = styled.h3`
`

const Map = styled.div`
  max-width: 100%;
  grid-column: 1 / 3;
  img {
      width: 100%;
  }
`

const Hours = styled.ul`
display: grid;
grid-template-columns: 20em;
grid-template-rows: auto;
grid-gap: 1em;
`

const Day = styled.li`

 display: grid;
 justify-content: start;
 grid-template-columns: 1fr 1fr;
   @media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
p{
  padding: 0;
  border-bottom: 1px solid ${props => props.theme.colors.yellow};
}
 
`


const Section1 = props => (

  <Wrapper>
    <Title>{props.title}</Title>
    <div class='divider'>
    <div class='location'>
      <Pin class='pin'/>
      <Address>{props.address}<br></br>{props.city}</Address>
      <Map><img src={props.map.file.url}/></Map>
    </div>
    <div class='hours'>
    <Clock class='clock'/>
    <Hours>
    {props.days.map(({ node }, i) => (
      <Day>
        {node.dayOfWeek != null && node.areYouOpen === true &&
        <>
        <p>{node.dayOfWeek}</p>
        <p>{node.openTime} to {node.closeTime}</p>
        </>}
        {node.dayOfWeek != null && node.areYouOpen === false && 
        <>
        <p>{node.dayOfWeek}</p>
        <p>Closed</p>
        </>}
      </Day>
    ))}
    </Hours>
    </div>
    </div>
  </Wrapper>
)

export default Section1
