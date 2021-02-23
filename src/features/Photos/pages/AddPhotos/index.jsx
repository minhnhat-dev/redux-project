import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import FormPhoto from '../../components/FormPhoto';
import './AddPhotos.scss';

function AddPhotos(props) {
    return (
        <section className="box-input">
            <Row>
                <Col xs="auto">
                    <FormPhoto />
                </Col>
            </Row>
        </section>
    );
}

AddPhotos.propTypes = {

};

export default AddPhotos;
