import { AppConstants } from '../_constants';
const axios = require('axios').default;

export const defaultServices = {
    getDefaultPermissions,
}

function getDefaultPermissions(){
    return new Promise(async(resolve,reject)=>{

        const options = {
            url: `${AppConstants.API_URL}/getDefaultPermissions`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
            }
        };

        await axios(options)
            .then(response=>resolve(response))
            .catch(err=> reject(err));

    })
}