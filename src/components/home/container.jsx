import { connect } from 'react-redux';
import Home from './home.jsx';
import { userActions, defaultActions } from '../../_actions';

function mapStateToProps(state) {
    const { user } = state;
    return  {user} ;
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
    getDefaultPermissions: defaultActions.getDefaultPermissions
};
    
const connectedLoginPage = connect(mapStateToProps, actionCreators)(Home);

export default connectedLoginPage; 