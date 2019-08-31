import React from 'react';
import ReactTooltip from 'react-tooltip';

const DeleteIcon = ({ clickHandler }) => {
    return (
        <>
            <span
                data-toggle="tooltip"
                aria-hidden="true"
                data-placement="top"
                data-tip="Delete"
                className="icon delete"
                onClick={() => clickHandler()}
            />
            <ReactTooltip place="bottom" />
        </>
    );
};

export default DeleteIcon;
