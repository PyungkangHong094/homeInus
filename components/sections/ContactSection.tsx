"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "전화 문의",
      info: "02-1234-5678",
    },
    {
      icon: Mail,
      title: "이메일",
      info: "info@planhom.co.kr",
    },
    {
      icon: MapPin,
      title: "오시는 길",
      info: "서울시 강남구 테헤란로",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            문의하기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            꿈꿔왔던 공간을 현실로 만들어보세요. 전문 상담을 통해 최적의
            솔루션을 제안해드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} className="text-center p-8 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600">{contact.info}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
