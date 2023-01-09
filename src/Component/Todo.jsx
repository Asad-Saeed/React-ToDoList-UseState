import React, { useState } from "react";
import "../App.css";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const additem = () => {
    if (!inputData) {
      alert("Please Enter Some Data...");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  // Delete function
  const deleteItem = (id) => {
    const updatedItems = items.filter((element, index) => {
      return index != id;
    });
    setItems(updatedItems);
  };
  // Remove All
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main">
        <div className="child">
          <h1 className="text-warning py-5">TO-Do List</h1>
          <figure>
            <img
              style={{ width: 200 }}
              src="https://o.remove.bg/downloads/07f06afb-a381-496d-9825-a0ffb2b4a190/image_2023-01-09_171309427-removebg-preview.png"
              alt="todologo"
            />
            <figcaption className="text-white">
              List your items here...👇
            </figcaption>
          </figure>
          <div className="additems input-group d-flex justify-content-center py-2 pb-5">
            <input
              aria-label="large"
              type="text"
              placeholder="Write here...✍"
              id="inp"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            ></input>
            <i
              className="fa fa-plus btn btn-warning"
              title="Add to List"
              onClick={additem}
            />
          </div>
          <div className="showitems">
            {items.map((element, index) => {
              return (
                <div
                  className="eachitem d-flex justify-content-center"
                  key={index}
                >
                  <h6 className="px-2">{element}</h6>
                  <i
                    className="fa fa-trash px-2"
                    title="Remove from List"
                    onClick={() => deleteItem(index)}
                  />{" "}
                </div>
              );
            })}

            {/* Button */}
          </div>
          <div className="showitems py-5">
            <button className=" btn btn-danger my-4 py-2" onClick={removeAll}>
              Clear All
              <i className="fa fa-trash pl-2" title="Clear All"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
