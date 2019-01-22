import { getToken } from './toknizer';
import { get } from '../xhr/fetch';
import jwt_decode  from 'jwt-decode';

export const getLoggedUserRole = () => {
    const token = getToken();
    const role = getRoles(token);
    return role;
}

export const getRoles = (data) => {
    var token = jwt_decode(data);
    

    return token.roles.map(x => x.authority) || [];
  }
