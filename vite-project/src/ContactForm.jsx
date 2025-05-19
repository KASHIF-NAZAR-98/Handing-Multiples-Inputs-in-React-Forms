import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setformData] = useState({
    Name: "",
    Email: "",
  });

  const setFormDetails = (event) => {
    setformData({
      ...formData, // ✅ Spread the existing form data
      [event.target.name]: event.target.value, // ✅ Correct syntax for dynamic key
    });
  };

  function handleSubmit(e) {
    e.preventDefault(); // ✅ Prevent form from refreshing the page
    console.log("The name is", formData.Name);
    console.log("The email is", formData.Email);
  }

  return (
    <div>
      <form>
        <div>
          <label
            htmlFor="fullname"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter Full Name
          </label>
          <input
            type="text"
            name="Name"
            id="fullname"
            placeholder="Enter Full Name"
            value={formData.Name}
            onChange={setFormDetails}
          />
        </div>
        <br />
        <br />
        <div>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter Email
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Enter Email"
            value={formData.Email}
            onChange={setFormDetails}
          />
        </div>
        <br />
        <br />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
