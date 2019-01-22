import axios from 'axios';

export default () => {
    axios.interceptors.request.use(config => {
      const id = localStorage.getItem('currentUser');
      if (id) {
        config.headers.common['X-Auth-Token'] = id;
      }
      return config;
    }, error => Promise.reject(error));
  }
