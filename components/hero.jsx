"use client";
import React from 'react';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';


const HeroSection = () => {

    const imageRef=useRef();

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll= () => {
                const scrollPosition= window.scrollY;
                const scrollThreshold=100;

                if(scrollPosition>scrollThreshold){
                    imageElement.classList.add("scrolled"); 
                }else{
                     imageElement.classList.remove("scrolled"); 
                }
        };

        window.addEventListener("scroll",handleScroll)

        return ()=>window.removeEventListener("scroll",handleScroll);
    },[]);



  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl text-yellow-600 md:text-8xl lg:text-[96px] pb-6 font-extrabold tracking-tighter">Plan with confidence, <br /> save with purpose</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            
            Budgetra is a financial tracking solution designed to help users control expenses,
             plan budgets, and optimize their financial health effortlessly.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                <Button size="lg" className="px-8">
                    Get Started
                </Button>
                </Link>
                <Link href="" alt="tutorial comming soon!!!">
                <Button size="lg" variant="outline" className="px-8">
                    Watch Demo (Coming Soon!)
                </Button>
                </Link>
            </div>
            <div className="hero-image-wrapper">
                <div ref={imageRef} className="hero-image">
                    <Image
                    src="/banner_2.jpg"
                    width={1180}
                    height={620}
                    alt="Dashboard preview"
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                    />

                </div>
            </div>
        </div>
      
    </div>
  )
};

export default HeroSection;
