import React, {useState, useRef} from 'react';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form'
import Input from "react-validation/build/input";
import isEmail from 'validator';

const required = (value:string) =>{
    if(!value){
        return(
            <div className="alert, alert-danger" role='alert'>
                This field is required
            </div>
        )
    }
};


const Login = () => {



    return (
        <div>
            <div>Test</div>
            <Form>Is it work?
                <Input></Input>
                <CheckButton>Some button</CheckButton>
            </Form>
        </div>
    )
};

export default Login;
