import React from 'react';
import Input, { InputProps } from './index';
import { mount } from 'cypress/react18';
import fields from '../../pages/contact/fieldData';

interface FieldProps {
    fieldName: string;
    type: string;
    required: boolean;
    pattern: string;
    errorMessage: string;
    placeholder: string;
}

const userValues = {
    name: 'Julie',
    lastname: 'Schiller',
    phoneNumber: '226-781-3434',
    address: '55 Adelaide Street',
    city: 'Toronto',
    postalCode: 'M5V 2T8'
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => jest.spyOn;
const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => jest.spyOn;

describe('<Input />', () => {
    it('renders', () => {
        fields.map((field: FieldProps) => {
            mount(
                <Input
                    {...field}
                    handleChange={handleChange}
                    handleValidation={handleValidation}
                    value=""
                    isValid={true}
                />
            );
            cy.get('label').invoke('attr', 'for').should('equal', `${field.fieldName}`);
            cy.get('input').should('have.attr.name', `${field.fieldName}`);
            cy.get('input').invoke('attr', 'type').should('equal', `${field.type}`);
            cy.get('input').invoke('attr', 'aria-required').should('equal', `${field.required}`);
        });
    });
});
