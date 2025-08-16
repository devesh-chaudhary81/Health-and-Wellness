import React from "react";

const DoshaCard = ({ type, emoji, name, desc, traits }) => {
  // Gradient colors for each type
  const gradients = {
    vata: "bg-gradient-to-br from-[#2d70ab] to-[#76cde8]",
    pitta: "bg-gradient-to-br from-[#f28b0d] to-[#f57771]",
    kapha: "bg-gradient-to-br from-[#33b75f] to-[#3cc7ad]",
  };

  return (
    <div
      className={`rounded-xl p-5 w-[220px] text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg text-white ${gradients[type]}`}
    >
      <h3 className="text-4xl mb-2" role="img" aria-label={name}>
        {emoji}
      </h3>
      <h3 className="text-lg mb-1 font-bold">{name}</h3>
      <p className="mb-1">{desc}</p>
      <span className="text-sm font-semibold">{traits}</span>
    </div>
  );
};

const Doshas = () => (
  <section className="w-screen bg-white flex flex-col justify-center items-center py-7 px-5 box-border">
    <h2 className="mt-4 text-2xl font-bold mb-8 text-center text-black">
      The Three Doshas
    </h2>
    <div className="flex gap-5 flex-wrap justify-center">
      <DoshaCard
        type="vata"
        emoji="🌬️"
        name="Vata"
        desc="Air & Space"
        traits="Creative, Energetic, Quick-thinking"
      />
      <DoshaCard
        type="pitta"
        emoji="🔥"
        name="Pitta"
        desc="Fire & Water"
        traits="Focused, Determined, Leader"
      />
      <DoshaCard
        type="kapha"
        emoji="🌱"
        name="Kapha"
        desc="Earth & Water"
        traits="Calm, Steady, Nurturing"
      />
    </div>
  </section>
);

export default Doshas;

