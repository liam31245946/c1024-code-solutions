import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export function Foo() {
  return <FaBars />;
}

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}

      <nav className="px-4 text-white bg-gray-900">
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '<' : '>'}</button>
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name} className="inline-block py-2 px-4">
              <Link to={menu.path} className="text-white">
                <img
                  src={menu.iconUrl}
                  alt={`${menu.name} icon`}
                  className="w-6 h-6 mr-2"
                />{' '}
                {isOpen && <span>{menu.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
