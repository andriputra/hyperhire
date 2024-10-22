import { useState, useEffect } from 'react';

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled up
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY < window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToBottom}
        className="h-[90px] w-[90px] justify-center items-center flex flex-col fixed bottom-[30%] right-12 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 bg-gradient-to-r from-red-400 to-red-600"
      >
        <span className='text-sm'>제작<br/>문의하기</span>
        <img src='/img/arrow.png' alt='scroll' className='mx-auto w-[15px] h-auto'/>
      </button>
    )
  );
};

export default function Scrollto() {
  return (
    <div className="hidden md:block">
      <ScrollToBottomButton />
    </div>
  );
}
