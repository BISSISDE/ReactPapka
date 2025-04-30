import { useState } from "react";
import axios from "axios";

const Ai = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`,
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const generatedText =
        res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        setResponse(generatedText);
      } else {
        setResponse("Answer is emty");
      }
    } catch (err) {
      console.error(err);
      setError("Erroe with API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>AI</h2>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Enter your question"
      />

      <button
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? "Loading..." : "Search"}
      </button>

      {error && <p>{error}</p>}

      {response && (
        <div >
          <h3>Answer:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Ai;
