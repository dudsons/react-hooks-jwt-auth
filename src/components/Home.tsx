import React, {useEffect, useState} from 'react';
import UserService from '../services/user.service';
import {Simulate} from "react-dom/test-utils";

const Home = () => {

    const [content, setContent] = useState<any>();


    useEffect(()=>{
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) =>{
                const errMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setContent(errMessage);
            }
        )
    },[]);

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    )
};

export default Home;
