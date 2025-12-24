export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      <h1 className="font-semibold">Items</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">
          Welcome, User
        </span>
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}
