import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Телефон</h4>
                  <p className="text-gray-700">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-700">info@mebelpro.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Адрес</h4>
                  <p className="text-gray-700">г. Москва, ул. Мебельная, 123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Время работы</h4>
                  <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Мы на карте</h3>
              <div className="rounded-lg overflow-hidden h-[250px] bg-gray-200">
                {/* Здесь можно разместить Google Maps или Яндекс.Карты */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Карта с расположением фабрики
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Форма обратной связи</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Иван Иванов"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Название компании
                </label>
                <Input 
                  id="company"
                  type="text" 
                  placeholder="ООО 'Компания'"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="example@mail.ru"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="+7 (___) ___-__-__"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <Textarea 
                  id="message"
                  placeholder="Опишите ваш запрос..."
                  className="w-full h-32"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Отправить заявку
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-gray-500">
              Нажимая кнопку "Отправить заявку", вы соглашаетесь с нашей 
              <a href="#" className="text-primary hover:underline"> политикой конфиденциальности</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;