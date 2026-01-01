"use client";

import { CalendarPlus, Sparkles, ZapIcon } from "lucide-react";

import BadgeComponent from "../BadgeComponent";
import CallToActionButtons from "@/components/shared/CTAButtons";
import { Card_Content } from "@/constant";
import { ICardContentProps } from "@/types";
import Image from "next/image";
import LinkNavigation from "@/components/shared/LinkNavigation";
import React from "react";
import { useUser } from "@clerk/nextjs";

const HowItWorks = () => {
  const { isSignedIn } = useUser();
  return (
    <section
      id="how-it-works"
      className="relative py-32 px-4 max-w-7xl mx-auto outline-hidden z-10"
    >
      {/* HEADER */}
      <div className="text-center mb-20">
        <BadgeComponent
          iconClassName="text-amber-600"
          badgeText="Simple Process"
          containerClassName="mb-2"
          Icon={ZapIcon}
        />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-tight">
          <span className="capitalize bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            three simple steps to
          </span>
          <br />
          <span className="capitalize text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            better dental health
          </span>
        </h2>
        {/* Description */}
        <p className=" text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
          Our efficient approach ensures dental care is accessible, hassle-free,
          and designed around your comfort
        </p>
      </div>
      {/* Steps Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {Card_Content.map((content: ICardContentProps, Idx: number) => {
          const { icon, title, description, badgeText } = content;

          return (
            <div key={`card-title-${Idx + 1}`} className="relative group">
              <div className="relative cursor-pointer bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-xl p-8 rounded-2xl border border-border/50 group-hover:border-primary/90 transition-all duration-300 ">
                {/* Step */}
                <div className="absolute top-4 left-8 w-8 h-8 text-primary-foreground flex items-center justify-center font-bold shadow-lg bg-gradient-to-r from-primary/80 to-primary rounded-full animate-pulse delay-1000">
                  {Idx + 1}
                </div>
                {/* ICon */}
                <div className="w-20 h-20 bg-gradient-to-br rounded-xl from-priamry/20 to-primary/10 border border-primary/15 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-5">
                  <Image
                    src={icon}
                    alt={`card-icon-${Idx + 1}`}
                    width={40}
                    height={40}
                    className="w-14"
                  />
                </div>
                {/* Title And Description */}
                <h3 className="capitalize text-center text-2xl mb-4 font-bold">
                  {title}
                </h3>
                <p className="text-muted-foreground text-left leading-relaxed mb-4">
                  {description}
                </p>

                {/* Bages */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 text-xs rounded-full">
                    {badgeText.firstBadge}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 text-xs rounded-full">
                    {badgeText.secondBadge}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call To Action Buttons */}
      <div className="flex items-center justify-center mt-16">
        {isSignedIn ? (
          <LinkNavigation
            redirectPath="/"
            linkText="book an appointment"
            IconLink={CalendarPlus}
            linkClassName="w-full md:w-auto px-6 py-2 bg-primary/10 border border-primary shadow-600 text-primary rounded-lg hover:bg-primary/90 hover:text-primary-foreground transition-all duration-200 font-semibold"
          />
        ) : (
          <CallToActionButtons
            text="get started"
            callToActionICon={Sparkles}
            callClassName="w-full md:w-auto px-6 py-2 bg-gray-950/25 border border-amber-500 shadow-600 text-amber-500 rounded-lg hover:bg-gray-950/90 transition-all duration-200 font-semibold"
            iconClassName="text-amber-500"
          />
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
