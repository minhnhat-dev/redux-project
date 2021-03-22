import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../../custom-fields/InputField';

import './FormLogin.scss';

const listFields = [
    {
        name: 'email',
        component: InputField,
        type: 'text',
        label: 'Email',
        placeholder: 'Email'
    },
    {
        name: 'password',
        component: InputField,
        type: 'password',
        label: 'Password',
        placeholder: 'Your Password'
    }
];

function FormLogin(props) {
    const { onSubmit, initValues, isAddMode } = props;
    const initialValues = {
        email: '',
        password: ''
    };
    const userLoginSchema = Yup.object().shape({
        email: Yup.string()
            .required('Field is required!'),
        password: Yup.string()
            .required('Field is required!')
    });

    function handleOnSubmit(values, actions) {
        onSubmit(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userLoginSchema}
            onSubmit={handleOnSubmit}
        >
            {(formikProps) => {
                const { isSubmitting } = formikProps;
                return (
                    <Form className="form-photo">
                        {listFields && listFields.map((item) => (
                            <FastField
                                name={item.name}
                                component={item.component}
                                type={item.type}
                                label={item.label}
                                placeholder={item.placeholder}
                            />
                        ))}
                        <Button
                            type="submit"
                            outline
                            color={isAddMode ? 'primary' : 'success'}
                        >
                            Login
                            {isSubmitting && <Spinner size="sm" color="dark" />}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
}

FormLogin.propTypes = {

};

export default FormLogin;
