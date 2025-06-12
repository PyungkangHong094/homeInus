"use client";

import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const services = [
    "주거 공간 설계",
    "상업 공간 설계",
    "컬러 컨설팅",
    "홈스타일링",
  ];

  const companyInfo = ["회사소개", "채용정보", "이용약관", "개인정보처리방침"];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="HOME IN US" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              상상으로 채우는 나만의 공간. PLANHOM과 함께 꿈꿔왔던 공간을 현실로
              만들어보세요.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">회사정보</h3>
            <ul className="space-y-2 text-gray-400">
              {companyInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    {info}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Home IN US. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
