import React from 'react';
import PropTypes from 'prop-types';
import './HeaderBox.scss';
import { Col } from 'reactstrap';
import TrollFaceIcon from '../../../../assets/images/trollface.png';
import TrollFaceIcon3 from '../../../../assets/images/trollface_3.png';

function HeaderBox(props) {
    const { config } = props;
    const {
        title = 'This is title',
        likes,
        achievements,
        photoUrl,
        heighthUrl = '250px',
        width = '200px',
        height = '350px',
        color = '#FFC542',
        marginBottom = '0px',
        marginTop = '0px',
        marginLeft = '0px'
    } = config;

    const imgStyle = {
        padding: '10px',
        width: '100%',
        height: heighthUrl

    };

    const styleBox = {
        // backgroundColor: 'blue',
        width,
        height,
        marginBottom,
        marginTop

    };
    const imgIconStyle = {
        width: '40px',
        height: '40px',
        backgroundColor: 'white',
        borderRadius: '50%'
    };
    return (
        <div style={styleBox} className="box-categories">
            <div className="box-categories__background">
                <img style={imgStyle} className="box-categories__img" src={photoUrl} alt="" />
                <div className="box-categories__content">
                    <p>{title}</p>
                    <p>
                        {/* <img style={imgIconStyle} src={TrollFaceIcon} alt="" /> */}
                        <i className="far fa-laugh" />
                        {likes}
                        Thích
                    </p>
                    <p>
                        {' '}
                        <i className="fab fa-hotjar" />
                        {' '}
                        Hot trend
                    </p>
                </div>
            </div>
        </div>

    );
}

HeaderBox.propTypes = {

};

export default HeaderBox;
