import { Form } from "./Form";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export function AddDetails({ list, setList }) {
  const details = {
    title: "",
    category: "",
    image: "",
    price: "",
    rating: "",
    cash: false,
    card: false,
    upi: false,
    id: nanoid(),
  };

  useEffect(() => {
    getData();
  }, []);

  const [text, setText] = useState(details);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setText({
      ...text,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    let temp = text;
    setText("");
    fetch("http://localhost:3001/details", {
      method: "POST",
      body: JSON.stringify(temp),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getData());
  };

  const getData = () => {
    fetch("http://localhost:3001/details")
      .then((data) => data.json())
      .then((data) => setList(data));
  };

  return (
    <Form onSubmit={handleSubmit} setText={setText}>
      <input
        name="title"
        onChange={handleChange}
        type="text"
        placeholder="Enter Title"
      />
      <input
        name="category"
        onChange={handleChange}
        type="text"
        placeholder="Enter Category"
      />
      <input
        name="price"
        onChange={handleChange}
        type="number"
        placeholder="Enter Price for One"
      />
      <input
        type="url"
        name="image"
        onChange={handleChange}
        placeholder="Enter Image URL"
      />
      <div>
        <label>
          Ratings
          <select onChange={handleChange} name="rating" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
      </div>
      <div>
        Payment Method:{" "}
        <label>
          Cash
          <input onChange={handleChange} name="cash" type="checkbox" />
        </label>
        <label>
          Card
          <input onChange={handleChange} name="card" type="checkbox" />
        </label>
        <label>
          UPI
          <input onChange={handleChange} name="upi" type="checkbox" />
        </label>
      </div>
      <input type="submit" />
    </Form>
  );
}
