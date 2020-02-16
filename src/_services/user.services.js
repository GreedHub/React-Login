import { AppConstants } from '../_constants';
const axios = require('axios').default;

export const userService = {
    login,
}

function login(username,password){
    return new Promise(async(resolve,reject)=>{

        const options = {
            url: `${AppConstants.API_URL}/login`,
            method: 'post',
            headers: {
                'Accept': 'application/json',
            },
            data: {
                username,
                password,
            }
        };

        await axios(options)
            .then(response=>resolve(response))
            .catch(err=> reject(err));

    })
}