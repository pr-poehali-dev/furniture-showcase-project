import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MarketplaceSection = () => {
  const marketplaces = [
    {
      name: "Wildberries",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Wildberries_Logo.png", 
      features: ["Адаптация к требованиям FBS/FBO", "Оптимизированная упаковка", "Подготовка карточек товара"]
    },
    {
      name: "Ozon",
      logo: "https://upload.wikimedia.org/wikipedia/ru/c/c2/Ozon_logo.svg",
      features: ["Соответствие требованиям приемки", "Учет особенностей маркировки", "Оптимизация стоимости доставки"]
    },
    {
      name: "Яндекс.Маркет",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Yandex_Market_logo.svg",
      features: ["Подготовка к работе по системе DBS", "Учет требований маркетплейса", "Полное сопровождение товаров"]
    }
  ];

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Работа с маркетплейсами</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Мы специализируемся на производстве мебели для продажи через крупнейшие маркетплейсы,
            обеспечивая полное соответствие их требованиям и стандартам
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {marketplaces.map((mp, index) => (
            <Card key={index} className="overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="bg-accent p-6 flex justify-center items-center h-40">
                <img 
                  src={mp.logo} 
                  alt={`${mp.name} Logo`}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{mp.name}</h3>
                <ul className="space-y-3">
                  {mp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-secondary rounded-lg p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Преимущества работы с маркетплейсами</h3>
              <p className="text-gray-700 mb-6">
                Современные маркетплейсы открывают огромные возможности для производителей мебели, 
                но требуют специфических знаний и опыта. Мы обладаем всеми необходимыми компетенциями 
                для успешного сотрудничества с этими площадками.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Доступ к миллионам потенциальных покупателей</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Масштабирование продаж без собственного сайта</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Выход на федеральный уровень сбыта</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1609718696360-1f9c25f2e73d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Упакованная мебель для маркетплейсов" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;