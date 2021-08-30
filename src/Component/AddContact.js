import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import { addContact } from "../Action/ContactAction"; ////action function

const AddContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // -------Start manage input fields----------
  const [name, setName] = useState({
    id: shortid.generate(),
    name: "",
    email: "",
    phone: "",
  });
  const FormHandle = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };
  // -------end manage input fields----------

  // --------start add data to redux store----------------
  const sendDatatoRedux = (e) => {
    e.preventDefault();

    // const new_contact = {
    //   id: id,
    //   name: name,       //ham dispatch me new_contact ko send kare to
    //                     to contactReducer me name.action.payload.name bar bar nahi karna pdega
    //   email: email,
    //   phone: phone,
    // };

    dispatch(addContact(name));
    history.push("/");
  };
  // --------end add data to redux store----------------
  return (
    <div className="my-5 ">
      <div className="container ">
        <div className="card shadow main-div" style={{ width: "25rem" }}>
          <div className="card-body ">
            <form onSubmit={sendDatatoRedux}>
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
                Add Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
