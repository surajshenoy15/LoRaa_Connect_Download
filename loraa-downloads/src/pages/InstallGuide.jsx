import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Download,
  ExternalLink,
  HelpCircle,
  PackageOpen,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { LINKS } from "../config";
import { AndroidLogo, AppleLogo } from "../components/Logos";

const androidSteps = [
  {
    icon: Download,
    title: "Download the APK",
    body: "Tap the download button and wait for the LoRaa Connect APK to save in your Downloads folder.",
  },
  {
    icon: ShieldCheck,
    title: "Verify the APK",
    body: "Optionally open the VirusTotal scan report to verify the APK credibility before installing.",
  },
  {
    icon: PackageOpen,
    title: "Open the downloaded file",
    body: "Open the APK from your notification panel, browser downloads, or the Files app.",
  },
  {
    icon: Settings,
    title: "Allow installation permission",
    body: "If Android blocks the installation, open Settings and enable 'Allow from this source' for your browser or Files app.",
  },
  {
    icon: ShieldCheck,
    title: "Confirm and install",
    body: "Return to the installer and tap Install. Play Protect may scan the app before continuing.",
  },
  {
    icon: CheckCircle2,
    title: "Open LoRaa Connect",
    body: "Once installation is complete, tap Open and sign in using your registered account.",
  },
];

const iosSteps = [
  {
    icon: AppleLogo,
    title: "Install TestFlight",
    body: "Download Apple's free TestFlight application from the App Store.",
    isApple: true,
  },
  {
    icon: ExternalLink,
    title: "Open the invitation link",
    body: "Tap the TestFlight invitation button to open the LoRaa Connect beta.",
  },
  {
    icon: Download,
    title: "Accept and install",
    body: "Inside TestFlight, tap Accept and then Install to add the application to your device.",
  },
  {
    icon: CheckCircle2,
    title: "Open LoRaa Connect",
    body: "Launch the application from your home screen and sign in to continue.",
  },
];

function StepCard({ index, step, isLast }) {
  const Icon = step.icon;

  return (
    <div className="relative flex min-w-0 gap-3 sm:gap-4">
      <div className="flex shrink-0 flex-col items-center">
        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-[12px] font-extrabold text-white shadow-sm sm:h-10 sm:w-10 sm:text-[13px]">
          {index}
        </div>

        {!isLast && <div className="mt-2 h-full min-h-8 w-px bg-bordr" />}
      </div>

      <div className={`min-w-0 flex-1 ${isLast ? "" : "pb-4 sm:pb-5"}`}>
        <div className="rounded-2xl border border-bordr bg-white p-4 shadow-soft transition hover:border-accent/25 hover:shadow-card sm:p-5">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sageLight">
              {step.isApple ? (
                <AppleLogo size={16} color="#0E1726" />
              ) : (
                <Icon size={17} className="text-navyMid" strokeWidth={2.2} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-display text-[13px] font-extrabold text-ink sm:text-[14px]">
                {step.title}
              </p>

              <p className="mt-1.5 text-[11px] leading-5 text-muted sm:text-[12px]">
                {step.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformGuide({
  title,
  subtitle,
  icon,
  steps,
  action,
  note,
  noteType = "default",
}) {
  return (
    <article className="min-w-0 rounded-[26px] border border-bordr bg-white p-4 shadow-card sm:p-6">
      <div className="flex flex-col gap-4 border-b border-bordr pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          {icon}

          <div className="min-w-0">
            <h2 className="font-display text-[18px] font-extrabold text-ink sm:text-[20px]">
              {title}
            </h2>

            <p className="mt-0.5 text-[11px] font-semibold text-muted">
              {subtitle}
            </p>
          </div>
        </div>

        {action}
      </div>

      <div className="mt-6">
        {steps.map((step, index) => (
          <StepCard
            key={`${title}-${step.title}`}
            index={index + 1}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      <div
        className={`mt-6 flex items-start gap-3 rounded-2xl border px-4 py-3.5 ${
          noteType === "warning"
            ? "border-amber/30 bg-amberSoft"
            : "border-bordr bg-sageLight/50"
        }`}
      >
        {noteType === "warning" ? (
          <AlertTriangle
            size={16}
            className="mt-0.5 shrink-0 text-amber"
            strokeWidth={2.3}
          />
        ) : (
          <Smartphone
            size={16}
            className="mt-0.5 shrink-0 text-navyMid"
            strokeWidth={2.2}
          />
        )}

        <p className="text-[11px] leading-5 text-ink/75 sm:text-[11.5px]">
          {note}
        </p>
      </div>
    </article>
  );
}

export default function InstallGuide() {
  const hasVirusTotalUrl =
    LINKS.virusTotalUrl && LINKS.virusTotalUrl.trim() !== "";

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-bgDeep">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />

        <div className="pointer-events-none absolute -left-32 top-16 hidden h-72 w-72 rounded-full bg-sky/10 blur-3xl sm:block" />
        <div className="pointer-events-none absolute -right-32 bottom-0 hidden h-80 w-80 rounded-full bg-accent/20 blur-3xl sm:block" />

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
          {/* Hero content */}
          <div className="min-w-0 text-center lg:text-left">
            <span className="animate-floatUp inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-sky backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-[11px]">
              <Sparkles size={13} strokeWidth={2.4} />
              Quick installation guide
            </span>

            <h1
              className="animate-floatUp mx-auto mt-5 max-w-2xl font-display text-[clamp(2rem,10vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-white lg:mx-0"
              style={{ animationDelay: "80ms" }}
            >
              Install LoRaa Connect
              <span className="block text-sky">in a few simple steps.</span>
            </h1>

            <p
              className="animate-floatUp mx-auto mt-4 max-w-xl text-[13px] leading-6 text-white/65 sm:mt-5 sm:text-[15px] sm:leading-7 lg:mx-0"
              style={{ animationDelay: "150ms" }}
            >
              Choose your device and follow the instructions to install LoRaa
              Connect safely on Android or iOS.
            </p>

            <div
              className="animate-floatUp mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start"
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

              {hasVirusTotalUrl && (
                <a
                  href={LINKS.virusTotalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[13px] font-bold text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98] sm:w-auto sm:px-5 sm:py-3.5 sm:text-[14px]"
                >
                  <ShieldCheck size={16} strokeWidth={2.4} />
                  Verify APK
                  <ExternalLink size={14} strokeWidth={2.4} />
                </a>
              )}

              <a
                href={LINKS.testFlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[13px] font-bold text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98] sm:w-auto sm:px-5 sm:py-3.5 sm:text-[14px]"
              >
                <AppleLogo size={16} color="#FFFFFF" />
                Join TestFlight
              </a>
            </div>

            <div
              className="animate-floatUp mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-semibold text-white/55 sm:mt-7 sm:max-w-none sm:text-[11px] lg:mx-0 lg:justify-start"
              style={{ animationDelay: "280ms" }}
            >
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 size={13} className="text-sky" />
                Simple setup
              </span>

              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <ShieldCheck size={13} className="text-sky" />
                Official download
              </span>

              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <Smartphone size={13} className="text-sky" />
                Android and iOS
              </span>
            </div>
          </div>

          {/* Hero preview panel */}
          <div
            className="animate-floatUp relative mx-auto min-w-0 w-full max-w-lg"
            style={{ animationDelay: "180ms" }}
          >
            <div className="absolute -inset-2 rounded-[28px] bg-white/5 blur-xl sm:-inset-4 sm:rounded-[32px] sm:blur-2xl" />

            <div className="relative rounded-[22px] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-xl sm:rounded-[28px] sm:p-4">
              <div className="rounded-[18px] bg-white p-4 sm:rounded-[22px] sm:p-6">
                <div className="border-b border-bordr pb-5">
                  <p className="font-display text-[15px] font-extrabold text-ink sm:text-[16px]">
                    Select your device
                  </p>

                  <p className="mt-1 text-[10px] font-semibold text-muted sm:text-[11px]">
                    Installation steps differ by platform
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-bordr bg-sageLight/40 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sageLight">
                      <AndroidLogo size={23} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[13px] font-extrabold text-ink">
                        Android APK
                      </p>

                      <p className="mt-0.5 text-[10px] font-semibold text-muted">
                        Direct installation
                      </p>
                    </div>

                    <span className="rounded-lg bg-white px-2 py-1 text-[9px] font-extrabold text-success">
                      6 steps
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-bordr bg-white p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy">
                      <AppleLogo size={22} color="#FFFFFF" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[13px] font-extrabold text-ink">
                        iOS TestFlight
                      </p>

                      <p className="mt-0.5 text-[10px] font-semibold text-muted">
                        Beta installation
                      </p>
                    </div>

                    <span className="rounded-lg bg-sageLight px-2 py-1 text-[9px] font-extrabold text-accent">
                      4 steps
                    </span>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-bordr bg-sageLight/40 p-4">
                    <ShieldCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-navyMid"
                      strokeWidth={2.2}
                    />

                    <p className="text-[10px] leading-5 text-muted sm:text-[11px]">
                      Always install LoRaa Connect only from this official
                      website, the official VirusTotal scan report, or the
                      official TestFlight invitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
            Step-by-step setup
          </span>

          <h2 className="mt-3 font-display text-[27px] font-extrabold tracking-tight text-ink sm:text-[34px]">
            Choose your installation method
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-muted sm:text-[14px]">
            Follow the instructions for your device to complete the installation
            safely.
          </p>
        </div>

        <div className="mt-9 grid min-w-0 gap-6 lg:grid-cols-2">
          <PlatformGuide
            title="Android"
            subtitle="Direct APK installation"
            icon={
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sageLight">
                <AndroidLogo size={25} />
              </div>
            }
            steps={androidSteps}
            action={
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <a
                  href={LINKS.apkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-[12px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98] sm:w-auto"
                >
                  <Download size={15} strokeWidth={2.4} />
                  Download APK
                </a>

                {hasVirusTotalUrl && (
                  <a
                    href={LINKS.virusTotalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-bordr bg-white px-4 py-2.5 text-[12px] font-extrabold text-navy transition hover:border-accent/30 hover:shadow-card sm:w-auto"
                  >
                    <ShieldCheck size={15} strokeWidth={2.4} />
                    VirusTotal
                    <ExternalLink size={13} strokeWidth={2.4} />
                  </a>
                )}
              </div>
            }
            noteType="warning"
            note="Only install the APK from this official page. You can also verify the APK using the VirusTotal scan report before installing."
          />

          <PlatformGuide
            title="iOS"
            subtitle="TestFlight beta installation"
            icon={
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy">
                <AppleLogo size={24} color="#FFFFFF" />
              </div>
            }
            steps={iosSteps}
            action={
              <a
                href={LINKS.testFlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-[12px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98] sm:w-auto"
              >
                <AppleLogo size={14} color="#FFFFFF" />
                Open TestFlight
              </a>
            }
            note="TestFlight beta builds may expire after 90 days. Use the same invitation link to install the latest available version."
          />
        </div>
      </section>

      {/* Help CTA */}
      <section className="border-y border-bordr bg-sageLight/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="relative overflow-hidden rounded-[26px] bg-bgDeep px-5 py-8 sm:px-8 sm:py-10">
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="font-display text-[22px] font-extrabold text-white sm:text-[27px]">
                  Having trouble installing the app?
                </p>

                <p className="mt-2 max-w-xl text-[12px] leading-6 text-white/60 sm:text-[13px]">
                  Contact the LoRaa Connect support team for help with
                  downloads, permissions, TestFlight, or account access.
                </p>
              </div>

              <Link
                to="/support"
                className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-[13px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98] sm:w-auto"
              >
                <HelpCircle size={16} strokeWidth={2.4} />
                Contact support
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads link */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-bordr bg-white px-5 py-3 text-[13px] font-extrabold text-navy transition hover:border-accent/30 hover:shadow-card"
          >
            Go to downloads
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="transition group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}