import { useState } from "react";
import "./App.css";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  const Sum = () => {
    let sum1 = parseInt(values.name) || 0;
    let sum2 = parseInt(values.model) || 0;
    return sum1 + sum2;
  };

  return {
    values,
    handleChange,
    resetForm,
    Sum,
  };
}

const App = () => {
  const { values, handleChange, resetForm, Sum } = useForm({
    name: "",
    model: "",
    year: "",
    probeg: "",
    comment: "",
    photo: "",
  });

  const [cards, setCards] = useState([]);
  const [originalCards, setOriginalCards] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  const isSubmit = () => {
    const currentYear = parseInt(values.year);
    return currentYear > 2010;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmit()) {
      setCards((prevCards) => [...prevCards, values]);
      setOriginalCards((prevCards) => [...prevCards, values]);
      alert("Form submitted");
      resetForm();
    } else {
      alert("The year of the car is OLD");
    }
  };

const handleSearch = () => {
  const filter = originalCards.filter((card) =>
    Object.values(card).some((value) =>
      value.toString().toLowerCase().includes(textSearch.toLowerCase())
    )
  );
  setCards(filter);
};

  return (
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Marka"
        />
        <input
          type="text"
          name="model"
          value={values.model}
          onChange={handleChange}
          placeholder="Model"
        />
        <input
          type="text"
          name="year"
          value={values.year}
          onChange={handleChange}
          placeholder="Year"
        />
        <input
          type="text"
          name="probeg"
          value={values.probeg}
          onChange={handleChange}
          placeholder="Probeg"
        />
        <input
          type="text"
          name="comment"
          value={values.comment}
          onChange={handleChange}
          placeholder="Comment"
        />
        <input
          type="text"
          name="photo"
          value={values.photo}
          onChange={handleChange}
          placeholder="Photo URL"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="formvalues">
        <h2>Form Values:</h2>
        <p>Name: {values.name}</p>
        <p>Model: {values.model}</p>
        <p>Year: {values.year}</p>
        <p>Probeg: {values.probeg}</p>
        <p>Comment: {values.comment}</p>

        {values.photo && (
          <div>
            <h3>Car Photo:</h3>
            <img
              src={values.photo}
            />
          </div>
        )}

        <h2>Sum: {Sum()}</h2>
      </div>

      <div className="cards">
        <h2>Submitted Cards:</h2>

        <input
          type="text"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
          placeholder="Search by name"
        />
        <button onClick={handleSearch}>Search</button>

        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div>
              <h1>
                {card.name} {card.model}
              </h1>
              <p>Model: {card.model}</p>
              <p>Year: {card.year}</p>
              <p>Probeg: {card.probeg}</p>
              <p>Comment: {card.comment}</p>
            </div>
            {card.photo && (
              <div>
                <img src={card.photo}/>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
