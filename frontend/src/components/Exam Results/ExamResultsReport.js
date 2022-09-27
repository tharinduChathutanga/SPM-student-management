import React ,{ Component } from 'react';
import axios from 'axios';
import jsPdf from 'jspdf';
import 'jspdf-autotable';

export default class ExamResultsReport extends Component {

constructor(props){
  super(props);

  this.state ={
    posts:[]
  };
}

componentDidMount(){
  this.retrievePosts();
}

retrieveTimeTables() {
    axios.get("http://localhost:8000/timetables").then((res) => {
      console.log("hello");
      if (res.data.success) {
        this.setState({
            timetables: res.data.existingtimetables,
        });

        console.log(this.state.timetables);
      }
    });
  }

  filterData(timetables, searchKey) {
    const result = timetables.filter(
      (timetables) =>
        timetables.subject.toLowerCase().includes(searchKey) ||
        timetables.date.toLowerCase().includes(searchKey) ||
        timetables.startTime.toLowerCase().includes(searchKey) ||
        timetables.endTime.toLowerCase().includes(searchKey) ||
        timetables.examHall.toLowerCase().includes(searchKey)
    );
    this.setState({ timetables: result });
  }


  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/timetables").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingtimetables, searchKey);
      }
    });
  };

//Report pdf generation

jsPdfGenerator = () => {

    //New document in jspdf
    var doc = new jsPdf('l', 'pt', 'a3');

    doc.text(600, 20, 'Class Details Report', { align: 'center' },);
    doc.autoTable({ html: '#class-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } },
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("Class Details.pdf");
  }

  render(){

    return(

      <div className = "container">
        <div className = "row">
          <div className ="col-lg-9 mt-2 mb-2">
          <br></br> <center>
          <h4>All Class Details</h4>
          </center>
          </div>
      <div className ="col-lg-9 mt-2 mb-2">
        <input
        className = "form-control"
        type = "search"
        placeholder = "search"
        name = "search"
        onChange = {this.handleSearchArea}>
        </input>
        </div>

   </div>
        <table Id = "class-table" className = "table table-hover" style = {{marginTop:'40px', color:'#362419'}}>
          <thead>
           <tr>
              <th scope="col">Subject</th>
              <th scope="col">Date</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col">Exam Hall</th>
              <th scope="col">Action</th>

             </tr>
          </thead>
          <tbody>
            {this.state.timetables.map((timetables, index) => (
              <tr key={index}>
               
                <td>{timetables.subject}</td>
                <td>{timetables.date}</td>
                <td>{timetables.startTime}</td>
                <td>{timetables.endTime}</td>
                <td>{timetables.examHall}</td>
                <a
                  className="btn btn-warning"
                  href={`/update/${timetables._id}`}
                >
                  <i className="fas fa-edit"> </i>&nbsp; Edit
                </a>
                &nbsp;
                <a
                  className="btn btn-danger"
                  href="#"
                  style={{ color: "black" }}
                  onClick={() => this.onDelete(timetables._id)}
                >
                  <i
                    className="far fa-trash-alt"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "medium",
                    }}
                  >
                    {" "}
                  </i>{" "}
                  &nbsp; Delete
                </a>
              </tr>
            ))}
          </tbody>
         </table>

         <button className="btn-primary" style={{ marginTop: '15px', backgroundColor: '#000080' }} onClick={this.jsPdfGenerator}><i className="fas fa-download"></i>&nbsp;Generate Report PDF</button>
          
        </div>
             
    )  
}
}