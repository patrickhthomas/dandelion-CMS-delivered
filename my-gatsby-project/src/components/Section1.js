import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Clock from '../components/Icons/clock'
import Pin from '../components/Icons/pin'
import useIsInViewport from 'use-is-in-viewport'



const Wrapper = styled.section`

  padding-bottom: 3em;
  display: grid;
  position: relative;
  grid-gap: .5em;
 .divider{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
    @media (min-width: ${props => props.theme.responsive.small}) {
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
    align-self: start;
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
grid-template-columns: 1fr;
grid-template-rows: auto;
grid-gap: 2em;
grid-column: 1 / 3;
`

const Day = styled.li`

 display: grid;
 justify-content: start;
 grid-template-columns: 1fr 1fr;
   @media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr 1fr;
  }
p{
  padding: 0;
  border-bottom: 1px solid ${props => props.theme.colors.yellow};
}

 
`


const Section1 = props =>  {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 })
return (

  <Wrapper
  ref={targetRef}
  className={isInViewport ? 'isVisible' : 'isHidden'}
  >
    <Title class="sectionH2">{props.title}</Title>
    <div class='divider'>
    <div class='location'>
      <Pin class='pin'/>
      <Address>{props.address}<br></br>{props.city}</Address>
      <Map><img src={props.map.file.url}/></Map>
    </div>
    <div class='hours'>
    <Clock class='clock'/>
    <Address class="hoursTitle">Store Hours</Address>
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
        }

export default Section1
