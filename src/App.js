import React, { Component } from 'react';
import './App.css';
const data = require('./data.json');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '10'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let nextValue = event.target.value;

    this.setState({ value: nextValue });
  }

  render() {
    let itemsPerPage = this.state.value;
    const newArr = [];
    for (let i = 0; i < itemsPerPage; i++) {
      newArr.push(data[i])
    }

    return (
      <div>
        items per page:
        <select
          onChange={this.handleChange}
           value={this.state.value}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {newArr.map((row) => {
              return (
                <tr key={row.firstName + row.lastName}>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.country}</td>
                  <td>{row.address}</td>
                  <td>{row.city}</td>
                  <td>{row.state}</td>
                  <td>{row.zip}</td>
                  <td>{row.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
