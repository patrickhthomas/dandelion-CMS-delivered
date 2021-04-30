import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Clock from '../components/Icons/clock'
import Pin from '../components/Icons/pin'
import { convertTime } from '../hooks/convert-time'



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

const Event = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-bottom: 3em;
 img {
  width: 100%;
 }
 
`
function ConvertDate(props) {
    let ogMonth = props.date.substring(5,7);
    var newMonth = parseInt(ogMonth, 10);
    let ogDay = props.date.substring(8,10);
    var newDay = parseInt(ogDay, 10);

    return <h2> {newMonth}.{newDay} </h2>
}

function ConvertStartTime(props) {
    let ogTime = props.start.substring(11,13);
    var simpleTime = parseInt(ogTime, 10);
    const amPm = (simpleTime < 12 && simpleTime!= 12) ? 'AM' : 'PM';
    if (simpleTime < 12 && simpleTime!= 0) {
        var newTime = simpleTime;
    } else if (simpleTime > 12) {
        newTime = (simpleTime - 12);
    } else if (simpleTime = 12) {
        newTime = simpleTime;
    } else if (simpleTime = 0) {
        newTime = 12;
    }



    
    return <p>From { newTime }{amPm} </p>
}

function ConvertEndTime(props) {
    let ogTime = props.end.substring(11,13);
    var simpleTime = parseInt(ogTime, 10);
    const amPm = (simpleTime < 12 && simpleTime!= 12) ? 'AM' : 'PM';
    if (simpleTime < 12 && simpleTime!= 0) {
        var newTime = simpleTime;
    } else if (simpleTime > 12) {
        newTime = (simpleTime - 12);
    } else if (simpleTime = 12) {
        newTime = simpleTime;
    } else if (simpleTime = 0) {
        newTime = 12;
    }



    
    return <p>to { newTime }{amPm} (PST)</p>
}






const Events = props => (

  <Wrapper>
    <Title>Events</Title>
    {props.events.map(({ node }, i) => (
      <Event>
        <div>
            <ConvertDate date={node.startTime} />
            <h3>{node.title}</h3>
        </div>
        <div>
          <h2></h2>
          <ConvertStartTime start={node.startTime} />
        </div>
        <div>
          <ConvertEndTime end={node.endTime} />
        </div>
        <div>
            <img src={node.image.file.url} alt={node.image.description} />
        </div>
        <div>
            <p>{node.description.internal.content}</p>
        </div>
      </Event>
    ))}
  </Wrapper>
)

export default Events
