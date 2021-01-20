import React, {useEffect, useState} from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import AuthorizationService from "./services/auth.service"
import AdminBoard from "./components/role-based/AdminBoard";
import ModeratorBoard from "./components/role-based/ModeratorBoard";
import UserBoard from "./components/role-based/UserBoard";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>(undefined);

    useEffect(() => {
        const user = AuthorizationService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowAdminBoard(user.roles.include("ROLE_ADMIN"));
            setShowModeratorBoard(user.roles.include("ROLE_MODERATOR"));
        }
    })

    const logout = () => {
        AuthorizationService.logout();
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand"> bezkoder</Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">Home</Link>
                    </li>

                    {showAdminBoard && (
                        <li className="nav-item">
                            <Link to={"/admin"} className="nav-link">Admin</Link>
                        </li>
                    )}
                    {showModeratorBoard && (
                        <li className="nav-item">
                            <Link to={"/moderator"} className="nav-link">Moderator</Link>
                        </li>
                    )}

                    {currentUser && (
                        <li>
                            <Link to={"/user"}>User</Link>
                        </li>
                    )}
                </div>

                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/profile"}>{currentUser.name}</Link>
                        </li>
                        <li className="nav-item">
                            <a href={"/login"} onClick={logout}>Logout</a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link to={"/register"}>Register</Link>
                        </li>
                    </div>


                )

                }

            </nav>


            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home}/>
                    <Route exact path={"/register"} component={Register}/>
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/profile"} component={Profile}/>
                    <Route path={"/admin"} component={AdminBoard}/>
                    <Route path={"/moderator"} component={ModeratorBoard}/>
                    <Route path={"/user"} component={UserBoard}/>
                </Switch>
            </div>

        </div>


    );
}

export default App;
