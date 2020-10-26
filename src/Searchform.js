import React from 'react'
import {Form,Col} from 'react-bootstrap'

export default function Searchform({params,onParamChange}) {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
            
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} value=
                    {params.desription} name="description" type="text"/>

                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamChange} value=
                    {params.Location} name="Location" type="text"/>

                </Form.Group>
                <Form.Group as={Col} xs="auto" className="m1-2">
                    <Form.Check onCange={onParamChange} value=
                    {params.full_time} name="full_time" id="full-time"
                    label="only Full Time" type="Checkbox"/>

                </Form.Group>
            </Form.Row>
        </Form>

           )
}
