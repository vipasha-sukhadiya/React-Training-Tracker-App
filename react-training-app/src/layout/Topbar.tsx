import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="h-14 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Home</h1>
      <button
        className="p-2 bg-indigo-600 text-white rounded cursor-pointer"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default Topbar;
