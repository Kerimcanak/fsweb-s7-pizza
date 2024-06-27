import React from 'react'
import OrderPizza from './orderPizza'

describe('<OrderPizza />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OrderPizza />)
  })
})