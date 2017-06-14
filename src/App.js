import React, { Component } from 'react';
import './App.css';
const data = require('./data.json');

class App extends Component {
  render() {
    return (
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
          {data.map((row) => {
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
    );
  }
}

export default App;
