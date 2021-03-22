import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
// field, // { name, value, onChange, onBlur }
// form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
// ...props
SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

SelectField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    options: [],
    disabled: false
};

function SelectField(props) {
    const { label, field, form, type, placeholder, disabled, options } = props;
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
            >
                {options.map((option, index) => (
                    <option
                        key={index.toString()}
                        value={option.value}
                    >
                        {option.title}
                    </option>
                ))}
            </Input>
            <ErrorMessage name={name} component={FormFeedback} />
            {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
        </FormGroup>
    );
}

export default SelectField;
