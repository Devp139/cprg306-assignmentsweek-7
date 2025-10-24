export default function Item({ name, quantity, category, emoji }) {
  return (
    <li className="bg-slate-800 border-b border-gray-700 p-4 rounded-lg shadow-sm">
      <p className="text-lg font-semibold capitalize">
        {name} {emoji}
      </p>
      <p className="text-sm text-gray-300">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}

