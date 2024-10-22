import React from 'react';
export default function PreviousWorks() {
  return (
    <section className="py-8 md:py-16 bg-black">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-4xl font-bold mb-8 title-section">PREVIOUS WORKS</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 12 }, (_, index) => (
          <img
            key={index}
            src={`/img/work${index + 1}.png`}
            alt={`Work ${index + 1}`}
            className="w-full h-auto shadow-lg transition-transform transform hover:scale-105 hover:z-10 hover:rounded-md hover:shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}
