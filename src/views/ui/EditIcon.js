import React from 'react';
import ReactTooltip from 'react-tooltip';

const EditIcon = ({ clickHandler }) => (
    <>
        <span
            aria-hidden="true"
            data-tip="Edit"
            className="icon edit"
            onClick={() => clickHandler()}
        />
        <ReactTooltip place="bottom" />
    </>
);

export default EditIcon;
