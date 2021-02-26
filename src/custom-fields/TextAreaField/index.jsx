import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
// field, // { name, value, onChange, onBlur }
// form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
// ...props
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
};

function InputField(props) {
    const { label, field, form, type, placeholder, disabled } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                {...field}
                type={type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
            {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
        </FormGroup>
    );
}

export default InputField;
