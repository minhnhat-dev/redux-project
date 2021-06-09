import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import InputField from '../../../../custom-fields/InputField';

import './FormRegister.scss';

const listFields = [
    {
        name: 'name',
        component: InputField,
        type: 'text',
        label: 'Tên',
        placeholder: 'Tên'
    },
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
        label: 'Mật khẩu',
        placeholder: 'Mật khẩu'
    },
    {
        name: 'confirm_password',
        component: InputField,
        type: 'password',
        label: 'Xác nhận mật khẩu',
        placeholder: 'Xác nhận mật khẩu'
    }
];

function FormRegister(props) {
    const { onSubmit, initValues, isAddMode } = props;
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    };
    const userLoginSchema = Yup.object().shape({
        name: Yup.string()
            .required('Tên buộc nhập!'),
        email: Yup.string()
            .required('Email buộc nhập!'),
        password: Yup.string()
            .required('Mật khẩu buộc nhập!'),
        confirm_password: Yup.string()
            .required('Xác nhận mật khẩu buộc nhập!')
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
                    <Form className="form-input">
                        {listFields && listFields.map((item) => (
                            <FastField
                                name={item.name}
                                component={item.component}
                                type={item.type}
                                label={item.label}
                                placeholder={item.placeholder}
                            />
                        ))}
                        <div className="form-input__box-input">
                            <button type="submit" className="form-input__login">
                                Xác nhận
                                {isSubmitting && <Spinner size="sm" color="dark" />}
                            </button>
                            <NavLink
                                to="/login"
                                className="form-input__login"
                            >
                                Đăng nhập
                            </NavLink>

                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

FormRegister.propTypes = {

};

export default FormRegister;
