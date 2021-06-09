import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';
import { Container, Row, Col, Button } from 'reactstrap';
import BannerImage from '../../assets/images/banner1.png';

function Banner(props) {
    return (
        <section>
            <Container>
                <Row className="about">
                    <Col xs="6">
                        <div>
                            <h3 className="about__header">Nơi xã xì trét</h3>
                            <p>Nơi bạn xã tresst và chia sẽ những bức ảnh hài hước đến bạn bè.</p>
                            <p>Chia sẻ ảnh của bạn ngay !</p>
                            <Button color="success">Đăng nhập</Button>
                        </div>
                    </Col>

                    <Col xs="6">
                        <div>
                            <img className="about__image" src={BannerImage} alt="xam.com" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

Banner.propTypes = {

};

export default Banner;
