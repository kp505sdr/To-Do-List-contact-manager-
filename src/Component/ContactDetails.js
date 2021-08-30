import React from "react";
import "../../src/App.css";
import Avatar from "react-avatar"; //for contact DP
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../Action/ContactAction";

const ContactDetails = () => {
  const dispatch = useDispatch();
  const userConatct = useSelector((state) => state.contactReducer.contacts); //fetching data from redux contacts for showing on screen
  return (
    <div className="container">
      <table className="table caption-top shadow">
        <caption>List of users</caption>
        <thead>
          <tr className="bg-info">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userConatct.map((mycont) => (
            <tr key={mycont.id}>
              <td>
                <Avatar
                  name={mycont.name}
                  size="45"
                  round={true}
                  className="avatar"
                />
                {mycont.name}
              </td>

              <td>{mycont.email}</td>
              <td>{mycont.phone}</td>

              <td>
                <Link to={`/edit/${mycont.id}`}>
                  <span className="btn btn-warning btn-sm mx-2">Edit...</span>
                </Link>
                <a>
                  <span
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteContact(mycont.id))}
                  >
                    Delete
                  </span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDetails;
