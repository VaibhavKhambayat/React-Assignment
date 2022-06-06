import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  


  function handleFormSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("User Name", JSON.stringify(name));
      localStorage.setItem("User Email", JSON.stringify(email));
      localStorage.setItem("User Phone", JSON.stringify(phone));
      localStorage.setItem("User Address", JSON.stringify(address));
      console.log("Local Storage User Data");
      console.log("User Name: ",JSON.stringify(name));
      console.log("User Email: ",JSON.stringify(email));
      console.log("User Phone: ",JSON.stringify(phone));
      console.log("User Address: ",JSON.stringify(address));
      alert("Thank You!");
    }
  }
  return (
    <>
 
        <div>
        
            <form onSubmit={handleFormSubmit}>
              <h3>Checkout Form</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  title="Please Enter Valid Email. e.g test@test.test"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Contact No.</label>
                <input
                  type="text"
                  pattern="[6-9]{1}[0-9]{9}"
                  title="Mobile number must start with 6-9 and consist of 10 digit"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block center">
                Submit
              </button>

              {flag && (
                <Alert color="primary" variant="danger">
                  I understand you're in hurry! But every Field is important!
                </Alert>
              )}
            </form>
        </div>
    
    </>
  );
}

export default Checkout;
