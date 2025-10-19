import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black-600 mb-2">{statsData.value}</div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 ">Take charge of your finances with ease</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6 bg-yellow-50">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 ">The way it operates</h2>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 ">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

            ))}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 ">Our users’ thoughts</h2>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 ">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-yellow-50">
                <CardContent className=" pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={20}
                      className="rounded-full  hover:scale-160 transform transition-transform duration-300"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className=" text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold  mb-4 ">Ready to steer your finances in the right direction?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Be part of a growing community managing their finances the smart way with BUDGETRA
          </p>
          <Link href="/dashboard">
         <Button size="lg" className="text-white animate-bounce">
            start Free trial
          </Button>
          </Link>
        </div>
      </section>

    </div>

  );


}
