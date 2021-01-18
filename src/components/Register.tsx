import React, {useState, useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import isEmail from "validator/lib/isEmail";
// import validator from "validator";

const required = (value: string) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (email: string) => {
    if (!isEmail(email)) {
        <div className='alert alert-danger' role='alert'>
            This is not valid email!
        </div>
    }
};

const validUsername = (username: string) => {
    if (username.length < 3 || username.length > 20) {
        return (
            <div className='alert alert-danger' role='alert'>
                User name should be between 3 and 20 characters!
            </div>
        )
    }
};
const validPassword = (password: string) => {
    if (password.length < 6 || password.length > 40) {
        return (
            <div className='alert alert-danger' role='alert'>
                Password should be between 6 and 40 characters!
            </div>
        )
    }
};

const Register = (props: any) => {
    const form = useRef<any>(null);
    const checkBtn = useRef<any>();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e: any) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeEmail = (e: any) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handleLogin = (e: any) => {
        e.preventDefault();

        setMessage('');
        setSuccessful(true);

        form.current.validateAll();

        if (checkBtn.current._errors.length === 0) {
            AuthService.register(username, password, email).then((response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                }, (error) => {
                    const errMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(errMessage);
                    setSuccessful(false);
                }
            );
        } else {
            setSuccessful(false);
        }
    };


    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <Form onSubmit={handleLogin} ref={form}>
                    <div className="form-group">
                        <label htmlFor='username'>Username</label>
                        <Input
                            type='text'
                            className='form-control'
                            name='username'
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}>
                        </Input>
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password</label>
                        <Input
                            type='password'
                            className='form-control'
                            name='password'
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}>
                        </Input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </button>
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </div>
                    <CheckButton style={{display: 'none'}}></CheckButton>
                </Form>
            </div>
        </div>
    )
};

export default Register;
