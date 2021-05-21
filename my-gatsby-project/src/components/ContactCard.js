import React from 'react'
import styled from '@emotion/styled'
import useIsInViewport from 'use-is-in-viewport'

const Wrapper = styled.section`
  padding-bottom: 3em;
  display: grid;
  grid-gap: 1em;
  flex-direction: column;
  @media (min-width: ${props => props.theme.responsive.small}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
    height: ${props => props.height || 'auto'};
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
    height: ${props => props.height || 'auto'};
  }
`


const Subtitle = styled.h2`
  z-index: 1;

`
const ContactLine = styled.h3`
  z-index: 1;

`

const ContactCard = props => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20})
  return (

  <Wrapper
  ref={targetRef}
  className={isInViewport ? 'isVisible' : 'isHidden'}
  >
    <Subtitle>Contact us</Subtitle>
    <ContactLine>{props.info.email}</ContactLine>
    <ContactLine>{props.info.phoneNumber}</ContactLine>
    <ContactLine><a target="_blank" rel="noopener noreferrer" href={props.info.instagram}>Instagram</a></ContactLine>
    <ContactLine><a target="_blank" rel="noopener noreferrer" href={props.info.facebook}>Facebook</a></ContactLine>
  </Wrapper>
)}

export default ContactCard
