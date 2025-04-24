import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary pt-16 pb-20">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Фабрика корпусной</span>
              <span className="block text-primary">мебели для бизнеса</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-gray-600">
              Контрактное производство корпусной мебели для маркетплейсов: 
              Wildberries, Ozon, Яндекс.Маркет и других площадок.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 text-base">
                Получить консультацию
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-medium px-8 py-3 text-base">
                Наш каталог
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-600">лет на рынке</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-sm text-gray-600">изделий в месяц</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-gray-600">довольных клиентов</p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-10 lg:flex-1">
            <img
              src="https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Современная корпусная мебель"
              className="mx-auto h-[400px] w-auto object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;