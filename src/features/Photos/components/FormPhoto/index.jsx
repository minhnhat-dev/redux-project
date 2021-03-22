import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';
import { CATEGORIES } from '../../../../constants/global.constant';
import './FormPhoto.scss';

const listFields = [
    {
        name: 'title',
        component: InputField,
        type: 'text',
        label: 'Title',
        placeholder: 'Eg: My Title'
    },
    {
        name: 'category',
        component: SelectField,
        type: 'select',
        label: 'Category',
        options: CATEGORIES
    },
    {
        name: 'content',
        component: InputField,
        type: 'textarea',
        label: 'Content',
        placeholder: 'Eg: My Content'
    },
    {
        name: 'photoUrl',
        component: RandomPhotoField,
        label: 'Random A Photo'
    }
];

function FormPhoto(props) {
    const { onSubmit, initValues, isAddMode } = props;
    const createPhotoSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Field is required!'),
        content: Yup.string()
            .max(500, 'Too Long!'),
        category: Yup.string()
            .required('Field is required!'),
        photoUrl: Yup.string().required('Field is required!')
    });

    function handleOnSubmit(values, actions) {
        onSubmit(values);
    }

    return (
        <Formik
            initialValues={initValues}
            validationSchema={createPhotoSchema}
            onSubmit={handleOnSubmit}
        >
            {(formikProps) => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                } = formikProps;
                return (
                    <Form className="form-photo">
                        <FastField
                            name="title"
                            component={InputField}

                            type="text"
                            label="Title"
                            placeholder="Eg: My Title"
                        />

                        <FastField
                            name="category"
                            component={SelectField}

                            type="select"
                            label="Category"

                            options={CATEGORIES}
                        />

                        <FastField
                            name="content"
                            component={InputField}

                            type="textarea"
                            label="Content"
                            placeholder="Eg: My Content"
                        />

                        <FastField
                            name="photoUrl"
                            component={RandomPhotoField}

                            label="Random A Photo"
                        />

                        <Button
                            type="submit"
                            outline
                            color={isAddMode ? 'primary' : 'success'}
                        >
                            {isAddMode ? 'Add to album' : 'Update your photo' }
                            {isSubmitting && <Spinner size="sm" color="dark" />}
                        </Button>
                    </Form>
                );
            }}

        </Formik>

    );
}

FormPhoto.propTypes = {

};

export default FormPhoto;
