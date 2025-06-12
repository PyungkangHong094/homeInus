"use client";

import { Button } from "@/components/ui/button";
import { Apple, Smartphone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          상상으로 채우는
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            나만의 공간
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-light">
          My own space filled with imagination.
        </p>

        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          우리가 만드는 기술이 인간의 한계 극복을 돕고
          <br />
          일상을 이롭게 변화시키는 미래를 꿈꾸고 있습니다.
          <br />
          무한한 잠재력과 가능성을 펼칠 수 있는 기술, 사람을 위한 기술로 혁신을
          이어갑니다.
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-xl text-base font-medium flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <Apple className="w-5 h-5" />
            App Store
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-xl text-base font-medium flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <Smartphone className="w-5 h-5" />
            Google Play
          </Button>
        </div> */}

        <div className="flex justify-center">
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
