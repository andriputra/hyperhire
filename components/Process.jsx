import Image from "next/image";

export default function Process() {
  const steps = [
    {
      title: "사전 논의",
      description: [
        "영상 제작 문의를 통해 의뢰 확인 후",
        "상담을 통해 방향 설정 및 내용 협의",
      ],
    },
    {
      title: "영상 기획",
      description: [
        "스토리보드 전달&수정을 통한 기획안 확정",
        "가상인간 발화용 스크립트 작성과 프롬프팅",
      ],
    },
    {
      title: "영상 생성",
      description: [
        "작성한 스크립트로 가상인간 영상 생성",
        "그외 이미지, 배경 음악 등 필요 요소 생성",
      ],
    },
    {
      title: "영상 편집",
      description: [
        "영상 전문가의 편집, 디자인, 후반 작업 단계",
        "필요시 실사 촬영 병행하여 편집본 완성",
      ],
    },
    {
      title: "최종 납품",
      description: [
        "고객 피드백 반영하여 최종본 완성 및 납품",
        "* 영상 수정 무료 1회 제공",
      ],
    },
  ];

  return (
    <section className="md:max-w-[75%] mx-auto bg-black py-[50px] md:py-[100px]">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-4xl font-bold mb-8 title-section">MAKING PROCESS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Column 1 */}
        <div className="md:bg-[#141414] md:py-[50px] md:px-[80px] md:rounded-[20px] md:border md:border-[#FFFFFF26] flex justify-center flex-col">
          <h3 className="text-2xl font-bold text-center">일반 제작</h3>
          <p className="text-md text-gray-300 text-center">제작 시작 후 5영업일 이내</p>
          <div className="flex flex-col mt-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`border rounded-[10px] md:rounded-full w-full flex gap-2 md:gap-4 bg-[#141414] md:bg-[#00000033] border-[#444444] py-4 px-4 md:px-8 items-center justify-evenly md:justify-center mt-4 ${index === steps.length - 1 ? '' : 'bt-tooltip'}`}
              >
                <div className="flex flex-col">
                  <span className="text-red-400 text-[0.7em] md:text-sm">STEP {index + 1}</span>
                  <span className="text-[0.8em] md:text-md font-semibold">{step.title}</span>
                </div>
                <div className="flex flex-col justify-center">
                  {step.description.map((desc, i) => (
                    <span key={i} className="text-[0.6em] md:text-sm text-gray-400">{desc}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-[#141414] rounded-[20px] bg-gradient-to-r from-red-400 to-yellow-400 p-[1.5px]">
          <div className="rounded-[20px] flex h-full w-full items-center justify-center bg-[#141414] flex flex-col py-[50px] px-[20px] md:px-[80px]">
            <div className="text-center mb-10">
              <h3 className="text-[32px] md:text-[44px] font-bold gradient-text">Ploonet Quickserve™</h3>
              <h4 className="text-lg md:text-xl font-bold">제작 시작 후 12~48시간 이내</h4>
            </div>
            <div className="flex flex-col mt-4 gap-5">
              {["제작 안내", "영상 생성", "편집 및 납품"].map((title, index) => (
                <div key={index} className="flex flex-row lg:gap-2">
                  <div className="bg-custom-gradient rounded-[15px] w-[100px] h-[100px] md:w-[134px] md:h-[134px] flex items-center flex-col justify-center mr-4 mb-4">
                    <p className="text-sm md:text-md text-white-500 mb-2">STEP {index + 1}</p>
                    <Image 
                      src={index === 0 ? "/img/doc.png" : index === 1 ? "/img/cam.png" : "/img/vid.png"} 
                      alt={index === 0 ? "document" : index === 1 ? "camera" : "video"} 
                      className="opacity-[0.7]" 
                      width={60} 
                      height={50} 
                    />
                  </div>
                  <div className="md:ml-[20px] border-b border-b-[#FFFFFF26] flex flex-col justify-center w-auto flex-1">
                    <h4 className="text-sm md:text-xl font-bold mb-2">{title}</h4>
                    <p className="text-sm text-gray-300">
                      {title === "제작 안내"
                        ? "영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내"
                        : title === "영상 생성"
                        ? "스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성"
                        : "편집 진행, 12~48시간 내 최종본 완성 및 납품"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 px-4">
        <p className="text-[0.8em] md:text-sm text-gray-400 mb-2">
          * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등 전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p className="text-[0.8em] md:text-sm text-gray-400">
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>
    </section>
  );
}