import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">МебельПро</h3>
            <p className="text-gray-400 mb-4">
              Фабрика корпусной мебели с фокусом на контрактное производство для маркетплейсов и ритейлеров.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="#about" className="text-gray-400 hover:text-primary transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="#services" className="text-gray-400 hover:text-primary transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="#products" className="text-gray-400 hover:text-primary transition-colors">Продукция</Link>
              </li>
              <li>
                <Link to="#marketplace" className="text-gray-400 hover:text-primary transition-colors">Маркетплейсы</Link>
              </li>
              <li>
                <Link to="#contacts" className="text-gray-400 hover:text-primary transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">info@mebelpro.ru</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">г. Москва, ул. Мебельная, 123</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Документы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Условия сотрудничества
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Гарантийные обязательства
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Сертификаты качества
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} МебельПро. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;