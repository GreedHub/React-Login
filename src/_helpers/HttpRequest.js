const req = require('request');

export const HttpRequest = {
    request,
}

function request (options) {
    return new Promise((resolve,reject)=>{
        req(options, function(err, res, body) {
            err ? reject(err) : resolve(JSON.parse(body));
        });
    })
}