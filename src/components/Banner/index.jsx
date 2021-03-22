import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

function Banner(props) {
    return (
        <div>
            <section className="banner">
                <p className="banner__title">A place to share your feelings</p>
            </section>
        </div>
    );
}

Banner.propTypes = {

};

export default Banner;
