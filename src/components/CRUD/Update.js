import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Update = props => {
  const [data, setData] = useState({
    id: "",
    ftype: "",
    title: "",
    description: "",
    createdon: new Date().toString(),
    isactive: false
  }); // setting initial state to null

  useEffect(() => {
    Axios.get("") // fetching data from firebase to show input data
      .then(response => {
        for (let id in response.data) {
          if (id === props.match.params.id) {
            console.log(response.data[id]);
            setData(response.data[id]); // setting state with fetched data
          }
        }
      });
  }, [props]);

  const onChange = e => {
    const { name, value } = e.target;
    if (name === "isactive") {
      setData({ ...data, [name]: !data.isactive });
    } else {
      setData({ ...data, [name]: value });
    }
    console.log(data);
  }; // handling input change

  const onSubmit = e => {
    e.preventDefault();
    Axios.put("" + props.match.params.id + ".json", data) // submitting data to firebase
      .then(response => {
        setData({
          id: "",
          ftype: "",
          title: "",
          description: "",
          createdon: "",
          isactive: ""
        });
        // props.history.push("/show/" + props.match.params.id)
        toast.success("Your data has been updated successfully!");
        props.history.push("/");
        // console.log("updated")
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <React.Fragment>
      <div className="col-sm-4"></div>
      <div className="col-sm-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">EDIT Data</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label for="id">ID:</label>
                <input
                  disabled
                  type="number"
                  className="form-control"
                  name="id"
                  value={data.id}
                  onChange={onChange}
                  placeholder="id"
                />
              </div>
              <div className="form-group">
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
                <label for="title">Title:</label>
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
                <label for="description">Description:</label>
                <textarea
                  required
                  className="form-control"
                  name="description"
                  value={data.description}
                  onChange={onChange}
                  placeholder="Description"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success mr-5">
                Submit
              </button>

              <Link to="/" className="btn btn-primary">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Update;
