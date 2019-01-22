import { GET_EBOOKS, GET_EBOOK, PUT_EBOOKS, REMOVE_EBOOKS, POST_EBOOKS, LOGIN_ADMIN, LOGIN_USER, GET_USERS, GET_CATEGORIES } from "../types/types";

const ebooksInitialState = {
    ebooks: []
};

export const getEbooks = (state = ebooksInitialState, action) => {

    switch(action.type) {
        case GET_EBOOKS:
            return {...state, ebooks: action.payload};
       /*  case REMOVE_EBOOKS:
            return state.filter(({id})=>id !== action.payload);
        case POST_EBOOKS:
            return [...state, action.payload];
        case PUT_EBOOKS:
            return state.map((data)=>{
                if(data.id === action.payload.id) {
                    return {
                        ...data,
                        ...action.payload
                    }
                }
            }) */
        default:
            return state;
    }
}

const detail = {
    
    ebook: {
        id:0,
        title:'',
        author:'',
        publicationYear:0,
        language: {},
        category: {} 
    } 
};

export const getEbook = (state = detail, action) => {
    switch(action.type){
        case GET_EBOOK:
           /* const currentEbook = { 
               id: action.payload.id,
                author: action.payload.author,
                title: action.payload.title,
                publicationYear: action.payload.publicationYear,
                language: {id:action.payload.language.id, name: action.payload.language.name},
                category: {id: action.payload.category.id, name: action.payload.category.name}
             }  */
             console.log(action.payload);
            return {...state, ebook: {...action.payload}}
        default:
            return state;
        }
}

const loginUser = {
    user:{
        username:'',
        password:''
    }
}

export const login = (state = loginUser, action) => {
    switch(action.type){
        case LOGIN_ADMIN:
            return {...state, user:{ ...action.payload}}
        case LOGIN_USER:
            return {...state, user: {...action.payload}}
        default:
            return state;
    }
}

const stateUsers = {
    users: []
}

export const getUsers = (state = stateUsers, action) => {
    switch(action.type){
        case GET_USERS:
        return {...state, users: action.payload}
        default:
        return state;
    }
}

const stateCategories = {
    categories: []
}

export const getCategories = (state = stateCategories, action) => {
    switch(action.type){
        case GET_CATEGORIES:
        return {...state, categories: action.payload}
        default:
        return state;
    }
}
