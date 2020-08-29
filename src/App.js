// Much of the code for this file was derived from:
// 18-React\01-Activities\16-Stu_FriendRefactor\Solved\src\App.js
import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard"
import Title from "./components/Title"
import Wrapper from "./components/Wrapper"
import employees from "./employees.json"

// These lines provide needed code for the sorting of employee cards
class App extends Component {
  state = {
    employees,
    name: 1,
    username: 1,
    occupation: 1,
    sort: ""
  };


  handleSort = (name, order) => {
    this.setState({ employees: this.state.employees.sort((a, b) => (a[name] > b[name] ? order : -order)) })
  }

  searchFilter = (name) => {
    this.setState({
      employees: employees.filter(employee => {
        return employee.name.toLowerCase().includes(name.toLowerCase())
          || employee.occupation.toLowerCase().includes(name.toLowerCase())
          || employee.username.toLowerCase().includes(name.toLowerCase());
      })
    })
  }

  render() {
    return (

      <Wrapper>
        <Title>Employee Directory
        <div>
          {/* The below lines render the Searchbar of the title, and sort the employee cards */}
            <input type="text" placeholder="Search" onChange={(e) => this.searchFilter(e.target.value)} />
            <div className="h4 my-0 p-2">
              <div className="col">
                <div className="d-inline">
                  Type the Name, Username, or Occupation in the search bar to search for specfic employees
                  <br/>
                  Sort the employee cards by pressing one of the following buttons:
                  <br/>
                  {/* These lines sort employee cards by name */}
                  <a onClick={() => { this.handleSort("name", this.state.name); this.setState
                  ({ name: -this.state.name, sort: "name" }) }} style={{ cursor: 'pointer' }}>Name | </a>
                  {/* These lines sort employee cards by username */}
                  <a onClick={() => { this.handleSort("username", this.state.username); this.setState
                  ({ username: -this.state.username, sort: "username" }) }} style={{ cursor: 'pointer' }}>Username | </a>
                  {/* These lines sort employee cards by occupation */}
                  <a onClick={() => { this.handleSort("occupation", this.state.occupation); this.setState
                  ({ occupation: -this.state.occupation, sort: "occupation" }) }} style={{ cursor: 'pointer' }}>Occupation </a>
              </div>
              </div>
            </div>
          </div>
        </Title>

        {/*This section was derived from: 18-React\01-Activities\16-Stu_FriendRefactor\Solved\src\App.js*/}
        {/*This section renders the employee information for the employee cards */}
        {this.state.employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            picture={employee.picture}
            occupation={employee.occupation}
            email={employee.email}
            username={employee.username}
            phone={employee.phone}
            location={employee.location}
            id={employee.id}
          />
        ))}
      </Wrapper>

    );
  }
}

export default App;
