import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Body from './body';
import Footer from './footer';
import './assets/scss/base.scss';
Market.propTypes = {
    
};

function Market(props) {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

export default Market;