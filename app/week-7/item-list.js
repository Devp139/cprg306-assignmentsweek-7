"use client";

import Item from "./item";

export default function ItemList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}


