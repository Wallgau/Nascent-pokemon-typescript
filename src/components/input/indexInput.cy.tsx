import React from 'react'
import Input, { InputProps } from './index'
import { mount } from 'cypress/react18';
import fields from '../../pages/contact/fieldData'

describe('<Input />', () => {
  it('renders', () => {
    fields.map((field: InputProps ) => {
      mount(<Input {...field}/>)
      cy.get('label').invoke('attr', 'for').should('equal', `${field.fieldName}`)
      cy.get('input').should('have.attr.name', `${field.fieldName}`)
      cy.get('input').invoke('attr', 'type').should('equal', `${field.type}`)
      cy.get('input').invoke('attr', 'aria-required').should('equal', `${field.required}`)
    })
  })
})