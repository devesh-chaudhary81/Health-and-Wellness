import React from "react";
import {
  Brain,
  Heart,
  MessageCircle,
  Calendar,
} from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "AI Assessment",
    desc: "Advanced AI analyzes your responses to determine your unique dosha constitution.",
    color: "text-blue-500",
  },
  {
    icon: Heart,
    title: "Personalized Plan",
    desc: "Receive custom diet, lifestyle, and herbal recommendations tailored to you.",
    color: "text-red-500",
  },
  {
    icon: MessageCircle,
    title: "AI Wellness Chat",
    desc: "Instant answers to your wellness questions from our AI Guide.",
    color: "text-green-600",
  },
  {
    icon: Calendar,
    title: "Progress Tracking",
    desc: "Monitor your wellness journey with insights and adaptive recommendations.",
    color: "text-purple-700",
  },
];

const Journey = () => (
  <section className="w-screen min-h-[50vh] py-[50px] px-5 bg-gradient-to-b from-[#fce8ce] to-[#fcf4e8] box-border">
    {/* Title */}
    <h2 className="text-2xl text-black text-center mb-10">
      Your Wellness Journey
    </h2>

    {/* Steps */}
    <div className="flex flex-wrap justify-center gap-[30px]">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div
            key={i}
            className="bg-white/80 rounded-xl p-5 border border-[#b8afaf] w-[260px] text-center shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`mb-[15px] ${step.color}`}>
              <Icon size={40} strokeWidth={2.5} />
            </div>
            <h4 className="text-[1.1rem] text-[#444] mb-2">{step.title}</h4>
            <p className="text-[0.95rem] text-[#666] leading-[1.4]">
              {step.desc}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Journey;

