import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import shortid from "shortid";
import {
  addContact,
  getContact,
  updateContact1,
} from "../Action/ContactAction";

const EditContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const updateContact = useSelector(
    (state) => state.contactReducer.UpdateContact
  );

  let { id } = useParams();
  const [name, setName] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const FormHandle = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const sendUpdatedDatatoRedux = (e) => {
    //send data in updateContact state in Reducer file
    e.preventDefault();
    const update_Contact = Object.assign(updateContact, {
      name: name.name,
      email: name.email,
      phone: name.phone,
    });

    dispatch(updateContact1(update_Contact));
    history.push("/");
  };

  // changeing the current state of UpdateContact data
  useEffect(() => {
    if (updateContact != null) {
      setName({
        name: updateContact.name, //set the all changed data of updateContact to real contacts
        email: updateContact.email,
        phone: updateContact.phone,
      });
    }
    dispatch(getContact(id));
  }, [updateContact]);
  return (
    <div className="my-5 ">
      <div className="container ">
        <div className="card shadow main-div" style={{ width: "25rem" }}>
          <div className="card-body ">
            <form onSubmit={sendUpdatedDatatoRedux}>
              <div className="m-1">
                <label className="form-label"></label>
                <input
                  type="text"
                  name="name"
                  value={name.name}
                  onChange={(e) => FormHandle(e)}
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>

              <div className="m-1">
                <label className="form-label"></label>
                <input
                  type="text"
                  name="email"
                  value={name.email}
                  onChange={(e) => FormHandle(e)}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="m-1">
                <label className="form-label"></label>
                <input
                  type="text"
                  name="phone"
                  value={name.phone}
                  onChange={(e) => FormHandle(e)}
                  className="form-control"
                  placeholder="Mobile"
                />
              </div>

              <button type="submit" className="btn btn-danger btncss">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
