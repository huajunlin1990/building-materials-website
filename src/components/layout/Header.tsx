import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronRight, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { navItems } from '../../data/mockData';
import { Button } from '../common/Button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // 导航栏样式变化
  const headerStyle = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-lg'
    : 'bg-white/95 backdrop-blur-md shadow-sm';

  return (
    <header className={`${headerStyle} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-xl green-gradient flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-dark tracking-tight">晶凡硕</span>
              <span className="text-xs text-gray-500 -mt-1">新材料科技</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${
                  isActive(item.path)
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-primary hover:bg-light'
                }`}
              >
                {item.name}
                {isActive(item.path) && <ChevronRight className="w-3 h-3" />}
              </Link>
            ))}
            <Button
              leftIcon={Phone}
              variant="primary"
              className="ml-4"
            >
              <Link to="/contact">联系我们</Link>
            </Button>
          </nav>

          <button
            className="md:hidden text-gray-700 p-2 hover:bg-light rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white rounded-b-xl shadow-lg">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                    isActive(item.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-primary hover:bg-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {isActive(item.path) && <ChevronRight className="w-4 h-4" />}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  leftIcon={Phone}
                  className="w-full"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    立即咨询
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
