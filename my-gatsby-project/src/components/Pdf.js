import React, { Component } from 'react'
import Pdf from '../../static/images/TeahouseMenu.pdf'
import PdfIcon from '../components/Icons/pdfIcon'
import styled from '@emotion/styled'

const PdfLink = styled.a`
display: flex;
flex-flow: column nowrap;
text-align: center;
`

class PdfMenu extends Component {

  render() {

    return (
        <PdfLink href = {Pdf} target = "_blank">
          <PdfIcon/>
          <p>View the PDF Version &gt;</p>
        </PdfLink>
    );

  }
}

export default PdfMenu;