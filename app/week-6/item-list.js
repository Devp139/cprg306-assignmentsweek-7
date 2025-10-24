"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const emojiMap = {
    dairy: "🥛",
    bakery: "🍞",
    produce: "🥦",
    meat: "🍗",
    "canned goods": "🥫",
    "dry goods": "🍝",
    household: "🧻",
  };

  
  let sortedItems = [...itemsData];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }


  const groupedItems = sortedItems.reduce((groups, item) => {
    const cat = item.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
    return groups;
  }, {});

  return (
    <div>
      
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "name" ? "bg-yellow-500 text-black" : "bg-gray-600"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "category" ? "bg-yellow-500 text-black" : "bg-gray-600"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded-md font-semibold ${
            sortBy === "group" ? "bg-yellow-500 text-black" : "bg-gray-600"
          }`}
        >
          Group by Category
        </button>
      </div>

      
      {sortBy === "group" ? (
        <div className="space-y-5">
          {Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category}>
                <h2 className="text-xl font-semibold capitalize mb-2">
                  {category}
                </h2>
                <ul className="space-y-3">
                  {groupedItems[category].map((item) => (
                    <Item
                      key={item.id}
                      name={item.name.trim()}
                      quantity={item.quantity}
                      category={item.category}
                      emoji={emojiMap[item.category]}
                    />
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name.trim()}
              quantity={item.quantity}
              category={item.category}
              emoji={emojiMap[item.category]}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
