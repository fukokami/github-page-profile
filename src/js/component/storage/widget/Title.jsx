'use strict';

import { toLower } from 'ramda';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { STORAGE } from '../../../constants/tabList';

export default function Title({ title, total }) {

    const path = `/${STORAGE}/${toLower(title)}`;
    return (
        <div className="title">
            <div className="top">
                <p>{`${title} (${total})`}</p>

                <Link to={path} className="more">
                    More&nbsp;
                    <i className="fas fa-angle-double-right"></i>
                </Link>

            </div>
        </div>
    );
}

Title.propTypes = {
    title: PropTypes.string,
    total: PropTypes.number
};
