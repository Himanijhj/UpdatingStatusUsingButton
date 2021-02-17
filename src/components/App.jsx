import React, { Component } from "react";
//import { useState } from "react";
import Butt from "./Butt";

const INITIAL_STATE = {
  //state is by default an object
  students: [
    { id: 1, name: "Ayaan", age: 21, registered: "yes" },
    { id: 2, name: "Charu", age: 19, registered: "pending" },
    { id: 3, name: "Isha", age: 16, registered: "no" },
    { id: 4, name: "Jay", age: 25, registered: "pending" },
    { id: 5, name: "Kim", age: 21, registered: "yes" },
    { id: 6, name: "Leo", age: 19, registered: "pending" }
  ]
};

class Table extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = INITIAL_STATE;
  }

  updateData = (index) => {
    console.log(index);
    this.setState((state) => {
      const sts = state.students.map((student) => {
        if (student.id === index) {
          student.registered = "no";
        }
      });
      return {
        sts
      };
    });
    //window.location.reload(true);
  };

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, registered } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>
            {registered}
            <Butt
              key={id}
              id={id}
              status={registered}
              updateData={this.updateData}
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
