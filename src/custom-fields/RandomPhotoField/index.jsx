import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
import PhotoForm from '../../components/PhotoForm';

function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    function handleOnChangePhoto(newImageUrl) {
        form.setFieldValue(name, newImageUrl);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label> }
            <PhotoForm
                name={name}
                imageUrl={value}
                onChangePhoto={handleOnChangePhoto}
                onBlurChangePhoto={onBlur}
            />
            <div className={showError ? 'is-invalid' : ''} />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

RandomPhotoField.propTypes = {

};

export default RandomPhotoField;
