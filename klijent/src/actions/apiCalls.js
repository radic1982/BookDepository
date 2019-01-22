import { get, post, put, remove } from '../xhr/fetch';
import { GET_EBOOKS, GET_EBOOK, POST_EBOOKS, PUT_EBOOKS, REMOVE_EBOOKS, GET_USERS, GET_CATEGORIES } from '../types/types';

export const getEbooks = () => dispatch => {
    get('ebooks')
        .then(res =>
            dispatch({type: GET_EBOOKS, payload: res.data.content}))
}
export const getEbook = (id) => dispatch => {
    get(`ebooks/${id}`)
    .then(res =>
         
        dispatch({type: GET_EBOOK, payload: res.data}))
}

export const postEbooks = (data) => dispatch => {
    post('ebooks', data)
    .then(res =>{ 
        
        dispatch({type: POST_EBOOKS, payload: res.data})})
}

export const putEbooks = (data) => dispatch => {
    put(`ebooks/${data.id}`, data)
    .then(res => dispatch({type: PUT_EBOOKS, payload: res.data}))
}

export const removeEbooks = (id) => dispatch => {
    remove(`ebooks/${id}`)
    .then(res => dispatch({type: REMOVE_EBOOKS, payload: res.data}))
}

export const getUsers = () => dispatch => {
    get('users')
    .then(res => dispatch({type: GET_USERS, payload:res.data}))
}
export const getCategories = () => dispatch => {
    get('categories')
    .then(res => dispatch({type: GET_CATEGORIES, payload: res.data}))
}



// {params:{page:0, title:'', author: ''}}