import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">МебельПро</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="#about" className="text-gray-700 hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="#services" className="text-gray-700 hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="#products" className="text-gray-700 hover:text-primary transition-colors">
            Продукция
          </Link>
          <Link to="#marketplace" className="text-gray-700 hover:text-primary transition-colors">
            Маркетплейсы
          </Link>
          <Link to="#contacts" className="text-gray-700 hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">+7 (999) 123-45-67</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Связаться с нами</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            <Link to="/" className="py-2 text-gray-700 hover:text-primary" onClick={toggleMenu}>
              Главная
            </Link>
            <Link to="#about" className="py-2 text-gray-700 hover:text-primary" onClick={toggleMenu}>
              О нас
            </Link>
            <Link to="#services" className="py-2 text-gray-700 hover:text-primary" onClick={toggleMenu}>
              Услуги
            </Link>
            <Link to="#products" className="py-2 text-gray-700 hover:text-primary" onClick={toggleMenu}>
              Продукция
            </Link>
            <Link to="#marketplace" className="py-2 text-gray-700 hover:text-primary" onClick={toggleMenu}>
              Маркетплейсы
            </Link>
            <Link to="#contacts" className="py-2 text-gray-700 hover:text-primary" onClick={toggleMenu}>
              Контакты
            </Link>
            <div className="flex items-center mt-3 mb-2">
              <Phone className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium">+7 (999) 123-45-67</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90 mt-2">Связаться с нами</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;