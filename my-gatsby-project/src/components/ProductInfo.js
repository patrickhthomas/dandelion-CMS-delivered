import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { TiPlusOutline } from 'react-icons/ti'




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
`
const Title = styled.h2`
`

const SubSection1 = styled.div`
max-width: 100%;
display: flex;
flex-flow: column nowrap;
padding-bottom: 2em;
h3, p {
    padding-bottom: .5em;
}

`



const Products = styled.div`
display: grid;
max-width: 100%;
padding-top: 2em;
grid-gap: .5em;

`

const Product = styled.div`
width: 100%;
display: grid;
grid-gap: 2em;
justify-content: start;
@media (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-gap: 1em;
}
@media (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    padding-bottom: 2em;
    row-gap: 4em;
}
.child {
    width: 90%;
    border-radius: 1em;
    box-shadow: 0px 0px 25px rgba(113, 54, 186, 0.2);
    
    
    
    margin: auto;
    p, h3 {
        color: white;
    }
    display: grid;
    grid-template-areas: 
    "a a a"
    "b b b"
    "c c c";
    align-items: center;
    max-width: 1060px;
    max-width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: minmax(3em,6em) 3em auto;
    overflow: hidden;
    height: 100%;
    transition: all .2s ease-in-out;
    cursor: pointer;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    &:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.05);
        .frost {
            background: ${props => props.theme.colors.primary};
        }
    }
    
    
    `
    const Description = styled.p`
    
    `
    const Price = styled.p`
    
    
    `
    
    const ProductName = styled.h3`
    
    `
    const ProductImage = styled.div`
    overflow: hidden;
    display: grid;
    width: 100%;
    max-width: 600px;
    img {
        min-width: 100%;
        max-width: 120%;
        align-self: end;
    }
    @media (min-width: ${props => props.theme.responsive.small}) {
        img {
        }
    }
    @media (min-width: ${props => props.theme.responsive.medium}) {
        img {
        }
        @media (min-width: ${props => props.theme.responsive.large}) {
            img {

            }
        }
        `
        const Frost = styled.div`
        grid-area: c;
        display: flex;
        padding-top: 1em;
        padding-bottom: .5em;
        justify-content: space-evenly;
        flex-flow: column nowrap;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.colors.fadedPurple};
        `
        
        
        const ProductInfo = props => (
            
            <Wrapper>
            
            <SubSection1>

            <Title class="sectionH2">{props.productName}</Title>
            <Product>
            <ProductImage><img src={props.productImage.file.url}/></ProductImage>
            <ProductName>{props.productName}</ProductName>
            <Description dangerouslySetInnerHTML={{ __html: props.description }}></Description>
            <Price>{props.price}</Price>
            
            
            </Product>

            
            
            </SubSection1>
            
            
            </Wrapper>
            )
            
            export default ProductInfo
            