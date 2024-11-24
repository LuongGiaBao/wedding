"use client";

import { BannerComponent } from "@/components/BannerComponent";
import { HeaderComponent } from "@/components/HeaderComponent";
import { InfoComponent } from "@/components/InfoComponent";
import { NavbarComponent } from "@/components/NavbarComponent";
import ScheduleComponent from "@/components/ScheduleComponent";
import SnowfallComponent from "@/components/Snowfall Component";

export default function Home() {
  return (
    <div className="relative">
      <HeaderComponent />
      <NavbarComponent />
      <BannerComponent />
      <ScheduleComponent />
      <InfoComponent />
      <SnowfallComponent />
    </div>
  );
}
