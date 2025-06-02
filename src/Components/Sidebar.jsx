import { useState } from 'react';
import {
  House,
  Chat,
  FolderSimple,
  Gear,
  Question,
} from 'phosphor-react';

import logo from '../assets/Black White Bold Modern Studio Logo - 1.png';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('chat');
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { id: 'home', label: 'Home', icon: House, path:'/'},
    { id: 'chat', label: 'Chat', icon: Chat , path:'/video'},
    { id: 'files', label: 'Files', icon: FolderSimple },
    { id: 'settings', label: 'Settings', icon: Gear },
    { id: 'help', label: 'Help', icon: Question },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-screen z-50
        flex flex-col justify-between
        bg-[#B4D3B2] text-black
        transition-all duration-500 ease-in-out
        ${collapsed ? 'w-16' : 'w-64'}
      `}
      style={{
        boxShadow: 'none',
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center justify-center py-6 cursor-pointer"
        onClick={toggleSidebar}
        style={{ boxShadow: 'none' }}
      >
        <img
          src={logo}
          alt="DeepSeek Logo"
          className="w-[100px] h-[100px] object-contain transition-transform duration-300 ease-in-out hover:scale-105"
          style={{ boxShadow: 'none' }}
        />
      </div>

      {/* Menu */}
      <div className="flex-1 flex flex-col items-center justify-evenly px-2 py-6">
        {menuItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeItem === id;

          return (
            <button
  key={id}
  onClick={() => setActiveItem(id)}
  onMouseEnter={() => setHoveredItem(id)}
  onMouseLeave={() => setHoveredItem(null)}
  className={`
    w-full
    ${collapsed ? 'flex justify-center' : 'flex items-center gap-4 px-6'}
    py-4
    transition-all duration-300 ease-in-out
    bg-transparent
    text-left
    focus:outline-none focus:ring-0 focus:border-none
    border-none shadow-none outline-none
  `}
  style={{ boxShadow: 'none', border: 'none', outline: 'none' }}
>

              <Icon
  size={24}
  weight={hoveredItem === id ? 'fill' : 'regular'}
  className="text-black"
  style={{
    boxShadow: 'none',
    border: 'none',
    outline: 'none',
  }}
/>

              {!collapsed && (
                <span className="text-base font-medium">{label}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* User */}
      <div
        className={`px-4 py-4 border-t border-black/20 ${collapsed ? 'flex justify-center' : ''}`}
        style={{ boxShadow: 'none' }}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-sm font-bold">
            
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <p className="font-medium text-sm">Gooner Edge</p>
              <p className="text-xs text-black/60">edger@gooning.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
