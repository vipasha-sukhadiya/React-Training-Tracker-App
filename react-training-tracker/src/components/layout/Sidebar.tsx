export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen">
      <h2 className="text-xl font-bold mb-6">Training App</h2>

      <nav className="space-y-3">
        <div className="hover:underline cursor-pointer">
          Dashboard
        </div>
        <div className="hover:underline cursor-pointer">
          Items
        </div>
        <div className="hover:underline cursor-pointer">
          Settings
        </div>
      </nav>
    </aside>
  );
}
