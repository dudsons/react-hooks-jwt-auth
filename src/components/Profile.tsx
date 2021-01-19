import React from 'react'
import AuthService from '../services/auth.service'

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    const exampleUserRole = ["admin", "user", "doctor", "nurse"];
    return (
        <div>
            <ul>
                {exampleUserRole &&
                exampleUserRole.map((role:string, index:number) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    )
}


export default Profile;
