import React, { useState } from "react";

export default function () {


const [formData , setFormData] = useState({

username : "",
comments : "",
rating : 0,


})


const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,               // lowercase `formData`, spreads existing state
    [name]: value              // sets the specific field dynamically
  });
};


const handleSubmit = (event)=>{

 console.log( formData);
 event.preventDefault();
setFormData({

    username : "",
comments : "",
rating : 0,
})

   

}

  return (
    <div>
      <h4>Comments About shows</h4>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" style={{ display: "block" }}>
            Enter Username
          </label>

          <input type="text" name="username" placeholder="username" id="username" value={formData.username} onChange={handleChange}/>
        </div>

        <br />
        <br />
        <label htmlFor="comments" style={{ display: "block" }}>
          Enter Comments
        </label>
        <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange}>
          Comments
        </textarea>
        <br />
        <br />

        <label htmlFor="rating" style={{ display: "block" }}>
          Enter Rating
        </label>
        <input type="number" name="rating" id="rating" placeholder="Rating" value={formData.rating} onChange={handleChange}/>

        <br />
        <br />
        <button type="submit">Add Comments</button>
      </form>
    </div>
  );
}
