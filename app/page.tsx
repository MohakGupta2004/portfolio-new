'use client';
import { ProfileCard } from "../components/ProfileCard";
import { LinksSection } from "../components/LinksSection";
import { ProjectsCard } from "../components/ProjectsCard";
import { ToolStackVertical } from "../components/ToolStackVertical";
import { GalaxySection } from "../components/GalaxySection";
import Link from "next/link";
import { ContentCards } from "@/components/ContentCards";
import { TechStackCard } from "@/components/TechStackCard";
import { DraggableWrapper } from "@/components/DraggableWrapper";
import { AchievementCard } from "@/components/AchivementCard";
import LiquidEther from "@/components/LiquidEther";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 z-0">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      </div>
      {/* Foreground content */}
      <div className="relative z-10 flex justify-center pt-15 md:pt-24 px-4 sm:px-6 h-screen overflow-auto pointer-events-none">
        <div className="w-full max-w-5xl pointer-events-auto">

          {/* Unified grid */}
          <div className="grid md:grid-cols-12 gap-6 items-start">

            {/* Left Column: TechStack Card (Desktop only) */}
            <div className="hidden md:flex flex-col col-span-3 items-center">
              <DraggableWrapper>
                <TechStackCard />
              </DraggableWrapper>
            </div>

            {/* Middle Column: Main Content */}
            <div className="flex flex-col col-span-12 md:col-span-7 lg:col-span-7 gap-6">
              <DraggableWrapper>
                <ProfileCard />
              </DraggableWrapper>

              {/* Mobile-only Projects and Links */}
              <div className="flex flex-col gap-6 md:hidden">
                <Link href="/projects">
                  <ProjectsCard />
                </Link>
                <DraggableWrapper>
                  <LinksSection />
                </DraggableWrapper>
              </div>

              {/* ToolStack and ContentCards */}
              <div className="flex w-full gap-4 items-start">
                <div className="flex-grow-0 max-w-xs">
                  <DraggableWrapper>
                    <ToolStackVertical />
                  </DraggableWrapper>
                </div>
                <div className="flex-1 flex flex-col gap-4 max-h-[calc(100vh-12rem)]">
                  {/* ContentCards (shrinkable) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 hide-scrollbar">
                    <DraggableWrapper>
                      <ContentCards index={0} />
                    </DraggableWrapper>
                    <DraggableWrapper>
                      <ContentCards index={1} />
                    </DraggableWrapper>
                  </div>

                  {/* Achievement Card (always visible at bottom) */}
                  <div className="flex-shrink-0 pb-6 md:pb-0">
                    <DraggableWrapper>
                      <AchievementCard />
                    </DraggableWrapper>
                  </div>

                </div>


              </div>
            </div>

            {/* Right Column: Links, Galaxy, Projects (Desktop only) */}
            <div className="hidden md:flex flex-col col-span-2 lg:col-span-2 gap-8 items-center">
              <div className="w-full sm:max-w-lg">
                <DraggableWrapper>
                  <LinksSection />
                </DraggableWrapper>
              </div>
              <div className="w-full max-w-xs">
                <DraggableWrapper>
                  <GalaxySection />
                </DraggableWrapper>
              </div>
              <div className="w-full max-w-xs">
                <Link href="/projects">
                  <ProjectsCard />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
