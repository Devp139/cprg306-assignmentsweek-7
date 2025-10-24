"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black rounded-xl p-4 mb-6 shadow-md"
    >
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-400 rounded-md p-2 w-full mb-3"
      />

      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="bg-gray-300 text-black px-3 py-1 rounded-l-md"
          >
            -
          </button>
          <span className="bg-white border border-gray-300 px-4 py-1">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600"
          >
            +
          </button>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-400 p-2 rounded-md"
        >
          <option>Produce</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Meat</option>
          <option>Household</option>
          <option>Canned Goods</option>
          <option>Dry Goods</option>
          <option>Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
}

