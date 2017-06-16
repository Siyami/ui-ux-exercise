import React, { Component } from 'react';
import './App.css';
const data = require('./data.json');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownValue: 10,
      addValue: 0,
      startVal: 0,
      endVal: 10,
      sortValue: 'lastName'
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  nextPage() {
    let nextValue = parseInt(this.state.dropDownValue);
    let newStartVal = this.state.startVal + nextValue;
    let newEndVal = this.state.endVal + nextValue;

    if(newEndVal <= data.length) {
      this.setState({ startVal: newStartVal, endVal: newEndVal });
    }
  }

  prevPage() {
    let nextValue = parseInt(this.state.dropDownValue);
    let newStartVal = this.state.startVal - nextValue;
    let newEndVal = this.state.endVal - nextValue;

    if(newStartVal >= 0) {
      this.setState({ startVal: newStartVal, endVal: newEndVal });
    }
  }

  handleChange(event) {
    let nextValue = parseInt(event.target.value);
    let newEndVal = nextValue;

    if(newEndVal < this.state.startVal) {
      this.setState({ startVal: 0 })
    }

    this.setState({ dropDownValue: nextValue, endVal: newEndVal });
  }

  handleSort(event) {
    let nextValue = event.target.value;

    this.setState({ sortValue: nextValue })
  }

  render() {
    const newArr = [];
    let val = this.state.sortValue;

    for (let i = this.state.startVal; i < this.state.endVal; i++) {
      newArr.push(data[i])
    }

    function compare(a, b) {
      let compareVal = '';
      if(val === 'lastName') {
        compareVal = 'lastName';
      }
      else if(val === 'firstName') {
        compareVal = 'firstName';
      }
      else if(val === 'country') {
        compareVal = 'country';
      }
      else if(val === 'city') {
        compareVal = 'city';
      }
      else if(val === 'state') {
        compareVal = 'state';
      }

      // Use toUpperCase() to ignore character casing
      const nameA = a[compareVal].toUpperCase();
      const nameB = b[compareVal].toUpperCase();
      let comparison = 0;

      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    newArr.sort(compare);

    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id="nav">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active" style={{backgroundColor: "#7F56C5", marginLeft: "50px"}}>
                <a className="nav-link" style={{color: "#FFFFFF"}}>Nav Item 1<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color: "#FFFFFF"}}>Nav Item 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color: "#FFFFFF"}}>Nav Item 3</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-6" style={{color: "#7F56C5"}}>
                    <p style={{fontSize: "1rem", fontWeight: "400, 600"}}><span style={{marginRight: "5px"}}>List of Awesome</span>
                      <span  className="span">Sort by:
                        <select
                          onChange={this.handleSort}
                          value={this.state.sortValue}
                          className="select"
                          style={{marginLeft: "5px"}}>
                          <option value="lastName">Last Name</option>
                          <option value="firstName">First Name</option>
                          <option value="country">Country</option>
                          <option value="city">City</option>
                          <option value="state">State</option>
                        </select>
                      </span>
                    </p>
                  </div>
                  <div className="col-5" style={{color: "#7F56C5", fontSize: ".75rem", fontWeight: "400, 600"}}>
                    <span style={{paddingRight: "5px"}}>items per page:</span>
                    <select
                      onChange={this.handleChange}
                      value={this.state.dropDownValue}
                      className="select">
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="75">75</option>
                      <option value="100">100</option>
                    </select>
                    <span
                      style={{marginLeft: "30px", fontSize: "0.875rem", fontWeight: "700, 400, 700"}}>
                      {this.state.startVal + 1}-{this.state.endVal} of {data.length}
                    </span>
                    <i onClick={this.prevPage} className="fa fa-arrow-left fa-2x" aria-hidden="true" style={{marginLeft: "7px"}}></i>
                    <i onClick={this.nextPage} className="fa fa-arrow-right fa-2x" aria-hidden="true" style={{marginLeft: "4px"}}></i>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead className="thead" style={{backgroundColor: "#CACBCE"}}>
                  <tr>
                    {/* <th>#</th> */}
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {newArr.map((row) => {
                    return (
                      <tr key={row.firstName + row.lastName}>
                        {/* <td>{row.number}</td> */}
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
