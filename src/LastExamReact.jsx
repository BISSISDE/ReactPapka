import { useState } from "react";

function App() {
  const [suraq, setSuraq] = useState("");
  const [jauap, setJauap] = useState("");
  const [tarikh, setTarikh] = useState([]);

  const jiberu = async () => {
    if (suraq.trim() === "") return;

    try {
      const otinish = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDU6uYQWRaqSHQxlHTofXNCqba5H6bdyLQ",
        {
          h: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: suraq }] }],
          }),
          method: "POST"
        }
      );

      const malimet = await otinish.json();

      const teks =
        malimet?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Answer is undefined";

      setJauap(teks);
      setTarikh([...tarikh, suraq]);
      setSuraq("");
    } catch (err) {
      setJauap("Error");
    }
  };

  return (
    <div className=" text-black p-5 flex justify-center mt-20"> 
      <div className="w-150 ">
        <h1 className="text-2xl font-black  text-center mb-5 text-pink-600">
          A&I Gemini
        </h1>

        <div className="flex gap-5">
          <input
            value={suraq}
            onChange={(e) => setSuraq(e.target.value)}
            placeholder="Enter your question"
            className="flex-1 border px-3 py-2 rounded "
          />
          <button
            onClick={jiberu}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-800 font-black"
          >
            Send
          </button>
        </div>

        <div className="bg-white border rounded p-4 m-5">
          <h2 className=" mb-1 text-pink-700 font-black">Answer:</h2>
          <p className="text-gray-700">{jauap}</p>
        </div>

        <div className="bg-white border rounded p-4">
          <h2 className="mb-1 text-pink-700 font-black">History:</h2>
          <ul className="pl-5 space-y-1 text-sm text-black">
            {tarikh.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
