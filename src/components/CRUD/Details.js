import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Details = props => {
  const [data, setData] = useState({}); // setting initial data to null
  const [key, setKey] = useState(); // setting key to null initially

  useEffect(() => {
    Axios.get("" + props.match.params.id + ".json").then(response => {
      setData(response.data); // setting response data to state
      setKey(props.match.params.id); // setting key with data id so that we can retrive data based on id
    });
  }, [props]);
  console.log(data);
  const onDelete = id => {
    Axios.delete("" + id + ".json")
      .then(response => {
        toast.error("Your data was deleted successfully!!!");
        props.history.push("/");
      })
      .catch(error => {
        console.error("Error removing data: ", error);
      });
  }; // deleting the data with given key

  return (
    <React.Fragment>
      <div className="col-sm-4">{/* <Feature /> */}</div>
      <div className="col-sm-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            {/* <h4><Link to="/">Data</Link></h4> */}
          </div>
          <div className="panel-body">
            <dl>
              <dt>Id:</dt>
              <dd>{data.id}</dd>
              <dt>Ftype:</dt>
              <dd>{data.ftype}</dd>
              <dt>Title:</dt>
              <dd>{data.title}</dd>
              <dt>Description:</dt>
              <dd>{data.description}</dd>
              <dt>Created On:</dt>
              <dd>{props.location.state.createdon}</dd>
              <dt>Is Active</dt>
              <dd>{data.isactive ? "true" : "false"}</dd>
            </dl>
            <Link to={`/edit/${key}`} className="btn btn-success mr-3">
              Edit
            </Link>
            <button
              onClick={onDelete.bind(this, key)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
