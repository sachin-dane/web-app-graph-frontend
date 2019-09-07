import React from "react"

const ModalComponent = ({ showModal, modalBody, onCloseHandler, title }) => {
    return (
        <div className={showModal ? "modal fade in hangon-popup" : "modal fade"}
            tabIndex="-1"
            style={showModal ? { display: "block" } : { display: "none" }}
            role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" align="center">User Details</h4>
                    </div>
                    <div className="modal-body">
                        <table >
                            <tbody>
                                {
                                    Object.keys(modalBody).map(function (key, index) {
                                        return (
                                            <tr className='user-details-tr'>
                                                <td>{key}</td> : 
                                                <td>{modalBody[key]}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-primary" onClick={(e) => onCloseHandler(false, '')}>OKAY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent