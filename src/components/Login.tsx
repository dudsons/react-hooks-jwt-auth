import React, {useState, useRef} from 'react';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form'
import Input from "react-validation/build/input";
const Login = () => {
    const aaa = "some text";


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
