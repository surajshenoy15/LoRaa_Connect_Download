import { BRAND } from "../config";
import loraaConnectLogo from "../assets/app-icon.png";

export function BrandMark({ size = 40 }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl"
      style={{ width: size, height: size }}
    >
      <img
        src={loraaConnectLogo}
        alt="LoRaa Connect logo"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function BrandWord({ dark = true }) {
  return (
    <div className="min-w-0 leading-tight">
      <p
        className={`truncate font-display text-[15px] font-extrabold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {BRAND.name}
      </p>

      <p
        className={`truncate text-[10px] font-semibold ${
          dark ? "text-white/55" : "text-muted"
        }`}
      >
        {BRAND.by}
      </p>
    </div>
  );
}