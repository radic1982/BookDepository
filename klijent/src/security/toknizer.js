export const getToken = () => {
    var token = localStorage.getItem('currentUser');
    
    return token; 
}

export const setToken = (data) => {
    return localStorage.setItem('currentUser',data);
}

export const removeToken = () => {
    return localStorage.removeItem('currentUser');
}
