import React from "react";

export const NavbarComponent = () => {
  const navItems = [
    "Cặp đôi",
    "Chuyện tình yêu",
    "Album Hình Cưới",
    "Phù Dâu & Phù Rể",
    "Sự kiện cưới",
    "Sổ Lưu Bút",
    "Mừng cưới",
  ];
  return (
    <nav className="bg-white">
      <ul className="flex justify-center space-x-6 text-gray-600 text-sm py-4">
        {navItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};
