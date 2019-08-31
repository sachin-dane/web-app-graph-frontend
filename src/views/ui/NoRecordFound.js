import React from 'react';

const NoRecordFound = ({ isloading, loadingSizeCLass }) => {
    return (
        <div className={`animated mt-5 mr-5 ${loadingSizeCLass}`}>
            <div className="dashboard-cols row">
                <div className="col-12">
                    <span className="animated-background sm lg-width">
                        <div
                            className={
                                isloading
                                    ? 'no-records-found d-none'
                                    : 'no-records-found d-flex'
                            }
                        >
                            <span> No Records Found </span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NoRecordFound;
