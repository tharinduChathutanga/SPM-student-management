import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class createExamResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: "",
      subject: "",
      studentName: "",
      studentID: "",
      marks: "",
      gradeReceived: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
        grade,
        subject,
        studentName,
        studentID,
        marks,
        gradeReceived,
      examHall,
    } = this.state;

    const data = {
      grade: grade,
      subject: subject,
      studentName: studentName,
      studentID: studentID,
      marks: marks,
      gradeReceived: gradeReceived,
    };

    console.log(data);

    const re = /[i,I]+[t,T]+[0-9]{8}/;
    const ep = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;

    if (
      grade === "" ||
      subject === "" ||
      studentName === "" ||
      studentID === "" ||
      marks === "" ||
      gradeReceived === "" 
    ) {
      swal(
        "Please fill the form correctly",
        "Form values cannot be empty",
        "error"
      );
    }  else {
      swal({
        title: "Are you sure?",
        text: `Grade: ${this.state.grade} | Subject: ${this.state.subject} | Student Name: ${this.state.studentName} 
        Student ID: ${this.state.studentID} | Marks: ${this.state.marks} | Grade: ${this.state.gradeReceived}`,
        icon: "info",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.post("http://localhost:8000/result/add", data).then((res) => {
            if (res.data.success) {
              this.setState({
                grade: "",
                subject: "",
                studentName: "",
                studentID: "",
                marks: "",
                gradeReceived: "",
              });
            }
          });
          swal("Exam Result Added Successfully!", {
            icon: "success",
          });
        } else {
          swal("Exam Result Creation is not completed!");
        }
      });
    }
  };

  render() {
    return (
      <div className="container" style={{ width: "540px" }}>
        <h1
          className="text-center"
          style={{
            borderStyle: "solid",
            backgroundColor: "MidnightBlue",
            color: "white",
          }}
        >
          Add Exam Results
        </h1>
        <br></br>
        <form>



          <div className="form-group">
            <div className="form-group">


            <div className="form-group" style={{ marginBottom: '15px' }}><br></br>
                        <label style={{ marginBottom: '5px',fontSize:'19px' }} className="topic"><b>Grade:</b></label>
                        <select
                      className="form-control"
                      style ={{marginBottom:'15px', maxWidth:'500px'}}
                      name="grade"
                      placeholder="Select Grade"
                      value={this.state.grade}
                      onChange={this.handleInputChange}
                      required
                    >
                      <option value = "Select">Select</option>
                      <option value = "10">10</option>
                      <option value = "11">11</option> </select>
                      </div>
              
            
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputEmail1"><b>Subject:</b></label>
            <input
              type="text"
              class="form-control"
              name="subject"
              aria-describedby="emailHelp"
              placeholder="Science"
              value={this.state.subject}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1"><b>Student Name:</b></label>
            <input
              type="text"
              className="form-control"
              name="studentName"
              placeholder="Avanthi Chathurya"
              value={this.state.studentName}
              onChange={this.handleInputChange}
              required
            />
          </div>
         
          <div className="form-group">
            <div className="form-group">
              <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1">
                <b>Student ID:</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="studentID"
                placeholder="S001"
                value={this.state.studentID}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputEmail1"><b>Marks:</b></label>
            <input
              type="text"
              class="form-control"
              name="marks"
              aria-describedby="emailHelp"
              placeholder="87"
              value={this.state.marks}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ marginBottom: '5px',fontSize:'19px' }} for="exampleInputPassword1"><b>Grade Received:</b></label>
            <input
              type="text"
              className="form-control"
              name="gradeReceived"
              placeholder="A"
              value={this.state.gradeReceived}
              onChange={this.handleInputChange}
              required
            />
          </div>
          
          </div>
          <br></br>
          <div className="container" style={{ width: "170px" }}>
            <button
              type="submit"
              onClick={this.onSubmit}
              className="btn btn-primary"
              style={{
                width: "150px",
                fontSize: "large",
                backgroundColor: "MidnightBlue",
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <br></br>
      </div>
    );
  }
}