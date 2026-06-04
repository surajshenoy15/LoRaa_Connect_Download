import { PlayLogo, AppleLogo } from "./Logos";

// store = "play" | "appstore"
export default function StoreBadge({ store, url }) {
  const isPlay = store === "play";
  const topLine = isPlay ? "GET IT ON" : "Download on the";
  const bottomLine = isPlay ? "Google Play" : "App Store";

  const Inner = (
    <>
      <div className="flex h-7 w-7 items-center justify-center">
        {isPlay ? <PlayLogo size={22} /> : <AppleLogo size={22} color="#FFFFFF" />}
      </div>
      <div className="text-left leading-none">
        <p className="text-[9px] font-medium uppercase tracking-wide text-white/70">{topLine}</p>
        <p className="font-display text-[15px] font-bold text-white">{bottomLine}</p>
      </div>
    </>
  );

  if (!url) {
    return (
      <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-bgDeep px-4 py-2.5 opacity-90">
        {Inner}
        <span className="absolute -top-2 right-2 rounded-full border border-amber/40 bg-amberSoft px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-amber">
          Coming soon
        </span>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-bgDeep px-4 py-2.5 transition active:scale-[0.98] hover:bg-navy"
    >
      {Inner}
    </a>
  );
}
