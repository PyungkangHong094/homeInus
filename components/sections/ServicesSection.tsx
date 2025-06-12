"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Home, Palette, Users } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "주거 공간 설계",
      description:
        "아파트, 빌라, 단독주택 등 다양한 주거 형태에 맞는 최적의 공간 활용 솔루션을 제공합니다.",
    },
    {
      icon: Palette,
      title: "컬러 & 스타일링",
      description:
        "개인의 취향과 성향을 분석하여 최적의 컬러 팔레트와 스타일을 제안해드립니다.",
    },
    {
      icon: Users,
      title: "맞춤 컨설팅",
      description:
        "1:1 전문 컨설팅을 통해 고객의 니즈를 정확히 파악하고 맞춤형 솔루션을 제시합니다.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            전문 인테리어 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            고객의 라이프스타일과 취향을 반영한 맞춤형 공간 설계 서비스를
            제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
