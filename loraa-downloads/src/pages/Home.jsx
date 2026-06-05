import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Download,
  HelpCircle,
  Info,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from "lucide-react";

import { LINKS } from "../config";
import { AndroidLogo, AppleLogo } from "../components/Logos";
import StoreBadge from "../components/StoreBadge";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "Secure activity tracking",
  },
  {
    icon: BadgeCheck,
    label: "Verified certificates",
  },
  {
    icon: Sparkles,
    label: "Built by Vikasana",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-bgDeep">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-24">
          {/* Hero content */}
          <div className="text-center lg:text-left">
            <span className="animate-floatUp inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-bold text-sky backdrop-blur-sm">
              <Sparkles size={13} strokeWidth={2.4} />
              Student activity tracker
            </span>

            <h1
              className="animate-floatUp mt-5 font-display text-[38px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[52px] lg:text-[60px]"
              style={{ animationDelay: "80ms" }}
            >
              Your activities.
              <span className="block text-sky">Verified and rewarded.</span>
            </h1>

            <p
              className="animate-floatUp mx-auto mt-5 max-w-xl text-[14px] leading-7 text-white/65 sm:text-[16px] lg:mx-0"
              style={{ animationDelay: "150ms" }}
            >
              Download LoRaa Connect to track student activities, submit
              verified participation, earn activity points, and access your
              certificates in one place.
            </p>

            <div
              className="animate-floatUp mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
              style={{ animationDelay: "220ms" }}
            >
              <a
  href={LINKS.apkUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-[14px] font-extrabold text-white shadow-lg shadow-black/10 transition hover:bg-navyMid active:scale-[0.98] sm:w-auto"
>
  <Download size={18} strokeWidth={2.5} />
  Download Android APK
  <ArrowRight
    size={16}
    strokeWidth={2.5}
    className="transition group-hover:translate-x-0.5"
  />
</a>

              <Link
                to="/install"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3.5 text-[14px] font-bold text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98] sm:w-auto"
              >
                <BookOpen size={17} strokeWidth={2.3} />
                Installation guide
              </Link>
            </div>

            <div
              className="animate-floatUp mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold text-white/55 lg:justify-start"
              style={{ animationDelay: "280ms" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-sky" />
                Android APK available
              </span>

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-sky" />
                iOS TestFlight beta
              </span>

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-sky" />
                Student-friendly setup
              </span>
            </div>
          </div>

          {/* Hero download panel */}
          <div
            className="animate-floatUp relative mx-auto w-full max-w-md lg:max-w-none"
            style={{ animationDelay: "180ms" }}
          >
            <div className="absolute -inset-4 rounded-[32px] bg-white/5 blur-2xl" />

            <div className="relative rounded-[28px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
              <div className="rounded-[22px] bg-white p-5 sm:p-6">
                <div className="flex items-center gap-3 border-b border-bordr pb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sageLight">
                    <Smartphone
                      size={21}
                      className="text-navyMid"
                      strokeWidth={2.3}
                    />
                  </div>

                  <div>
                    <p className="font-display text-[16px] font-extrabold text-ink">
                      Get LoRaa Connect
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-muted">
                      Choose your device to continue
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {/* Android */}
                  <div className="rounded-2xl border border-bordr bg-white p-4 transition hover:border-accent/30 hover:shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sageLight">
                        <AndroidLogo size={23} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-display text-[14px] font-extrabold text-ink">
                            Android
                          </p>

                          <span className="inline-flex items-center gap-1 rounded-md bg-sageLight px-1.5 py-0.5 text-[9px] font-extrabold text-success">
                            <CheckCircle2 size={9} strokeWidth={2.5} />
                            Available
                          </span>
                        </div>

                        <p className="mt-0.5 truncate text-[10px] font-semibold text-muted">
                          {LINKS.apkVersion} · {LINKS.apkSize} ·{" "}
                          {LINKS.androidMin}
                        </p>
                      </div>

                      <a
  href={LINKS.apkUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download LoRaa Connect Android APK"
  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white transition hover:bg-navyMid active:scale-95"
>
  <Download size={17} strokeWidth={2.5} />
</a>
                    </div>
                  </div>

                  {/* iOS */}
                  <div className="rounded-2xl border border-bordr bg-white p-4 transition hover:border-navy/20 hover:shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy">
                        <AppleLogo size={22} color="#FFFFFF" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-display text-[14px] font-extrabold text-ink">
                            iOS
                          </p>

                          <span className="rounded-md bg-sageLight px-1.5 py-0.5 text-[9px] font-extrabold text-accent">
                            Beta
                          </span>
                        </div>

                        <p className="mt-0.5 truncate text-[10px] font-semibold text-muted">
                          TestFlight invite · {LINKS.iosMin}
                        </p>
                      </div>

                      <a
                        href={LINKS.testFlightUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Join LoRaa Connect iOS TestFlight beta"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white transition hover:bg-navyMid active:scale-95"
                      >
                        <ArrowRight size={17} strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <StoreBadge store="play" url={LINKS.playStoreUrl} />
                  <StoreBadge store="appstore" url={LINKS.appStoreUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main download section */}
      <section className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
            Download options
          </span>

          <h2 className="mt-3 font-display text-[27px] font-extrabold tracking-tight text-ink sm:text-[34px]">
            Install LoRaa Connect on your device
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-muted sm:text-[14px]">
            Select your platform and follow the installation instructions. The
            Android APK can be installed directly, while iOS users can join
            through TestFlight.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {/* Android card */}
          <article className="group relative overflow-hidden rounded-[26px] border border-bordr bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-accent/25 sm:p-6">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sageLight opacity-80" />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sageLight">
                  <AndroidLogo size={28} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-[19px] font-extrabold text-ink">
                      Android APK
                    </h3>

                    <span className="inline-flex items-center gap-1 rounded-lg bg-sageLight px-2 py-1 text-[10px] font-extrabold text-success">
                      <CheckCircle2 size={11} strokeWidth={2.4} />
                      Available now
                    </span>
                  </div>

                  <p className="mt-1 text-[12px] leading-5 text-muted">
                    Download the latest APK and install it directly on your
                    Android phone.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 divide-x divide-bordr rounded-2xl border border-bordr bg-sageLight/40 px-2 py-3 text-center">
                <div className="px-2">
                  <p className="text-[10px] font-semibold text-muted">Version</p>
                  <p className="mt-1 text-[11px] font-extrabold text-ink">
                    {LINKS.apkVersion}
                  </p>
                </div>

                <div className="px-2">
                  <p className="text-[10px] font-semibold text-muted">File size</p>
                  <p className="mt-1 text-[11px] font-extrabold text-ink">
                    {LINKS.apkSize}
                  </p>
                </div>

                <div className="px-2">
                  <p className="text-[10px] font-semibold text-muted">
                    Requirement
                  </p>
                  <p className="mt-1 text-[11px] font-extrabold text-ink">
                    {LINKS.androidMin}
                  </p>
                </div>
              </div>

              <a
                href={LINKS.apkUrl}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-[14px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98]"
              >
                <Download size={17} strokeWidth={2.5} />
                Download Android APK
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </article>

          {/* iOS card */}
          <article className="group relative overflow-hidden rounded-[26px] border border-bordr bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-navy/20 sm:p-6">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-navy/5" />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy">
                  <AppleLogo size={28} color="#FFFFFF" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-[19px] font-extrabold text-ink">
                      iOS TestFlight
                    </h3>

                    <span className="rounded-lg bg-sageLight px-2 py-1 text-[10px] font-extrabold text-accent">
                      Beta access
                    </span>
                  </div>

                  <p className="mt-1 text-[12px] leading-5 text-muted">
                    Join the iOS beta using Apple&apos;s TestFlight application.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-bordr bg-sageLight/40 px-4 py-3">
                <div className="flex items-start gap-3">
                  <Info
                    size={16}
                    className="mt-0.5 shrink-0 text-navyMid"
                    strokeWidth={2.2}
                  />
                  <p className="text-[11px] leading-5 text-muted">
                    Install the TestFlight app from Apple first, then open the
                    LoRaa Connect invitation link.
                  </p>
                </div>
              </div>

              <a
                href={LINKS.testFlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3.5 text-[14px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98]"
              >
                <AppleLogo size={16} color="#FFFFFF" />
                Join via TestFlight
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Help section */}
      <section className="border-y border-bordr bg-sageLight/40">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/install"
              className="group flex items-center gap-4 rounded-[22px] border border-bordr bg-white p-5 transition hover:border-accent/30 hover:shadow-card sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sageLight">
                <BookOpen
                  size={21}
                  className="text-navyMid"
                  strokeWidth={2.2}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-display text-[15px] font-extrabold text-ink">
                  Installation guide
                </p>
                <p className="mt-1 text-[11px] leading-5 text-muted">
                  Follow the step-by-step Android and iOS installation process.
                </p>
              </div>

              <ArrowRight
                size={17}
                className="shrink-0 text-navyMid transition group-hover:translate-x-0.5"
                strokeWidth={2.4}
              />
            </Link>

            <Link
              to="/support"
              className="group flex items-center gap-4 rounded-[22px] border border-bordr bg-white p-5 transition hover:border-accent/30 hover:shadow-card sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sageLight">
                <HelpCircle
                  size={21}
                  className="text-navyMid"
                  strokeWidth={2.2}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-display text-[15px] font-extrabold text-ink">
                  Need help?
                </p>
                <p className="mt-1 text-[11px] leading-5 text-muted">
                  Find answers for installation, login, submissions, and more.
                </p>
              </div>

              <ArrowRight
                size={17}
                className="shrink-0 text-navyMid transition group-hover:translate-x-0.5"
                strokeWidth={2.4}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 rounded-[22px] border border-bordr bg-white px-5 py-5 sm:flex-row sm:gap-0">
          {trustItems.map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 sm:flex-1"
            >
              <Icon size={14} className="text-navyMid" strokeWidth={2.3} />
              <span className="text-[11px] font-bold text-muted">{label}</span>

              {index < trustItems.length - 1 && (
                <span className="ml-4 hidden h-4 w-px bg-bordr sm:block" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}