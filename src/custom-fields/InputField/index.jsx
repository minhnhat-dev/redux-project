import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
// field, // { name, value, onChange, onBlur }
//    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//    ...props
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
    const { label, field, type, placeholder, disabled } = props;
    const { name } = field;
    console.log('field', field);
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input {...field} type={type} id={name} placeholder={placeholder} disabled={disabled} />
        </FormGroup>
    );
}

export default InputField;
