"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/app/spin";

const images = [
  "/img/test1.jfif",
  "/img/test2.jfif",
  "/img/test3.jfif",
  "/img/test4.jfif",
  "/img/test4 (2).jfif",
  "/img/test5.jfif",
];
const LandingPage: React.FC = () => (
  <>
    {/* Navbar */}
    <header className="flex justify-between items-center px-8 py-2 bg-white/20 backdrop-blur-md shadow-md sticky top-0 left-0 w-full z-50">
      <div className="flex items-center gap-5">
        <Image src="/img/navbarlogo.png" alt="Logo" width={60} height={60} />
        <span className="text-xl font-bold text-gray-800">Landing</span>
      </div>
      <nav>
        <ul
          className="flex gap-8 text-gray-
        700 font-medium"
        >
          <li>
            <Link href="/page1" className="hover:text-blue-600">
              Test One
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Client Two
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Partner Three
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Magic Four
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Trying Five
            </a>
          </li>
        </ul>
      </nav>
      <Link
        href="/page1.tsx"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Main Page
      </Link>
    </header>

    {/* page1 */}
    <section className="flex justify-between items-center min-h-screen bg-[url('/img/PinDown.io_1755489330.gif')] bg-cover bg-center px-12 pt-32">
      <div className="text-white max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Crushing The Earth with Power
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Matchmo makes home financing simple by connecting you with the best
          loan options from the Philippines&apos; top 22 banks and financial
          institutions. We streamline the process, saving you time on paperwork
          while ensuring you get the best rates for your monthly amortization.
        </p>
        <a
          href="#"
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
        >
          Get Started
        </a>
      </div>
    </section>

    {/* page2 */}
    <section className="py-5 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">MODELS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
        {[
          {
            src: "/img/download__1_-removebg-preview.png",
            title: "Feature One",
            desc: "Description of feature",
          },
          {
            src: "/img/download-removebg-preview (1).png",
            title: "Feature Two",
            desc: "Description of feature two asdasd",
          },
          {
            src: "/img/download__2_-removebg-preview.png",
            title: "Feature Three",
            desc: "Description of feature three.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center transition transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={f.src}
              alt={f.title}
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{f.title}</h2>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Branding Carousel Section */}
    <section className="py-0 bg-white text-center">
      <h1 className="text-4xl text-red-500 font-bold mb-10">
        Power of Science
      </h1>
      <Carousel items={images} />
    </section>
  </>
);

export default LandingPage;
