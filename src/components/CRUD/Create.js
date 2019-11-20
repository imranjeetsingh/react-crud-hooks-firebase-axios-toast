import React, { useState } from "react";
import { toast } from "react-toastify";
import Axios from "axios";

toast.configure();

const Create = props => {
  const [data, setData] = useState({
    id: "",
    ftype: "",
    title: "",
    description: "",
    createdon: new Date().toString(),
    isactive: false
  }); // initial data setup

  const onChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "isactive") {
      setData({ ...data, [name]: !data.isactive });
    } else {
      setData({ ...data, [name]: value });
    }
  }; // getting input && setting to state

  console.log(data);
  const onSubmit = e => {
    e.preventDefault();
    Axios.post("", data) // submitting data to firebase
      .then(response => {
        setData({
          id: "",
          ftype: "",
          title: "",
          description: "",
          createdon: new Date().toString(),
          isactive: false
        });
        toast.success("Your data has been submitted successfully!!!");
        props.history.push("/");
      })
      .catch(error => {
        console.error("Error adding data: ", error);
      });
  };

  return (
    <React.Fragment>
      <div className="col-sm-4"></div>
      <div className="col-sm-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">ADD Data</h3>
          </div>
          <div className="panel-body">
            {/* <h4><Link to="/" className="btn btn-primary">Data</Link></h4> */}
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="id">Id:</label>
                <input
                  required
                  type="number"
                  className="form-control"
                  name="id"
                  value={data.id}
                  onChange={onChange}
                  placeholder="only numbers are allowed"
                />
              </div>
              <div className="form-group">
                <label htmlFor="ftype">Ftype:</label>
                <select
                  required
                  className="form-control"
                  name="ftype"
                  value={data.ftype}
                  onChange={onChange}
                >
                  <option label="select value from list"></option>
                  <option>New</option>
                  <option>Upcoming</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="title"
                  value={data.title}
                  onChange={onChange}
                  placeholder="Title"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="isactive"
                  checked={data.isactive}
                  onChange={onChange}
                />
                <label class="form-check-label" for="isactive">
                  is Active
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  required
                  className="form-control"
                  name="description"
                  onChange={onChange}
                  placeholder="Description"
                  cols="80"
                  rows="3"
                  value={data.description}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Create;
