export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-[#1e293b] text-white p-4 rounded-md shadow-md">
      <div className="font-bold text-lg">{name}</div>
      <div className="text-sm text-gray-300">
        Buy {quantity} in {category.toLowerCase()}
      </div>
    </li>
  );
}



