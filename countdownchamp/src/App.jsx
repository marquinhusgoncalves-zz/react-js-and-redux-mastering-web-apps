import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadLine: ''
    };
  }

  changeDeadLine() {
    this.setState({
      deadline: this.state.newDeadLine
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl className="Deadline-input" onChange={event => this.setState({ newDeadLine: event.target.value })} placeholder='new date'></FormControl>
          <Button onClick={() => this.changeDeadLine()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
