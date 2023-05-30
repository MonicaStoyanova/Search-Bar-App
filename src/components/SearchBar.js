import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    // we do not want the input to be automatically submitted as a request which is the default behavior of the browser
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    // everytime the user changes the input it will be triggered
    setTerm(event.target.value);
    // it catches the new value and sets it as a term which we are going to use for the search. To see what the event looks like we can console log it and see its props
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
