import React, { useState, useEffect } from "react";

export default function H3() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  const getNewJoke = async () => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  };

  // ✅ useEffect to run once on mount
  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      <h3>Joker</h3>
      <h4>{joke.setup}</h4>
      <h4>{joke.punchline}</h4>
      <h5>
        <button onClick={getNewJoke}>Give Me a Joke</button>
      </h5>
    </div>
  );
}
