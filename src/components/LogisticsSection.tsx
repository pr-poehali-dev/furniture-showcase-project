import { Truck, MapPin, Timer, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LogisticsSection = () => {
  const logisticsPoints = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Стратегическое расположение",
      description: "Наша фабрика расположена в оптимальной логистической зоне для поставок как в Центральную, так и в Южную Россию"
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Сокращение транспортных расходов",
      description: "До 40% экономии на доставке при пополнении складов маркетплейсов в Центральном и Южном регионах"
    },
    {
      icon: <Timer className="h-6 w-6 text-primary" />,
      title: "Оперативность поставок",
      description: "Доставка на склады Wildberries, Ozon и Яндекс.Маркет в течение 1-2 дней вместо 4-7 дней из других регионов"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Снижение себестоимости",
      description: "Выгодная стоимость логистики позволяет снизить конечную цену товара и повысить конкурентоспособность"
    }
  ];

  return (
    <section id="logistics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Логистические преимущества</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Оптимальное расположение нашей фабрики позволяет значительно снизить
            логистические затраты при пополнении складов маркетплейсов в Центральной и Южной России
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="grid grid-cols-1 gap-6">
              {logisticsPoints.map((point, index) => (
                <Card key={index} className="border border-border bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                        <p className="text-gray-700">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Экономия на логистике</h3>
              <p className="text-gray-700 mb-6">
                Расположение нашего производства позволяет оптимально обслуживать склады маркетплейсов 
                в ключевых логистических хабах России:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold">Московский регион</span>
                  <span className="text-green-600 font-bold">до 40% экономии</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold">Ростов-на-Дону</span>
                  <span className="text-green-600 font-bold">до 35% экономии</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold">Краснодар</span>
                  <span className="text-green-600 font-bold">до 30% экономии</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Воронеж</span>
                  <span className="text-green-600 font-bold">до 25% экономии</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="font-medium text-gray-800">
                  За счет оптимизации логистики вы получаете не только снижение затрат, 
                  но и более быстрое поступление товаров на склады, что напрямую влияет 
                  на скорость продаж и выручку.
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-primary rounded-lg p-4 shadow-xl max-w-[200px]">
              <p className="text-white font-bold">Экономия до 300-500₽ на каждой единице товара</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;