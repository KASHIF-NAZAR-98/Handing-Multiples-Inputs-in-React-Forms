import React, { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    username: "",
    comments: "",
    rating: 0,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === "rating" ? Number(value) : value, // convert rating to number
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSubmittedData(formData); // save submitted data to display
    setFormData({
      username: "",
      comments: "",
      rating: 0,
    });
  };

  return (
    <div>
      <h4>Comments About Shows</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" style={{ display: "block" }}>
            Enter Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <br />
        <label htmlFor="comments" style={{ display: "block" }}>
          Enter Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="rating" style={{ display: "block" }}>
          Enter Rating
        </label>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Add Comments</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h5>Data You Have Posted:</h5>
        {submittedData && (
          <>
            <p><strong>Username:</strong> {submittedData.username}</p>
            <p><strong>Comments:</strong> {submittedData.comments}</p>
            <p><strong>Rating:</strong> {submittedData.rating}</p>
          </>
        )}
      </div>
    </div>
  );
}
