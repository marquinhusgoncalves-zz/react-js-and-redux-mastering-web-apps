import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title } = this.props.goal;
    console.log(email, title);
    completeGoalRef.push({ email, title });
  }

  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{ margin: '5px' }}>
        <strong>{email}</strong>
        <span> submitted by <em>{title}</em></span>
        <button
          className='btn btn-sm btn-primary'
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
