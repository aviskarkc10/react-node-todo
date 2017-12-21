import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      falg: false,
    }
  }

  render() {

    return (
      <div className="Login">
        <Form horizontal>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;