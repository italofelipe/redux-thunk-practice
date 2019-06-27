import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends Component {
  componentDidMount = () => {
    this.props.fetchUser(this.props.userId);
  };
  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);
    if (!user) {
      return null;
    }
    return (
      <Fragment>
        <h5>{user.name}</h5>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);