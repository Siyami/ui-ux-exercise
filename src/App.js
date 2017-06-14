import React, { Component } from 'react';
import './App.css';
const data = require('./data.json');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownValue: 10,
      addValue: 0,
      array: [],
      startVal: 0,
      endVal: 10
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  handleChange(event) {
    let nextValue = event.target.value;

    this.setState({ dropDownValue: nextValue });
  }

  nextPage() {
    let nextValue = parseInt(this.state.dropDownValue);
    let newStartVal = this.state.startVal + nextValue;
    let newEndVal = this.state.endVal + nextValue;
    console.log('newStartVal: ' + newStartVal);
    console.log('newEndVal: ' + newEndVal);

    if(newEndVal <= data.length) {
      this.setState({ startVal: newStartVal, endVal: newEndVal });
    }
  }

  prevPage() {
    let nextValue = parseInt(this.state.dropDownValue);
    let newStartVal = this.state.startVal - nextValue;
    let newEndVal = this.state.endVal - nextValue;
    console.log('newStartVal: ' + newStartVal);
    console.log('newEndVal: ' + newEndVal);

    if(newStartVal >= 0) {
      this.setState({ startVal: newStartVal, endVal: newEndVal });
    }
  }

  render() {
    const newArr = [];

    for (let i = this.state.startVal; i < this.state.endVal; i++) {
      newArr.push(data[i])
    }

    return (
      <div>
        items per page:
        <select
          onChange={this.handleChange}
           value={this.state.dropDownValue}>
          {/* <option value="5">5</option> */}
          <option value="10">10</option>
          {/* <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option> */}
        </select>

        {this.state.startVal + 1}-{this.state.endVal} of {data.length}

        <button onClick={this.prevPage} type="button" className="btn btn-primary">Prev</button>

        <button onClick={this.nextPage} type="button" className="btn btn-primary">Next</button>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
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
                  <td>{row.number}</td>
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
