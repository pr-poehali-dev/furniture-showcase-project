import { Factory, Award, Tool, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">О нашей фабрике</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Мы современная фабрика корпусной мебели с многолетним опытом работы в мебельной индустрии. 
              Наше производство оснащено высокотехнологичным оборудованием, что позволяет нам создавать 
              качественную мебель по конкурентоспособным ценам.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Специализируемся на контрактном производстве для маркетплейсов и ритейлеров. 
              Мы понимаем все тонкости работы с онлайн-площадками и предлагаем полный цикл: 
              от разработки дизайна до упаковки, учитывающей требования Wildberries, Ozon, Яндекс.Маркет.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <Factory className="h-10 w-10 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Современное производство</h3>
                  <p className="text-gray-600">Автоматизированные линии и новейшее оборудование</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-10 w-10 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Высокое качество</h3>
                  <p className="text-gray-600">Контроль на всех этапах производства</p>
                </div>
              </div>
              <div className="flex items-start">
                <Tool className="h-10 w-10 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Собственные технологии</h3>
                  <p className="text-gray-600">Уникальные разработки и материалы</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-10 w-10 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Масштабируемость</h3>
                  <p className="text-gray-600">Возможность выполнения крупных заказов</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Производство мебели" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary rounded-lg p-6 shadow-xl">
              <p className="text-white text-xl font-bold">10+ лет на рынке мебельного производства</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;