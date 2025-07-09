import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");

  const [user, setUser] = useState([]);

  const addUser = (e) => {

    e.preventDefault();

    const value = {

      name,
      email,
      address
    }
    setUser([...user, value]);
    setName("");
    setEmail("");
    setAddress("");
  }

  console.log("email", email + "name", name + "address", address);

  return (
    <>
      <div className="container bg-primary m-5 p-3">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={addUser}>
              <div className="">
                <label className="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div>
                <label className="">Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <button className="btn btn-success form-control mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>

        <table class="table mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{item.name}</th>
                  <th>{item.email}</th>
                  <th>{item.address}</th>
                  <th>
                    <button className="btn btn-success">Edit</button>
                  </th>
                  <th>
                    <button className="btn btn-danger">Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
