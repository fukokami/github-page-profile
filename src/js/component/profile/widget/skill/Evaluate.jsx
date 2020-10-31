'use strict';

import { range } from 'ramda';

import React from 'react';
import { array } from 'prop-types';

import { getId, getValue, getEvaluate, getTitle, getPoint } from '../../../../utils/get-data-with-defval';


const renderEvaluatePoint = (item) => {

    const MAX_POINT = 5;

    return getEvaluate(item).map(i => {
        return (
            <div key={getId(i)}>
                <p>{getTitle(i)}</p>
                &nbsp;
                {
                    range(1, MAX_POINT + 1)
                        .map(
                            (item, index) => {
                                const id = `${getId}-${index}`;
                                return item < getPoint(i)
                                    ? <i key={id} className="fas fa-star"></i>
                                    : <i key={id} className="far fa-star"></i>;
                            }
                        )
                }
            </div>
        );
    });
};

export default function Evaluate({ evaluateList }) {

    return (
        <div className="evaluate-area">
            {
                evaluateList.map(item => {
                    return (
                        <div key={getId(item)} className="evaluate">
                            <p>{getValue(item)}</p>
                            <div className="point">
                                {
                                    renderEvaluatePoint(item)
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

Evaluate.propTypes = {
    evaluateList: array
};