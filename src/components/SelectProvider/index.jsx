import React from 'react';
import { Form } from 'react-bootstrap';
import { serviceProvideOptions, strings } from '../../helpers/constants';

const SelectProvider = ({ selectedProvider, onSelectProvider }) => {

    return (
        <Form>
            <Form.Group>
                <Form.Label>{strings.selectProvider}</Form.Label>
                <Form.Control value={selectedProvider} as="select" onChange={onSelectProvider}>
                    {serviceProvideOptions.map((data) => {
                        return <option value={data.value}>{data.label}</option>
                    })}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default SelectProvider;
