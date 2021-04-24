import React from "react"
import Friends from "./Friends";
import {connect} from "react-redux";
import {getFriends} from "../../redux/friends-reducer";
import {folllow, unfolllow} from "../../redux/users-reducer";
import {getFollowingInProgressS} from "../../redux/users-selectors";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return <div>
            <Friends
            friendsPage={this.props.friendsPage}
            friends={this.props.friendsPage.friends}
            />
        </div>
    }
}

let mapStateToProps = (state) => ({
    friendsPage: state.friendsPage,
})

export  default connect (mapStateToProps,{getFriends})(FriendsContainer)
