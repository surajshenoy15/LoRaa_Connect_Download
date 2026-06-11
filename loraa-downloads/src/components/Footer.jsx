import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Download,
  LifeBuoy,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { BRAND, SUPPORT } from "../config";
import { BrandMark, BrandWord } from "./Brand";

const footerLinks = [
  {
    to: "/",
    label: "Downloads",
    icon: Download,
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-bgDeep">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute -left-32 bottom-0 hidden h-72 w-72 rounded-full bg-sky/10 blur-3xl sm:block" />
      <div className="pointer-events-none absolute -right-32 top-0 hidden h-72 w-72 rounded-full bg-accent/15 blur-3xl sm:block" />

      <div className="relative mx-auto max-w-6xl px-4 pb-6 pt-12 sm:px-6 sm:pb-7 sm:pt-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-14">
          {/* Brand */}
          <div className="min-w-0">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="LoRaa Connect home"
            >
              <div className="transition group-hover:scale-[1.03]">
                <BrandMark size={42} dark />
              </div>

              <div className="flex flex-col">
                <BrandWord dark />

                {/* <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Student activity tracker
                </span> */}
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-[12px] leading-6 text-white/55 sm:text-[13px]">
              Track activities, earn verified points, and access certificates
              through LoRaa Connect.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <ShieldCheck
                size={14}
                className="shrink-0 text-sky"
                strokeWidth={2.3}
              />

              <span className="text-[11px] text-white/50">
                Powered by{" "}
                <span className="font-extrabold text-white/80">
                  {BRAND.poweredBy}
                </span>
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">
              Quick links
            </p>

            <ul className="mt-4 space-y-2">
              {footerLinks.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex w-fit items-center gap-2 rounded-lg py-1.5 text-[12px] font-semibold text-white/55 transition hover:text-white"
                  >
                    <Icon
                      size={14}
                      strokeWidth={2.2}
                      className="text-white/35 transition group-hover:text-sky"
                    />

                    <span>{label}</span>

                    <ArrowRight
                      size={13}
                      strokeWidth={2.4}
                      className="-translate-x-1 text-white/20 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">
              Contact support
            </p>

            <a
              href={`mailto:${SUPPORT.email}` }
              className="group mt-4 flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Mail
                  size={17}
                  className="text-sky"
                  strokeWidth={2.2}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold text-white/35">
                  Email us
                </p>

                <p className="mt-0.5 break-all text-[11px] font-bold text-white/75 sm:text-[12px]">
                  {SUPPORT.email}
                </p>
              </div>

              <ArrowRight
                size={15}
                className="shrink-0 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-white"
                strokeWidth={2.4}
              />
            </a>

            <div className="mt-4 flex items-start gap-2">
              <Sparkles
                size={13}
                className="mt-0.5 shrink-0 text-sky"
                strokeWidth={2.2}
              />

              <p className="text-[11px] leading-5 text-white/40">
                Official support for installation, account access, submissions,
                and certificates.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] leading-5 text-white/35 sm:text-[11px]">
            © {new Date().getFullYear()} LoRaa Ventures. All rights reserved.
          </p>

          <p className="text-[10px] leading-5 text-white/35 sm:text-[11px]">
            {BRAND.name} · {BRAND.by}
          </p>
        </div>
      </div>
    </footer>
  );
}