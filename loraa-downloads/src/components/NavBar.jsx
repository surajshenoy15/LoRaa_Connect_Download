import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  BookOpen,
  Download,
  LifeBuoy,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import { BrandMark, BrandWord } from "./Brand";

const tabs = [
  {
    to: "/",
    label: "Downloads",
    icon: Download,
    end: true,
  },
  {
    to: "/install",
    label: "Install Guide",
    icon: BookOpen,
  },
  {
    to: "/support",
    label: "Support",
    icon: LifeBuoy,
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bgDeep/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="LoRaa Connect home"
          >
            <div className="transition group-hover:scale-[1.03]">
              <BrandMark size={40} dark />
            </div>

            <div className="flex flex-col">
              <BrandWord dark />

              {/* <span className="mt-0.5 hidden text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 sm:block">
                Student activity tracker
              </span> */}
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5 md:flex">
            {tabs.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `group flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-[12px] font-bold transition ${
                    isActive
                      ? "bg-white text-bgDeep shadow-sm"
                      : "text-white/55 hover:bg-white/8 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={15}
                      strokeWidth={2.3}
                      className={
                        isActive
                          ? "text-accent"
                          : "text-white/45 transition group-hover:text-white"
                      }
                    />

                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-[12px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98]"
            >
              <Download size={15} strokeWidth={2.4} />

              Download App

              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={19} strokeWidth={2.4} />
            ) : (
              <Menu size={19} strokeWidth={2.4} />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[360px] pb-4 opacity-100"
              : "max-h-0 pb-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <div className="space-y-1">
              {tabs.map(({ to, label, icon: Icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3.5 py-3 text-[13px] font-bold transition ${
                      isActive
                        ? "bg-white text-bgDeep"
                        : "text-white/60 hover:bg-white/8 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          isActive ? "bg-sageLight" : "bg-white/5"
                        }`}
                      >
                        <Icon
                          size={16}
                          strokeWidth={2.3}
                          className={
                            isActive ? "text-accent" : "text-white/60"
                          }
                        />
                      </div>

                      <span className="flex-1">{label}</span>

                      <ArrowRight
                        size={15}
                        strokeWidth={2.4}
                        className={isActive ? "text-accent" : "text-white/30"}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <Link
              to="/"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-[13px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98]"
            >
              <Download size={16} strokeWidth={2.4} />
              Download LoRaa Connect
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}