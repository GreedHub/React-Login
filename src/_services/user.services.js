import { AppConstants } from '../_constants';
const HttpRequest = require('../_helpers/HttpRequest');

export const userService = {
    getDefaultPermissions,
}

function getDefaultPermissions(){
    return new Promise(async(resolve,reject)=>{

        const options = {
            url: `${AppConstants.API_URL}/getDefaultPermissions`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            }
        };

        await HttpRequest.request(options)
            .then(response=>resolve(response))
            .catch(err=> reject(err));

    })
}