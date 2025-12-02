import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

function Items() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      fetchItems();
      setLoading(false);
    }, 1000);
  }, []);

  const fetchItems = () => {
    setItems([
      { id: 1, name: "Item A", price: 10 },
      { id: 2, name: "Item B", price: 20 },
    ]);
  };

  if(loading) {
    return <p className="text-gray-500">Loading items...</p>;
  }

  if (items.length === 0) {
    return <p className="text-gray-500">No items available</p>;
  }

  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-3">ID</th>
          <th className="p-3">Name</th>
          <th className="p-3">Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="border-b">
            <td className="p-3">{item.id}</td>
            <td className="p-3">{item.name}</td>
            <td className="p-3">${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Items;
