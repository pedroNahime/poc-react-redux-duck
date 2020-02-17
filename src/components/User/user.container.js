import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Creators as UserActions} from "../../store/ducks/User";
import {User as UserComponent} from './user.component'

export const mapStateToProps = state => ({
    user: state.userReducers.user[0]
});

export const mapDispatchToProps = dispatch =>
    bindActionCreators({getUser:UserActions.getUser}, dispatch);

export const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserComponent);