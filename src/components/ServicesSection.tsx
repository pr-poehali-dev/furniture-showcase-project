import { 
  Pencil, 
  Factory, 
  PackageCheck, 
  Truck, 
  ShieldCheck, 
  Database
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Pencil className="h-6 w-6 text-primary" />,
      title: "Разработка и дизайн",
      description: "Проектирование мебели с учетом специфики онлайн-торговли и требований маркетплейсов"
    },
    {
      icon: <Factory className="h-6 w-6 text-primary" />,
      title: "Производство",
      description: "Полный цикл изготовления мебели на современном оборудовании с контролем качества"
    },
    {
      icon: <PackageCheck className="h-6 w-6 text-primary" />,
      title: "Упаковка",
      description: "Специальная упаковка, соответствующая требованиям маркетплейсов для безопасной доставки"
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Логистика",
      description: "Доставка на склады маркетплейсов с учетом всех требований к приемке товара"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Гарантийное обслуживание",
      description: "Полное гарантийное сопровождение с минимизацией возвратов и негативных отзывов"
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Анализ продаж",
      description: "Рекомендации по ассортименту на основе аналитики продаж и тенденций рынка"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Предлагаем полный комплекс услуг для производства и реализации мебели через маркетплейсы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border bg-white hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;