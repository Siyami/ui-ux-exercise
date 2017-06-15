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
    let nextValue = parseInt(event.target.value);
    let newEndVal = nextValue;

    if(newEndVal < this.state.startVal) {
      this.setState({ startVal: 0 })
    }

    this.setState({ dropDownValue: nextValue, endVal: newEndVal });
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

  render() {
    const newArr = [];

    for (let i = this.state.startVal; i < this.state.endVal; i++) {
      newArr.push(data[i])
    }

    return (
      <div>

        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id="nav">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active" style={{backgroundColor: "#7F56C5"}}>
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
                    <p style={{fontSize: "1rem", fontWeight: "400, 600"}}>List of Awesome <span  className="span">Sort by:</span></p>
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

                    <span style={{marginLeft: "30px", fontSize: "0.875rem", fontWeight: "700, 400, 700"}}>{this.state.startVal + 1}-{this.state.endVal} of {data.length}</span>

                    <button onClick={this.prevPage} type="button" className="btn btn-primary btn-sm button" style={{marginLeft: "7px"}}>Prev</button>

                    <button onClick={this.nextPage} type="button" className="btn btn-primary btn-sm button" style={{marginLeft: "3px"}}>Next</button>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead className="thead" style={{backgroundColor: "#CACBCE"}}>
                  <tr>
                    <th>#</th>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
