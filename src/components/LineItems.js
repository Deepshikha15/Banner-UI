import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InvoiceTable from './InvoiceTable'

const Quantity = styled.th`
  width: 50px;
`

const Description = styled.th`
`

const Price = styled.th`
  text-align: right;
  width: 100px;
`

const Subtotal = styled.th`
  width: 100px;
`

// const RightAlignedCell = styled.td`
//   text-align: right;
// `

const LineItems = ({
  items
}) => (
  <InvoiceTable
    headings={(
      <>
        <Description>Description</Description>
        <Price>Rate</Price>
        <Quantity>Hours</Quantity>
        <Subtotal>Subtotal</Subtotal>
      </>
    )}
  >
    {items.map((item, i) => (
      <tr key={item.description + i}>
        
        <td>{item.description}</td>
        <td>{item.rate}</td>
        <td>{item.hours}</td>
        <td><strong>{item.subtotal}</strong></td>
      </tr>
    ))}
  </InvoiceTable>
)

LineItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    
    description: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    subtotal: PropTypes.string.isRequired,
  })).isRequired,
}

export default LineItems
