import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("living-room");

  const products = {
    "living-room": [
      {
        id: 1,
        name: "Шкаф-купе модульный",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Современный дизайн с раздвижными дверями и просторным отделением для хранения"
      },
      {
        id: 2,
        name: "Тумба ТВ",
        image: "https://images.unsplash.com/photo-1595428831397-9c5e8e6ca72a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Функциональная тумба со множеством отделений для техники и аксессуаров"
      },
      {
        id: 3,
        name: "Журнальный столик",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Минималистичный столик с дополнительной полкой для хранения"
      },
    ],
    "bedroom": [
      {
        id: 4,
        name: "Кровать с подъемным механизмом",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Удобная кровать со встроенным местом для хранения"
      },
      {
        id: 5,
        name: "Прикроватная тумба",
        image: "https://images.unsplash.com/photo-1591079406666-468522a28a63?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Компактная тумба для самого необходимого рядом с кроватью"
      },
      {
        id: 6,
        name: "Комод",
        image: "https://images.unsplash.com/photo-1604014056465-9e90a16330cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Вместительный комод с плавным ходом ящиков для хранения вещей"
      },
    ],
    "office": [
      {
        id: 7,
        name: "Письменный стол",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Эргономичный стол с кабель-менеджментом для комфортной работы"
      },
      {
        id: 8,
        name: "Офисный шкаф",
        image: "https://images.unsplash.com/photo-1556228578-f9111f093308?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Шкаф для документов с возможностью установки замка"
      },
      {
        id: 9,
        name: "Тумба мобильная",
        image: "https://images.unsplash.com/photo-1505693314861-d76bd78c7802?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Мобильная тумба на колесиках с ящиками для хранения документов"
      },
    ]
  };

  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наша продукция</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Мы производим широкий ассортимент корпусной мебели высокого качества
            для различных помещений и задач
          </p>
        </div>

        <Tabs defaultValue="living-room" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary">
              <TabsTrigger value="living-room">Гостиная</TabsTrigger>
              <TabsTrigger value="bedroom">Спальня</TabsTrigger>
              <TabsTrigger value="office">Офис</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(products).map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid md:grid-cols-3 gap-8">
                {products[category as keyof typeof products].map((product) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Button variant="link" className="text-primary p-0 flex items-center">
                        Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90">
            Посмотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;