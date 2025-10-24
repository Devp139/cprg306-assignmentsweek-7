"use client";

import { useState } from "react";

export default function NewItem() {
 
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

 
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log("New Item Added:", item);

    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

   
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Add New Item
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            required
            placeholder="Enter item name"
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        
        <div className="flex items-center justify-between gap-2">
         
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border border-gray-300 rounded-md font-bold"
            />
            <button
              type="button"
              onClick={decrement}
              className="bg-gray-300 text-white px-3 py-1 rounded-md hover:bg-gray-400"
            >
              −
            </button>
            <button
              type="button"
              onClick={increment}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              +
            </button>
          </div>

          
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-1/2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
