export default function ContactForm() {
  const inputClass = "w-full p-2 mt-2 text-white rounded-md bg-[#141414] h-[50px] px-[10px] border border-[#FFFFFF26]";
  const textareaClass = "w-full p-2 mt-2 text-white rounded-md bg-[#141414] px-[10px] border border-[#FFFFFF26] h-[250px]";

  return (
    <section className="py-16 bg-black px-4 md:px-0">
      <div className="mb-10">
        <h4 className="gradient-text text-center font-bold text-md mb-4">영상 제작 문의</h4>
        <h2 className="text-2xl md:text-3xl text-center mb-8">
          <span className="text-gray-200 font-bold">영상 제작이 필요하다면</span>, 지금 문의 주세요.
        </h2>
        <h3 className="text-md md:text-xl text-center mb-8 text-gray-400">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가<br />즉시 연락 드리겠습니다
        </h3>
        <p className="text-sm text-gray-500 text-center">henry.lim@saltlux.com</p>
      </div>
      <form className="max-w-2xl mx-auto rounded-lg">
        <div className="mb-4">
          <select className={inputClass}>
            <option>영상 유형 선택</option>
            <option>Event Video</option>
          </select>
        </div>
        <div className="mb-4">
          <input type="text" className={inputClass} placeholder="연락 받으실 담당자 성함" />
        </div>
        <div className="mb-4">
          <input type="email" className={inputClass} placeholder="이메일" />
        </div>
        <div className="mb-4">
          <input type="tel" className={inputClass} placeholder="휴대폰 번호" />
        </div>
        <div className="mb-4">
          <textarea className={textareaClass}></textarea>
        </div>
        <div className="mb-4">
          <input type="text" className={inputClass} placeholder="참고 영상" />
        </div>
        <p className="text-[12px] text-[#FF6D51] text-left">
          * 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-between pt-[80px]">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              id="agree"
              name="agree"
            />
            <span className="text-gray-500 text-sm">개인정보처리방침에 동의합니다.</span>
          </div>
          <button className="bg-orange-600 text-white p-2 rounded hover:bg-orange-400">문의 보내기</button>
        </div>
      </form>
    </section>
  );
}
