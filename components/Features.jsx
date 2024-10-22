import React from 'react';

export default function Features() {
  return (
    <div className="bg-black text-white text-center py-10 md:py-[8rem] px-4">
      <h3 className="text-sm md:text-2xl font-semibold gradient-text mb-4">영상 제작소</h3>
      <h2 className="text-xl md:text-4xl mb-4 text-gray-300">
        당장 내일 <span className="font-bold text-white">‘고품질 맞춤 영상’</span> 을 받아보세요.
      </h2>
      
      {/* Responsive feature grid */}
      <div className="flex flex-wrap justify-center md:gap-8 py-[3rem]">
        {[
          { title: 'FAST', subtitle: 'x2' },
          { title: 'QUALITY', subtitle: 'A++' },
          { title: 'LOW PRICE', subtitle: '1/2' },
          { title: 'HIGH TECH', subtitle: 'Gen AI' },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-full p-4 w-[80px] h-[80px] md:w-[200px] md:h-[200px] gradient-border flex items-center justify-center"
          >
            <div>
              <p className="font-bold text-sm md:text-3xl gradient-text relative px-2">{feature.title}</p>
              <p className="hidden md:block gradient-text text-sm md:text-xl relative">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mt-8">AI VIDEO ON YOUR DEMAND</h3>
      <p className="text-lg mt-5 text-gray-500">
        가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에<br className="hidden sm:block"/>
        영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
      </p>
      <p className="text-lg mt-6 text-gray-500">
        가격은 절반으로, 속도는 두배로, 품질은 A++!<br className="hidden sm:block"/>
        기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등<br className="hidden sm:block"/>
        당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.
      </p>
      
      {/* Horizontal line */}
      <div className="h-1 w-[60%] sm:w-[30%] mx-auto gradient-line mt-[7rem]"></div>
    </div>
  );
}
