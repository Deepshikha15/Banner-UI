import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Logo from './Logo'
import InvoiceInfo from './InvoiceInfo'
import LineItems from './LineItems'
import Totals from './Totals'
import Footer from './Footer'

const Container = styled.div`
`

const lineItems = [
  {
    
    description: 'Website Design',
    rate: '12.34',
    hours: '100',
    subtotal: '1234.00',
  },
  {
   // quantity: '4',
    description: 'Logo Design',
    rate: '12.34',
    hours: '100',
    subtotal: '1234.00',
  }
  
]

const Invoice = () => (
  <div style={{padding:100}}>

  
  <Container >
    <GlobalStyle />
    <Logo />
    <InvoiceInfo
      invoiceNumber="12345"
      invoiceDate="4th May,16"
      clientName="Client Name"
      companyName="Name"
      companyEmail="Email"
      addressStreet="Town Street"
      addressCityStateZip="Your Address"
    />

    <LineItems
      items={lineItems}
    />

    <Totals
      accountNumber="1234 56789"
      routingNumber="123456"
      dueDate="18 May,16"
      total="$2468.00"
    />

    <Footer />
  </Container>
  </div>
)

export default Invoice
