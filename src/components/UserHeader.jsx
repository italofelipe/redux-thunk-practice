import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends Component {
  componentDidMount = () => {
    this.props.fetchUser(this.props.userId);
  };
  render() {
    const { user } = this.props;
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

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
