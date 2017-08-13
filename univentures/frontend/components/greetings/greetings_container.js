import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import Greetings from './greetings';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greetings);