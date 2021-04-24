import React, {Component} from 'react';
import {connect} from 'react-redux';
import {folllow, unfolllow, setCurrentPage, toggleFollowingProgress, requestUsers,} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageS, getFollowingInProgressS, getIsFetchingS, getPageSizeS, getTotalUsersCountS,
    getUsersS
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {getUsers, pageSize} = this.props
        getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
            </div>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfolllow}
                   follow={this.props.folllow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    users: getUsersS(state),
    pageSize: getPageSizeS(state),
    totalUsersCount: getTotalUsersCountS(state),
    currentPage: getCurrentPageS(state),
    isFetching: getIsFetchingS(state),
    followingInProgress: getFollowingInProgressS(state),
})
export default compose(
    connect(mapStateToProps,
        {setCurrentPage, toggleFollowingProgress, getUsers: requestUsers, folllow, unfolllow,}),
    /*withAuthRedirect*/
)(UsersAPIComponent)