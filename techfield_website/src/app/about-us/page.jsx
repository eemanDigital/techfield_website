import React from "react";
import Image from "next/image";
import HeaderText from "../component/HeaderText";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center">
            {/* Background decorative elements */}
            <div className="absolute -top-8 -left-8 w-80 h-80 bg-info/5 rounded-full z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-full z-0"></div>

            {/* Main image with elegant frame */}
            <div className="relative z-10">
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 border-[12px] border-white/80 rounded-3xl z-10"></div>
                <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl z-20"></div>
                <Image
                  src="/images/about-us.jpg"
                  alt="Techfield Law Professional Team"
                  fill
                  className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Professional accent */}
              {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-info rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="font-bold text-xl">10+</div>
                  <div className="text-[10px] uppercase">Years</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5">
            <HeaderText textOne="About" textTwo="Us" />

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-medium">
                A forward-thinking legal firm blending traditional expertise
                with modern innovation.
              </p>

              <p>
                Techfield Law is a bold, tech-savvy law and advisory firm built
                by a team of young but highly experienced lawyers and
                strategists who've been in the trenches with the very innovators
                we serve.
              </p>

              <p>
                We understand the speed and creativity of emerging industries
                because we're part of that world. Our team deeply understands
                FinTech, AI, Blockchain, and modern global business operations.
              </p>

              <p className="bg-primary/10 p-4 rounded-lg border-l-4 border-info">
                <strong>
                  African-born, digitally native, and globally minded.
                </strong>{" "}
                Whether you're launching a product, closing cross-border deals,
                or facing regulatory challenges, we provide the strategic
                counsel you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
