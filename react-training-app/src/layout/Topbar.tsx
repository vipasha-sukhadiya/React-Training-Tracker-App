function Topbar() {
  return (
    <div className="h-14 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Home</h1>
      <button className="p-2 bg-indigo-600 text-white rounded">Logout</button>
    </div>
  );
}

export default Topbar;