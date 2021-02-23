import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import InputField from '../../../../custom-fields/InputField';

function FormPhoto(props) {
    const initValues = {
        test: ''
    };
    return (
        <Formik
            initialValues={initValues}
        >
            <Form>
                <FastField
                    name="test"
                    component={InputField}

                    type="text"
                    label="Test Ne"
                    placeholder="Test"
                />
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Eg: Some title" />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Select</Label>
                    <Input type="select" name="category" id="category" placeholder="What your category ?">
                        <option>Fashion</option>
                        <option>Car</option>
                        <option>Natural</option>
                    </Input>
                </FormGroup>
                <Label for="photo">Photos</Label>
                <FormGroup>
                    <Button outline color="info" id="photo">Random A Photo</Button>
                    <div>
                        <img className="box-input__image" src="https://picsum.photos/500/600" width="300" height="400" />
                    </div>
                </FormGroup>
                <Button type="submit" color="primary">Add to album</Button>
            </Form>
        </Formik>

    );
}

FormPhoto.propTypes = {

};

export default FormPhoto;
