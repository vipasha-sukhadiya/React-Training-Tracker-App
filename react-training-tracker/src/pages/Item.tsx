import { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';

type Item = {
  id: number;
  name: string;
  price: number;
};

export default function Items() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  // simulate API call
  useEffect(() => {
    setTimeout(() => {
      setItems([
        { id: 1, name: 'Laptop', price: 50000 },
        { id: 2, name: 'Keyboard', price: 1500 },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <MainLayout>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          Items List
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading items...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-500">No items found.</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">₹{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </MainLayout>
  );
}
