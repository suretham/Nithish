import axios from 'axios';
const BASE_URL = 'http://localhost:3200';
export function getProducts() {
        return axios.get(`${BASE_URL}/api/menuitems`)
                    .then(response => response.data);
                    
}
export function getCustomer(customeremail) {
        return axios.post(`${BASE_URL}/api/customers`, {customeremail})
                .then(response => response.data);
               
}

export function getCustomerByEmail(customeremail) {
        return axios.get(`${BASE_URL}/api/customers/email`, {customeremail})
                .then(response => response.data);
               
}

export function login (data) {
  return axios.post(`${BASE_URL}/api/auth`, 
                    { name: data.name, password: data.password })
    .then(response => {
       localStorage.setItem('x-access-token', response.data.token);
       localStorage.setItem('x-access-token-expiration', 
                            Date.now() + 2 * 60 * 60 * 1000);
      return response.data})
    .catch(err => Promise.reject('Authentication Failed!'));
}
export function pay (data) {
        return axios.get(`${BASE_URL}/api/pay`, 
            { params: { 'x-access-token': localStorage.getItem('x-access-token')} })
                .then(response => response.data)
                .catch(err => Promise.reject(err));
}
export function isAuthenticated(){
        return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
}