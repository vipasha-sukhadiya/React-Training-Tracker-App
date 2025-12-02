function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-3">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Home</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">About</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;