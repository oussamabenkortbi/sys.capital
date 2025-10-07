import Image from "next/image";
import { Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/typography/heading";
import { GradientText } from "@/components/typography/gradient-text";
import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
  const products = [
    {
      name: "أجهزة كمبيوتر للأعمال",
      price: "ابتداءً من 45,000 دج",
      details: "Intel Core i5/i7 | ذاكرة 8GB+ | تخزين SSD | ضمان",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=60",
    },
    {
      name: "طابعات حرارية",
      price: "ابتداءً من 15,000 دج",
      details: "USB، طباعة سريعة، قاطع تلقائي، سهل التثبيت",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=60",
    },
    {
      name: "أنظمة POS متكاملة",
      price: "ابتداءً من 85,000 دج",
      details: "شاشة لمس، درج نقود، ماسح ضوئي، مجموعة كاملة",
      image:
        "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1600&q=60",
    },
  ] as const;

  return (
    <section
      id="products"
      className="relative py-24 sm:py-28 md:py-32 px-6 sm:px-8 select-text overflow-hidden"
    >
      {/* Enhanced background with gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 dark:from-slate-950 dark:via-black dark:to-indigo-950/40" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 dark:from-indigo-800/20 dark:to-purple-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-violet-200/30 to-pink-200/30 dark:from-violet-800/20 dark:to-pink-800/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Diagonal pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(45deg,transparent_48%,rgba(0,0,0,.05)_49%,rgba(0,0,0,.05)_51%,transparent_52%)] bg-[length:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
        {/* Enhanced section header */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 animate-pulse delay-300"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 animate-pulse delay-600"></div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>

            <Heading level={2} gradient className="group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white transform transition-all duration-500 group-hover:scale-105">
                معدات
                <span className="mx-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent font-black">
                  احترافية
                </span>
              </span>
            </Heading>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed font-inter">
              معدات أعمال متميزة مصممة لتحقيق
              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mx-1">
                التميز المهني
              </span>
            </p>
          </div>
        </div>

        {/* Enhanced products */}
        <div className="space-y-8 sm:space-y-10">
          {products.map(({ name, price, details, image }, i) => (
            <div key={i} className="group relative">
              <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transform transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 bg-white/95 dark:bg-black/95 backdrop-blur-sm">
                {/* Enhanced background image with effects */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={image}
                    alt=""
                    width={1600}
                    height={900}
                    className="absolute inset-0 size-full object-cover object-center opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Multi-layered gradients */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/85 to-white/70 dark:from-black/98 dark:via-black/85 dark:to-black/70" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-50/30 to-purple-50/30 dark:via-indigo-950/20 dark:to-purple-950/20" />

                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/20 to-transparent dark:via-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                </div>

                <CardContent className="relative flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 p-8 sm:p-12 lg:p-16">
                  {/* Enhanced product name with dramatic typography */}
                  <div className="flex-1 text-center lg:text-left space-y-4">
                    <div className="relative">
                      <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9]">
                        <GradientText className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-violet-600 transition-all duration-500">
                          {name.split(" ").map((word, index) => (
                            <span
                              key={index}
                              className="inline-block mr-4 hover:animate-pulse"
                            >
                              {word}
                            </span>
                          ))}
                        </GradientText>
                      </h3>

                      {/* Text glow effect */}
                      <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                          {name}
                        </h3>
                      </div>
                    </div>

                    {/* Product number badge */}
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
                      <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300 font-inter">
                        منتج {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced price and details */}
                  <div className="flex-1 text-center lg:text-right space-y-6 max-w-lg">
                    <div className="space-y-3">
                      {/* Enhanced price typography */}
                      <div className="relative">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                          {price}
                        </p>

                        {/* Price highlight effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Currency highlight */}
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest font-inter">
                        دينار جزائري
                      </p>
                    </div>

                    {/* Enhanced product details */}
                    <div className="space-y-4">
                      <div className="h-px w-24 bg-gradient-to-r from-indigo-300 to-purple-300 mx-auto lg:ml-auto lg:mr-0"></div>

                      <div className="space-y-2">
                        <p className="text-base sm:text-lg font-light text-slate-600 dark:text-slate-400 leading-relaxed font-inter max-w-md mx-auto lg:ml-auto lg:mr-0">
                          {details.split(" | ").map((detail, index, array) => (
                            <span key={index} className="block sm:inline">
                              <span className="font-medium text-slate-800 dark:text-slate-200">
                                {detail}
                              </span>
                              {index < array.length - 1 && (
                                <span className="hidden sm:inline mx-3 text-indigo-400">
                                  •
                                </span>
                              )}
                            </span>
                          ))}
                        </p>

                        {/* Availability indicator */}
                        <div className="flex items-center justify-center lg:justify-end space-x-2 mt-4">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400 font-inter">
                            متوفر
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Product category badge */}
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                    معدات
                  </span>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-violet-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center space-y-6 pt-8">
          <div className="relative inline-block group">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:via-purple-500 hover:to-violet-500 border-0 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <a
                href="#store"
                className="inline-flex items-center gap-3 text-white font-semibold text-lg tracking-wide relative z-10"
              >
                <div className="relative">
                  <Store
                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <Store className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
                <span className="font-inter">زيارة المتجر</span>
              </a>
            </Button>
            {/* Button glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Enhanced store URL */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-light text-slate-500 dark:text-slate-400 tracking-wide font-mono">
              store.sys.capital
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400 font-inter">
                المتجر الإلكتروني متاح
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-40 left-16 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-bounce delay-1000 opacity-30"></div>
      <div className="absolute top-2/3 right-20 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-400 animate-bounce delay-2000 opacity-30"></div>
      <div className="absolute bottom-32 left-24 w-4 h-4 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 animate-bounce delay-3000 opacity-30"></div>
    </section>
  );
};

export default FeaturedProducts;
