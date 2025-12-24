import { Link } from 'react-router-dom';
import { menuItems } from '../config/menu';
import useAuthStore from '../stores/auth.store';

export default function Sidebar() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="w-60 p-4 bg-gray-900 text-white min-h-screen">
      <h2 className="mb-4">My App</h2>
      <ul>
        {menuItems
          .filter((m) => {
            if (!m.allowedRoles) return true;
            return user && m.allowedRoles.includes(user.role as any);
          })
          .map((m) => (
            <li key={m.id} className="mb-2">
              <Link to={m.path} className="hover:underline">
                {m.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
