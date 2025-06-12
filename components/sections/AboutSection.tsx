"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              10년의 경험과 노하우
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              PLANHOM은 고객의 꿈과 상상을 현실로 만드는 전문 인테리어 디자인
              회사입니다. 10여 년간 축적된 경험과 노하우를 바탕으로 고객 맞춤형
              공간을 설계하고 시공합니다.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600">고객 만족도</div>
              </div>
            </div>

            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl">
              자세히 보기
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="About Us"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-600 rounded-2xl flex items-center justify-center">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
