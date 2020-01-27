import { connect } from 'react-redux';
import Login from '../components/login/login';
import { userActions, defaultActions } from '../_actions';

function mapStateToProps(state) {
    const { user } = state;
    return  {user} ;
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
    getDefaultPermissions: defaultActions.getDefaultPermissions
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(Login);

export default connectedLoginPage; 