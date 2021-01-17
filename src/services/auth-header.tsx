export default function getAuthorizationHeader() {
    const user = JSON.parse(localStorage.getItem('user')!);

    if(user && user.token){
        return {Authorization: 'Bearer' + user.token}
    }else {
        return {}
    }
}