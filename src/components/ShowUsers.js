import React, { useState, useEffect } from "react";
import axios from 'axios';

import UserInfo from './UserInfo'

export default function ShowUsers() {
    const [data, setData] = useState({ users: [] });

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(
                'https://randomuser.me/api/?results=12',
            );

            setData(res.data);
        };

        fetchData();
    }, []);

    return (
        <div className="wrap">

            {data && data.results && data.results.map((item, index) => {
                return (
                    <UserInfo
                        key={index}
                        userName={item.name.first}
                        phoneNumber={item.phone}
                        email={item.email}
                        age={item.dob.age}
                        imgSrc={item.picture.medium}
                    />
                )

            })}

        </div>
    );
}
