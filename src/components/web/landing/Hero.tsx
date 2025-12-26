import { CalendarIcon, Mic2Icon } from "lucide-react";

import BadgeComponent from "../BadgeComponent";
import CallToActionButtons from "@/components/shared/CTAButtons";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-28 md:pt-5 overflow-hidden relative min-h-screen flex items-center">
      {/* GRID BG  */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      {/* <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl animate-blob-delay" /> */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-float-around animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl animate-float-around-reverse animate-pulse delay-1000" />
      {/* Main Content */}
      <div className="w-full px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/*Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                {/* Badge */}
                <BadgeComponent badgeText=" AI-Powered Dental Assistant" />
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                  <span className="capitalize bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Your Dental
                  </span>
                  <br />
                  <span className="capitalize text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                    questions
                  </span>
                  <br />
                  <span className="capitalize bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 ">
                    answered instantly
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Chat with our AI dental assistant for instant advice, book
                  smart appointments, and get personalized care recommendations.
                  Available 24/7.
                </p>
              </div>
              {/* CTA BUTTONS */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <CallToActionButtons
                  text="Try voice agent"
                  callToActionICon={Mic2Icon}
                  callSize="lg"
                  callClassName="w-full md:w-auto"
                />
                <CallToActionButtons
                  text="Book Appointment"
                  callToActionICon={CalendarIcon}
                  callSize="lg"
                  varieant="outline"
                  callClassName="ring-2 ring-primary/70 w-full md:w-auto"
                />
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative lg:pl-8">
              {/* Gradient ORBS */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>
              <Image
                src={"/images/hero.png"}
                alt="DentWise AI"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
