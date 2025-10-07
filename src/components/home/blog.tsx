import Image from "next/image";
import Link from "next/link";
import { posts as allPosts } from "@/app/blog/posts";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/typography/heading";

const posts = allPosts.slice(0, 3);

const BlogHighlights = () => {
  return (
    <section className="relative py-24 px-6 sm:px-8 max-w-7xl mx-auto select-text overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 dark:border-black/10 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=60"
          alt="Blog background"
          width={2000}
          height={1200}
          className="absolute inset-0 size-full object-cover object-center opacity-8 scale-105 animate-slow-zoom"
        />

        {/* Multi-layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 via-white/95 to-red-50/90 dark:from-orange-950/60 dark:via-black/90 dark:to-red-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/98 via-transparent to-transparent dark:from-black/98 dark:via-transparent dark:to-transparent" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-red-200/30 dark:from-orange-800/20 dark:to-red-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-red-200/30 to-pink-200/30 dark:from-red-800/20 dark:to-pink-800/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_49%,rgba(0,0,0,.02)_50%,rgba(0,0,0,.02)_51%,transparent_52%)] bg-[length:30px_30px]" />
      </div>

      <div className="relative space-y-16 sm:space-y-20 md:space-y-24">
        {/* Enhanced section header */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-400"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse delay-300"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 animate-pulse delay-600"></div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>

            <Heading level={2} gradient className="group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white transform transition-all duration-500 group-hover:scale-105">
                من
                <span className="mx-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent font-black">
                  مدونتنا
                </span>
              </span>
            </Heading>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed font-inter">
              رؤى، اتجاهات، وأفضل الممارسات لـ
              <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mx-1">
                الأعمال الحديثة
              </span>
            </p>
          </div>
        </div>

        {/* Enhanced blog posts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {posts.map(
            ({ slug, title, date, image, excerpt, tag, color }, index) => (
              <div key={slug} className="group relative">
                <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/95 dark:bg-black/95 backdrop-blur-sm h-full">
                  {/* Enhanced image with overlay effects */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* Multi-layered image overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />

                    {/* Category badge overlay */}
                    <div className="absolute top-4 left-4 inline-flex items-center space-x-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 dark:border-black/20">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        {tag}
                      </span>
                    </div>

                    {/* Post number badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white font-bold text-xs font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: color }}
                    />
                  </div>

                  <CardContent className="p-8 space-y-6 flex-1 flex flex-col">
                    {/* Enhanced metadata */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-inter">
                        <span className="flex items-center space-x-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          <span className="font-bold">{tag}</span>
                        </span>
                        <span className="font-light">{date}</span>
                      </div>

                      {/* Decorative separator */}
                      <div className="h-px w-12 rounded-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full w-0 rounded-full group-hover:w-full transition-all duration-700"
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    </div>

                    {/* Enhanced title typography */}
                    <div className="flex-1">
                      <h3
                        className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 mb-4"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${color}, ${color}80)`,
                        }}
                      >
                        {title}
                      </h3>

                      <p className="text-base sm:text-lg font-light leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 font-inter line-clamp-3">
                        {excerpt}
                      </p>
                    </div>

                    {/* Enhanced read more link */}
                    <div className="pt-4">
                      <Link
                        href={`/blog/${slug}`}
                        className="group/link inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
                        style={{ color: color }}
                      >
                        <span>اقرأ المزيد</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>

                  {/* Card accent border */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: color }}
                  />

                  {/* Card glow effect */}
                  <div
                    className="absolute -inset-2 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                    style={{ backgroundColor: color }}
                  />
                </Card>
              </div>
            ),
          )}
        </div>

        {/* Enhanced "View all posts" section */}
        <div className="text-center space-y-6 pt-8">
          <div className="relative inline-block group">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-3 text-lg font-bold uppercase tracking-widest bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 group"
            >
              <span>عرض جميع المقالات</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Link underline effect */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Blog stats */}
          <div className="flex justify-center items-center space-x-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            <p className="text-sm font-inter text-slate-600 dark:text-slate-400 font-light">
              <span className="font-semibold">آخر الرؤى</span> •{" "}
              <span className="font-semibold">نصائح الخبراء</span> •{" "}
              <span className="font-semibold">اتجاهات السوق</span>
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          </div>

          {/* Blog update indicator */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 px-6 py-3 rounded-full backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300 font-inter">
              يتم التحديث أسبوعياً
            </span>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-16 w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-400 animate-bounce delay-1000 opacity-30"></div>
      <div className="absolute top-2/3 right-20 w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-pink-400 animate-bounce delay-2000 opacity-30"></div>
      <div className="absolute bottom-40 left-24 w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 animate-bounce delay-3000 opacity-30"></div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes slow-zoom {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BlogHighlights;
