import React from "react";

const Comment = ({ _id, userId, pageId, content, created_at }) => {
    return (
        <>
            <div className="bg-light card-body  mb-3">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-start ">
                            <img
                                src="https://avatars.dicebear.com/api/avataaars/qweqwdas"
                                className="rounded-circle shadow-1-strong me-3"
                                alt="avatar"
                                width="65"
                                height="65"
                            />
                            <div className="flex-grow-1 flex-shrink-1">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-1 ">
                                            //User Name
                                            <span className="small">
                                                //Published Time
                                            </span>
                                        </p>
                                        <button className="btn btn-sm text-primary d-flex align-items-center">
                                            <i className="bi bi-x-lg"></i>
                                        </button>
                                    </div>
                                    <p className="small mb-0">
                                        //Comment content
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comment;
