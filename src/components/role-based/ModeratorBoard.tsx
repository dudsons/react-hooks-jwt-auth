import {useState, useEffect} from 'react'
import UserService from '../../services/user.service';

const AdminBoard = () => {
    const [content, setContent] = useState<any>('');

    useEffect(() => {
        UserService.getAdminBoard().then(
            (response) => {
                setContent(response);
            },
            (error: any) => {
                setContent(error)
            }
        )
    }, []);


    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    );
}

export default AdminBoard;
