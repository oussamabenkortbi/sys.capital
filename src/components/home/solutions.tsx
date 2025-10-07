import React from "react";
import { Users, Boxes, CreditCard, BriefcaseBusiness } from "lucide-react";

const SoftwareSolutions = () => {
  const solutions = [
    {
      name: "CRM",
      tagline: "إدارة علاقات العملاء",
      description:
        "تسهيل التواصل مع العملاء وزيادة المبيعات بالأتمتة الذكية والتحليلات الدقيقة",
      url: "crm.sys.capital",
      color: "#0ea5e9",
      icon: Users,
      bgGradient: "from-sky-400 to-blue-500",
    },
    {
      name: "ERP",
      tagline: "تخطيط موارد المؤسسات",
      description: "توحيد جميع عمليات الأعمال في نظام متكامل لأقصى كفاءة وتحكم",
      url: "erp.sys.capital",
      color: "#22c55e",
      icon: Boxes,
      bgGradient: "from-emerald-400 to-green-500",
    },
    {
      name: "POS",
      tagline: "أنظمة نقاط البيع",
      description:
        "حل بيع عصري مع إدارة المخزون الفوري والدفع وتحليلات العملاء",
      url: "pos.sys.capital",
      color: "#f59e0b",
      icon: CreditCard,
      bgGradient: "from-amber-400 to-orange-500",
    },
    {
      name: "HR",
      tagline: "إدارة الموارد البشرية",
      description: "حزمة كاملة للتوظيف، الرواتب، تتبع الأداء، ومشاركة الموظفين",
      url: "hr.sys.capital",
      color: "#a855f7",
      icon: BriefcaseBusiness,
      bgGradient: "from-purple-400 to-violet-500",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 px-6 py-24 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-400" />
            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <div
              className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-400" />
          </div>

          <h2
            className="text-5xl lg:text-6xl font-black text-slate-900 mb-3"
          >
            حلول برمجية متكاملة
          </h2>
          <h2
            className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            لإدارة أعمالك بذكاء
          </h2>
          <p
            className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto"
          >
            أنظمة مصممة خصيصاً لتلبية احتياجات الأعمال الجزائرية 🇩🇿
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const rotation = index % 2 === 0 ? "rotate-2" : "-rotate-2";

            return (
              <div
                key={solution.name}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full">
                  <a
                    href={`https://${solution.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {/* Image Section with Rotation */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-90 transition-all duration-700 group-hover:scale-110 ${rotation} group-hover:rotate-0`}
                      >
                        {/* Abstract pattern overlay */}
                        <div className="absolute inset-0 opacity-20">
                          <svg className="w-full h-full" viewBox="0 0 400 400">
                            <defs>
                              <pattern
                                id={`pattern-${index}`}
                                x="0"
                                y="0"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                              >
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="2"
                                  fill="white"
                                  opacity="0.5"
                                />
                              </pattern>
                            </defs>
                            <rect
                              width="400"
                              height="400"
                              fill={`url(#pattern-${index})`}
                            />
                          </svg>
                        </div>

                        {/* Geometric shapes */}
                        <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white/30 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                          style={{ backgroundColor: solution.color }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        {/* Glow effect */}
                        <div
                          className="absolute inset-0 w-14 h-14 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                          style={{ backgroundColor: solution.color }}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {solution.name}
                        </h3>
                        <p
                          className="text-slate-600 font-semibold mb-3"
                        >
                          {solution.tagline}
                        </p>
                        <p
                          className="text-slate-500 text-sm leading-relaxed"
                        >
                          {solution.description}
                        </p>
                      </div>

                      {/* URL Badge */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-slate-700 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span>{solution.url}</span>
                      </div>

                      {/* Progress bar */}
                      <div className="pt-2">
                        <div
                          className="h-1 rounded-full transition-all duration-500 w-16 group-hover:w-full"
                          style={{ backgroundColor: solution.color }}
                        />
                      </div>
                    </div>

                    {/* Hover border glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: `0 0 30px ${solution.color}40`,
                      }}
                    />
                  </a>
                </div>

                {/* Number badge */}
                <div
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 z-10"
                  style={{ backgroundColor: solution.color }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative section */}
        <div className="text-center mt-16">
          <div className="flex justify-center items-center gap-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
            <p className="text-slate-600 text-lg font-medium">
              متكامل • قابل للتوسع • جاهز للمؤسسات
            </p>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-12 w-3 h-3 rounded-full bg-violet-400 animate-bounce opacity-40" />
      <div
        className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-purple-400 animate-bounce opacity-40"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-40 right-24 w-4 h-4 rounded-full bg-pink-400 animate-bounce opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 left-24 w-2 h-2 rounded-full bg-sky-400 animate-bounce opacity-40"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  );
};

export default SoftwareSolutions;
