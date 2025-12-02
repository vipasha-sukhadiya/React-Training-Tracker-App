import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleClick = (path: string) => () => {
    navigate(path);
  };

  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-3">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={handleClick("/")}>Home</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={handleClick("/items")}>Items</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={handleClick("/about")}>About</li>
      </ul>
    </div>
  );
}

export default Sidebar;