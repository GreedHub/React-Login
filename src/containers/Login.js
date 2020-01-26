import { connect } from 'react-redux';
import AppGlobals from '../config/AppGlobals'
import Login from '../components/login/login';
const request = require('request');

const mapStateToProps = state =>{
    return {token: state.token}
}

const mapDispatchToProps = dispatch => {
    return {
        login: async (username,password)=> {
            const options = {
                url: `${AppGlobals.baseURL}/login`,
                method: 'POST',
                body:JSON.stringify({
                    user:username,
                    password
                }),
                headers: {
                    'Accept': 'application/json',
                    'Accept-Charset': 'utf-8',
                    'Content-Type':'application/json'
                }
            };

            let response = await new Promise((resolve,reject)=>{
                request(options, function(err, res, body) {
                    let response = JSON.parse(body);             
                    resolve({type:'LOGIN',token:response.token});
                });
            });

            dispatch(response);
            
        }
    }
}

const createConnection = connect( mapStateToProps, mapDispatchToProps);

const ComponentWithConnectionToRedux = createConnection(Login);

export default ComponentWithConnectionToRedux; 