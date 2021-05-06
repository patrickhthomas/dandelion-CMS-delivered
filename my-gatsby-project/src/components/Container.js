import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  flex-grow: 1;
  padding-top: 3em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 3em 1.5em 2em;
  }
  .sectionH2 {
     border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
