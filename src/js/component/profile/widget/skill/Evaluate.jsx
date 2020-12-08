'use strict';

import { range } from 'ramda';

import React from 'react';
import { array } from 'prop-types';

import getPropWithDefval from '../../../../utils/defval/get-prop-with-defval';
import { getId, getValue, getEvaluate, getPoint } from '../../../../utils/defval/get-data-with-defval';

const getTitleCustom = getPropWithDefval('title', '');

const renderEvaluatePoint = (item) => {

    const MAX_POINT = 5;

    return getEvaluate(item).map(
        evaluate =>
            <div key={getId(evaluate)}>
                <p>{getTitleCustom(evaluate)}</p>
                &nbsp;
                {
                    range(0, MAX_POINT).map(
                        item => <i key={getId(item)} className={`${item < getPoint(evaluate) ? 'fas' : 'far'} fa-star`}></i>
                    )
                }
            </div>
    );
};

Evaluate.propTypes = {
    evaluateList: array
};

export default function Evaluate({ evaluateList }) {

    return (
        <div className="evaluate-area">
            {
                evaluateList.map(
                    item =>
                        <div key={getId(item)} className="evaluate">
                            <p>{getValue(item)}</p>
                            <div className="point">
                                {
                                    renderEvaluatePoint(item)
                                }
                            </div>
                        </div>
                )
            }
        </div>
    );
}
