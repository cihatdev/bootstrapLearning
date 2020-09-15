import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

export default class FormDemo2 extends Component {

  state = {
    email: " ",
    password: "",
    city: "",
    description: ""
  }

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db");
    alertify.success(this.state.password + " added to db");
    alertify.success(this.state.city + " added to db");
    alertify.success(this.state.description + " added to db");

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              placeholder="Enter City"
              onChange={this.handleChange} >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Adana</option>
              <option>Diyarbakır</option>
            </Input>
            <Button type="submit">Save</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
