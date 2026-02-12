"use client";

import Script from "next/script";

export function WaitlistForm() {
  return (
    <>
      <div className="relative">
        <iframe
          data-tally-src="https://tally.so/embed/b5xvg0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="266"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Waitlist form"
        />
        {/* Overlay to hide Tally branding in bottom-right */}
        <div
          className="absolute bottom-0 right-0 h-8 w-16 bg-hero-bg"
          aria-hidden
        />
      </div>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-expect-error Tally is loaded via external script
          if (typeof Tally !== "undefined") Tally.loadEmbeds();
        }}
      />
    </>
  );
}
