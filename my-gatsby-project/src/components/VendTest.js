
import React from "react"
import JSONData from "../Vend/products.json"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  grid-gap: 2em;
  padding-bottom: 3em;
.htmlContainer {
  p {
    padding: 0;
  }
}
  height: ${props => props.height || 'auto'};
  @media (min-width: ${props => props.theme.responsive.small}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
  }
  clock {
      grid-column: 1 / 1;
  }
`

const VendTest = () => (
  <Wrapper>
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <ul>
      {JSONData.products.map((data, index) => {
        return <li key={`products_name_${index}`}>
           
           {data.name}<img src={data.image}></img></li>;
        
          
      })}
    </ul>
  </div>
  </Wrapper>
)
export default VendTest