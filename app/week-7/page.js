"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  // sorted copy (never mutate state directly)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Shopping List</h1>

      <div className="max-w-md mx-auto">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={sortedItems} />

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setSortBy("name")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md"
          >
            Sort by Name
          </button>

          <button
            onClick={() => setSortBy("category")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md"
          >
            Sort by Category
          </button>
        </div>
      </div>
    </main>
  );
}


