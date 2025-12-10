import { itemsApi, Item } from "../services/items.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MainLayout from "../layout/MainLayout";
import Card from "../components/ui/Card";

function Items() {
  // const [items, setItems] = useState<Item[] | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  const queryClient = useQueryClient();

  const {
    data: items,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery<Item[], Error>({
    queryKey: ["items"],
    queryFn: itemsApi.list,
    // example options can be set here per-query
    staleTime: 1000 * 30, // override: 30s
  });

  const createMutation = useMutation({
    mutationFn: itemsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  const handleCreateItem = async () => {
    await createMutation.mutateAsync({
      id: items ? items.length + 1 : 1,
      name: `Item ${Math.floor(Math.random() * 10000)}`,
      price: Math.floor(Math.random() * 1000) + 100,
    });
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchItems();
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // const fetchItems = async () => {
  //   const response = await itemsApi.list();
  //   setItems(response);
  //   console.log(response);
  // };

  // if (loading) {
  //   return <p className="text-gray-500">Loading items...</p>;
  // }

  // if (items?.length === 0) {
  //   return <p className="text-gray-500">No items available</p>;
  // }

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Items</h1>
        <button
          onClick={handleCreateItem}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Item
        </button>
      </div>
      <Card title="Item List">
        {isLoading || isFetching ? (
          <p className="text-gray-500">Loading items...</p>
        ) : isError ? (
          <p className="text-red-500">Error: {error?.message}</p>
        ) : items && items.length === 0 ? (
          <p className="text-gray-500">No items available</p>
        ) : (
          <table className="min-w-full divide-y">
            <thead>
              <tr>
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((it) => (
                <tr key={it.id} className="border-t">
                  <td className="p-2">{it.id}</td>
                  <td className="p-2">{it.name}</td>
                  <td className="p-2">₹{it.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </>
  );
}

export default Items;
