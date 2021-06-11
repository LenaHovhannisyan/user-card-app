import React from "react";

export default function UserInfo(props) {
    return (
        <div className="box">
            <div className="info">
                <p>{props.email}</p>
                <p>{props.phoneNumber}</p>
            </div>
            <h1>{props.userName}, {props.age}</h1>
            <div className="avatar">
                <img src={props.imgSrc} />
            </div>
        </div>
    );
}
