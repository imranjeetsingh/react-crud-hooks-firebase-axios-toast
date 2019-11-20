import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { authContext } from "../../azureadConfig";

const Showdata = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const datas = [];
    Axios.get("") // fetching data from firebase
      .then(response => {
        for (let id in response.data) {
          datas.push({ ...response.data[id], key: id });
        }
        setData(datas); // setting the state with fetched data
      });
  }, []);

  console.log(authContext.getCachedUser().profile.sr);
  // console.log(_httpContextAccessor.HttpContext.User.Identity.Name);
  return (
    <React.Fragment>
      <div className="col-sm-10">
        <h3 className="text-center">Data</h3>
        <br />
        <table className="table table-stripe">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ftype</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created On</th>
              <th>Is Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((tempData, index) => (
              <tr key={index}>
                {/* <td><Link to={`/show/${tempData.key}`}>{tempData.id}</Link></td> */}
                <td>{tempData.id}</td>
                <td>{tempData.ftype}</td>
                <td>{tempData.title}</td>
                <td>{tempData.description}</td>
                <td>{tempData.createdon.slice(0, 24)}</td>
                <td>{tempData.isactive.toString()}</td>

                <td>
                  {/* <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>My route</Link> */}
                  <Link
                    to={{
                      pathname: `/edit/${tempData.key}`
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} title="Edit Data" />
                  </Link>{" "}
                  <Link
                    className="iconmargin"
                    to={{
                      pathname: `/show/${tempData.key}`,
                      state: { createdon: tempData.createdon.slice(0, 24) }
                    }}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} title="Get details" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />

      <div className="col-sm-6"></div>
      <button className="btn btn-primary text-center">
        <Link className="text-white" to="/create">
          Add Data
        </Link>
      </button>
    </React.Fragment>
  );
};

export default Showdata;
