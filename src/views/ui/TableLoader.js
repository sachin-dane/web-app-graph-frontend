import React from 'react';

const TableLoader = () => {
    return (
        <>
            <div className="body-container">
                <div className="filter-loader m-0">
                    <span className="animated-background" />
                    <span className="animated-background" />
                    <span className="animated-background" />
                    <span className="animated-background" />
                </div>
                <div className="table-loader mt-5">
                    <ul className="m-0">
                        <li className="animated-background lg-width head" />
                        <li className="animated-background lg-width" />
                        <li className="animated-background lg-width delay" />
                        <li className="animated-background lg-width delay-1" />
                        <li className="animated-background lg-width delay-2" />
                    </ul>
                </div>
                <div className="pagination-loader">
                    <span className="animated-background" />
                    <span className="animated-background" />
                    <span className="animated-background" />
                    <span className="animated-background" />
                    <span className="animated-background" />
                </div>
            </div>
        </>
    );
};

export default TableLoader;
