// components/Header.tsx
import Link from 'next/link';
import React from 'react';

interface HeaderProps {
    activeSection: string; 
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { name: 'Beranda', href: '/', id: 'home' },
    { name: 'Tentang', href: '/#about', id: 'about' },
    { name: 'Proyek', href: '/#projects', id: 'projects' },
    { name: 'Kontak', href: '/#contact', id: 'contact' },
  ];
    
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          
          <div className="brand">
            <Link href="/" className="logo">Achmad Ashari</Link>
            <span className="tag">Project Manager (PM)</span>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
                <Link 
                    key={item.name} 
                    href={item.href} 
                    className={activeSection === item.id ? 'active' : ''}
                >
                    {item.name}
                </Link>
            ))}
          </nav>
          
        </div>
      </div>
    </header>
  );
};

export default Header;