import React, { Component } from 'react';

class GoalItem extends Component {
  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{ margin: '5px' }}>
        <strong>{email}</strong>
        <span> submitted by <em>{title}</em></span>
      </div>
    )
  }
}

export default GoalItem;
