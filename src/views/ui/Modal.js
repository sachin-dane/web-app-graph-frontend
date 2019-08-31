import React from 'react';
import Modal from 'react-responsive-modal';

const modal = ({ isOpen, title, bodyText, closeModal, handleSubmit }) => {
    return (
        <div>
            <Modal open={isOpen} onClose={closeModal} center>
                <div className="custom-modal">
                    <div className="custom-modal-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="custom-modal-content">
                        <p className="mb-5 secondary-title">{bodyText}</p>
                    </div>
                    <div className="custom-modal-actions d-flex">
                        <button
                            type="button"
                            className="btn btn-primary sm-btn mr-3 justify-content-center"
                            onClick={handleSubmit}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary sm-btn mr-2 justify-content-center"
                            onClick={closeModal}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default modal;
