import Image from "next/image";
import { Code2, Smartphone, Workflow, LifeBuoy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/typography/heading";
import { GradientText } from "@/components/typography/gradient-text";

const Services = () => {
  const services = [
    {
      title: "تطوير المواقع",
      sub: "تطبيقات وأنظمة مخصصة",
      description: "React, Node.js, تكامل APIs",
      color: "#0ea5e9", // sky-500
      Icon: Code2,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "تطوير التطبيقات",
      sub: "تطبيقات iOS و Android",
      description: "React Native, Flutter, النشر",
      color: "#22c55e", // green-500
      Icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "تكامل الأنظمة",
      sub: "ربط وأتمتة",
      description: "API، ترحيل البيانات، سير العمل",
      color: "#f59e0b", // amber-500
      Icon: Workflow,
      image:
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "الدعم والصيانة",
      sub: "مساعدة خبراء 24/7",
      description: "استجابة سريعة، تحديثات، تدريب",
      color: "#a855f7", // purple-500
      Icon: LifeBuoy,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=60",
    },
  ] as const;

  return (
    <section
      id="services"
      className="relative py-24 sm:py-28 md:py-32 px-6 sm:px-8 overflow-hidden"
    >
      {/* Enhanced background with gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-white to-sky-50/50 dark:from-violet-950/30 dark:via-black dark:to-sky-950/30" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-sky-200/20 to-violet-200/20 dark:from-sky-800/10 dark:to-violet-800/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-3xl animate-pulse delay-1500" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent)] bg-[length:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced section header */}
        <div className="text-center mb-16 sm:mb-20 space-y-8">
          <div className="space-y-6">
            {/* Decorative header elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-400"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 animate-pulse delay-300"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse delay-600"></div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>

            <Heading level={2} gradient className="group">
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white transform transition-all duration-500 group-hover:scale-105"
              >
                خدماتنا
                <span className="mx-3 bg-gradient-to-r from-sky-600 via-violet-600 to-purple-600 bg-clip-text text-transparent font-black">
                  المتكاملة
                </span>
              </span>
            </Heading>

            <div className="max-w-4xl mx-auto space-y-4">
              <p
                className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed font-inter"
              >
                <span className="font-semibold bg-gradient-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">
                  حلول شاملة
                </span>{" "}
                للويب، الموبايل، التكامل، والدعم الفني
              </p>

              {/* Service type indicators */}
              <div
                className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm font-medium"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-slate-600 dark:text-slate-400 font-inter">
                    التطوير
                  </span>
                  <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-600 dark:text-slate-400 font-inter">
                    الموبايل
                  </span>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-600 dark:text-slate-400 font-inter">
                    التكامل
                  </span>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-600 dark:text-slate-400 font-inter">
                    الدعم
                  </span>
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {services.map(
            ({ title, sub, description, color, Icon, image }, i) => (
              <div key={i} className="group relative">
                <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
                  {/* Enhanced background image with effects */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={image}
                      alt=""
                      width={1200}
                      height={800}
                      className="absolute inset-0 size-full object-cover object-center opacity-15 group-hover:opacity-25 transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Multi-layered gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/98 via-white/85 to-white/60 dark:from-black/98 dark:via-black/85 dark:to-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 dark:to-black/20" />

                    {/* Color accent overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{ backgroundColor: color }}
                    />
                  </div>

                  <CardContent className="relative p-8 sm:p-10 space-y-6">
                    {/* Enhanced header with icon and title */}
                    <div className="flex items-start gap-5 group-hover:gap-6 transition-all duration-300">
                      {/* Enhanced icon with glow effect */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="relative size-14 flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
                          style={{ backgroundColor: color }}
                        >
                          <Icon
                            className="size-7 text-white transition-transform duration-300 group-hover:scale-110"
                            aria-hidden="true"
                          />
                        </div>
                        {/* Icon glow effect */}
                        <div
                          className="absolute inset-0 size-14 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                          style={{ backgroundColor: color }}
                        />
                      </div>

                      {/* Enhanced title typography */}
                      <div className="flex-1 space-y-2">
                        <h3
                          className="text-2xl sm:text-3xl font-black tracking-tight leading-tight"
                        >
                          <GradientText className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">
                            {title}
                          </GradientText>
                        </h3>

                        {/* Enhanced subtitle */}
                        <h4
                          className="text-sm sm:text-base font-bold tracking-wide text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300 font-inter"
                        >
                          {sub}
                        </h4>
                      </div>
                    </div>

                    {/* Enhanced description */}
                    <div className="space-y-4">
                      <p
                        className="text-lg sm:text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 font-inter"
                      >
                        {description.split(", ").map((tech, index, array) => (
                          <span key={index}>
                            <span className="font-medium text-slate-800 dark:text-slate-200">
                              {tech}
                            </span>
                            {index < array.length - 1 && (
                              <span className="mx-2 text-slate-400">•</span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>

                    {/* Enhanced decorative line with animation */}
                    <div className="pt-4">
                      <div className="relative">
                        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600" />
                        <div
                          className="absolute top-0 left-0 h-1 w-0 rounded-full group-hover:w-full transition-all duration-700"
                          style={{
                            background: `linear-gradient(90deg, ${color}80, ${color})`,
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>

                  {/* Service number badge */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-white/20 dark:border-black/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-slate-600 dark:text-slate-400 font-bold text-sm font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Hover border effect */}
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-300"
                    style={{ borderColor: color }}
                  />
                </Card>

                {/* Card glow effect */}
                <div
                  className="absolute -inset-2 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                  style={{ backgroundColor: color }}
                />
              </div>
            ),
          )}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center mt-16 sm:mt-20 space-y-6">
          <div className="flex justify-center items-center space-x-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
            <p
              className="text-lg font-inter text-slate-600 dark:text-slate-400 font-light"
            >
              <span className="font-semibold">شامل</span> •{" "}
              <span className="font-semibold">موثوق</span> •{" "}
              <span className="font-semibold">قابل للتوسع</span>
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-12 w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-violet-400 animate-bounce delay-1000 opacity-30"></div>
      <div className="absolute top-1/2 right-16 w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-bounce delay-2000 opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce delay-3000 opacity-30"></div>
    </section>
  );
};

export default Services;
