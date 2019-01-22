import { post } from '../xhr/fetch';
import history from '../history';
import { getLoggedUserRole } from '../security/roleManagement';
import { getRoles } from '../security/roleManagement';
import { setToken } from '../security/toknizer';
import { getToken } from '../security/toknizer';
import { removeToken } from '../security/toknizer';
import jwt_decode from 'jwt-decode';
import { LOGIN_USER, LOGIN_ADMIN, LOGOUT_USER } from '../types/types';


const getUserBasicData = (token) => {
    let basicData = {};
    basicData.firstName = jwt_decode(token).firstName;
    // last name;
}

export const login = ({ username, password }) => {
    return function (dispatch) {
            post('login', { username, password }).then((res)=> {
                const token = res.data.token;
                setToken(token);

               // console.log(jwt_decode(token));
                const currentRole = getLoggedUserRole();
                //console.log(currentRole);
                console.log(getRoles(token));
                const role = getRoles(token);

                let userBasicData = getUserBasicData(token);
                userBasicData.role = role;

                const str = role[0];
                const admin = "ADMINISTRATOR";
                if (str === admin) {
                    dispatch({type: 'LOGIN_ADMIN', payload: userBasicData })
                    history.push('/adminProfile');
                } else {
                    dispatch({type: 'LOGIN_USER', payload: userBasicData })
                    history.push('/userProfile');
                }
            })
    }
}

// const data = login({username: 'a', password: 'b'}); //vraca funkciju
// data({...}); //curry; partial function application

/* export const isLoggedIn = () => dispatch => {
    if (getToken() !== '') return true;
    else return false;
  }
 */

// export const abs = () => 'abs';
// export const abs = () => {
//     return 'abc';
// }

export const logout = (history) => dispatch => {
    dispatch(removeToken());
    history.push('/login');
}
