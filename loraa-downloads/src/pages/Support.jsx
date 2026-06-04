import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import { SUPPORT } from "../config";
import { FaWhatsapp } from "react-icons/fa";

const roleIcon = (role = "") =>
  role.toLowerCase().includes("technical") ? Wrench : HelpCircle;

function digits(phone = "") {
  return phone.replace(/\D/g, "");
}

function indiaPhoneNumber(phone = "") {
  const value = digits(phone);

  if (value.startsWith("91") && value.length > 10) {
    return value;
  }

  return `91${value}`;
}

export default function Support() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      {/* Hero */}
<section className="relative overflow-hidden bg-bgDeep">
  <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />

  {/* Decorative backgrounds — hidden on very small screens */}
  <div className="pointer-events-none absolute -left-32 top-20 hidden h-72 w-72 rounded-full bg-sky/10 blur-3xl sm:block" />
  <div className="pointer-events-none absolute -right-32 bottom-0 hidden h-80 w-80 rounded-full bg-accent/20 blur-3xl sm:block" />

  <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
    {/* Hero content */}
    <div className="min-w-0 text-center lg:text-left">
      <span className="animate-floatUp inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-sky backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-[11px]">
        <Sparkles size={13} strokeWidth={2.4} className="shrink-0" />
        <span className="truncate">LoRaa Connect support</span>
      </span>

      <h1
        className="animate-floatUp mx-auto mt-5 max-w-2xl break-words font-display text-[clamp(2rem,10vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-white lg:mx-0"
        style={{ animationDelay: "80ms" }}
      >
        Help when you
        <span className="block text-sky">need it most.</span>
      </h1>

      <p
        className="animate-floatUp mx-auto mt-4 max-w-xl text-[13px] leading-6 text-white/65 sm:mt-5 sm:text-[15px] sm:leading-7 lg:mx-0"
        style={{ animationDelay: "150ms" }}
      >
        Reach the LoRaa Connect support team for installation, login, account
        access, activity submissions, certificates, and technical issues.
      </p>

      <div
        className="animate-floatUp mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start"
        style={{ animationDelay: "220ms" }}
      >
        <a
          href={`mailto:${SUPPORT.email}`}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-[13px] font-extrabold text-white shadow-lg shadow-black/10 transition hover:bg-navyMid active:scale-[0.98] sm:w-auto sm:px-5 sm:py-3.5 sm:text-[14px]"
        >
          <Mail size={17} strokeWidth={2.4} className="shrink-0" />
          Email support
          <ArrowRight
            size={16}
            strokeWidth={2.5}
            className="shrink-0 transition group-hover:translate-x-0.5"
          />
        </a>

        {SUPPORT.contacts?.[0] && (
          <a
            href={`https://wa.me/${indiaPhoneNumber(
              SUPPORT.contacts[0].phone
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[13px] font-bold text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98] sm:w-auto sm:px-5 sm:py-3.5 sm:text-[14px]"
          >
            <FaWhatsapp size={17} />
            WhatsApp us
          </a>
        )}
      </div>

      <div
        className="animate-floatUp mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-semibold text-white/55 sm:mt-7 sm:max-w-none sm:text-[11px] lg:mx-0 lg:justify-start"
        style={{ animationDelay: "280ms" }}
      >
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <BadgeCheck size={13} className="shrink-0 text-sky" />
          Official support
        </span>

        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <Clock3 size={13} className="shrink-0 text-sky" />
          Quick assistance
        </span>

        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <ShieldCheck size={13} className="shrink-0 text-sky" />
          Safe and verified
        </span>
      </div>
    </div>

    {/* Hero support panel */}
    <div
      className="animate-floatUp relative mx-auto min-w-0 w-full max-w-lg"
      style={{ animationDelay: "180ms" }}
    >
      <div className="absolute -inset-2 rounded-[28px] bg-white/5 blur-xl sm:-inset-4 sm:rounded-[32px] sm:blur-2xl" />

      <div className="relative rounded-[22px] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-xl sm:rounded-[28px] sm:p-4">
        <div className="min-w-0 rounded-[18px] bg-white p-4 sm:rounded-[22px] sm:p-6">
          <div className="flex min-w-0 items-center gap-3 border-b border-bordr pb-4 sm:pb-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sageLight sm:h-11 sm:w-11 sm:rounded-2xl">
              <HelpCircle
                size={20}
                className="text-navyMid"
                strokeWidth={2.3}
              />
            </div>

            <div className="min-w-0">
              <p className="font-display text-[14px] font-extrabold text-ink sm:text-[16px]">
                How can we help?
              </p>

              <p className="mt-0.5 text-[10px] font-semibold text-muted sm:text-[11px]">
                Choose the support option that suits you
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3 sm:mt-5">
            <a
              href={`mailto:${SUPPORT.email}`}
              className="group flex min-w-0 items-center gap-3 rounded-xl border border-bordr bg-white p-3 transition hover:border-accent/30 hover:shadow-card sm:rounded-2xl sm:p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy sm:h-11 sm:w-11">
                <Mail size={18} className="text-white" strokeWidth={2.2} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold text-muted sm:text-[12px]">
                  Email support
                </p>

                <p className="mt-0.5 break-all font-display text-[11px] font-extrabold text-ink sm:text-[13px]">
                  {SUPPORT.email}
                </p>
              </div>

              <ArrowRight
                size={16}
                className="shrink-0 text-navyMid transition group-hover:translate-x-0.5"
                strokeWidth={2.4}
              />
            </a>

            <div className="rounded-xl border border-bordr bg-sageLight/40 p-3 sm:rounded-2xl sm:p-4">
              <div className="flex items-start gap-3">
                <Clock3
                  size={16}
                  className="mt-0.5 shrink-0 text-navyMid"
                  strokeWidth={2.2}
                />

                <div className="min-w-0">
                  <p className="text-[11px] font-extrabold text-ink sm:text-[12px]">
                    Get faster assistance
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-muted sm:text-[11px]">
                    Include your registered email, college name, and a screenshot
                    of the issue when contacting support.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-bordr bg-white p-3 sm:rounded-2xl sm:p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={16}
                  className="mt-0.5 shrink-0 text-navyMid"
                  strokeWidth={2.2}
                />

                <div className="min-w-0">
                  <p className="text-[11px] font-extrabold text-ink sm:text-[12px]">
                    Protect your account
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-muted sm:text-[11px]">
                    Never share your OTP, password, or sensitive account
                    information with anyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact section */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
            Contact our team
          </span>

          <h2 className="mt-3 font-display text-[27px] font-extrabold tracking-tight text-ink sm:text-[34px]">
            Speak with the right support person
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-muted sm:text-[14px]">
            Contact the appropriate support member by phone or WhatsApp for
            faster help with your issue.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {SUPPORT.contacts.map((contact) => {
            const Icon = roleIcon(contact.role);
            const phoneNumber = indiaPhoneNumber(contact.phone);

            return (
              <article
                key={`${contact.name}-${contact.phone}`}
                className="group relative overflow-hidden rounded-[26px] border border-bordr bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-accent/25 sm:p-6"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sageLight opacity-80" />

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sageLight">
                      <Icon
                        size={25}
                        className="text-navyMid"
                        strokeWidth={2.2}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-[18px] font-extrabold text-ink">
                        {contact.name}
                      </h3>

                      <p className="mt-1 text-[11px] font-bold text-accent">
                        {contact.role}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-lg bg-sageLight px-2 py-1 text-[9px] font-extrabold text-success">
                      <BadgeCheck size={10} strokeWidth={2.5} />
                      Official
                    </span>
                  </div>

                  <div className="mt-6 rounded-2xl border border-bordr bg-sageLight/40 px-4 py-4 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-muted">
                      Phone number
                    </p>

                    <p className="mt-1.5 font-display text-[19px] font-extrabold tracking-wide text-ink">
                      {contact.phone}
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a
                      href={`tel:+${phoneNumber}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-navy px-3 py-3 text-[12px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98]"
                    >
                      <Phone size={15} strokeWidth={2.4} />
                      Call
                    </a>

                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-success/25 bg-success/10 px-3 py-3 text-[12px] font-extrabold text-success transition hover:bg-success/15 active:scale-[0.98]"
                    >
                      <FaWhatsapp size={17} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Email CTA */}
      <section className="border-y border-bordr bg-sageLight/40">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="relative overflow-hidden rounded-[26px] bg-bgDeep px-5 py-8 sm:px-8 sm:py-10">
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="font-display text-[22px] font-extrabold text-white sm:text-[27px]">
                  Prefer to explain your issue by email?
                </p>

                <p className="mt-2 max-w-xl text-[12px] leading-6 text-white/60 sm:text-[13px]">
                  Send us the details of your issue, along with screenshots and
                  your registered email address.
                </p>
              </div>

              <a
                href={`mailto:${SUPPORT.email}`}
                className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-[13px] font-extrabold text-white transition hover:bg-navyMid active:scale-[0.98] sm:w-auto"
              >
                <Mail size={16} strokeWidth={2.4} />
                Send an email
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust footer */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-3 rounded-[22px] border border-bordr bg-white px-5 py-5 text-center sm:flex-row">
          <ShieldCheck size={15} className="text-navyMid" strokeWidth={2.3} />

          <p className="text-[11px] leading-5 text-muted">
            Official LoRaa Connect support by{" "}
            <span className="font-extrabold text-navyMid">
              Vikasana Foundation
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}