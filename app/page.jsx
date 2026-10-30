
"use client";

import React, { useEffect, useRef } from "react";

const cards = [
  {
    title: "Locked In",
    body: "Focus finds its form when every distraction falls away.",
    color: "clay",
    icon: "lock",
    tilt: -5,
  },
  {
    title: "Layered Time",
    body: "Good things reveal themselves one considered layer at a time.",
    color: "forest",
    icon: "layers",
    tilt: 4,
  },
  {
    title: "Weight & Flow",
    body: "A little tension. A little movement. Everything in balance.",
    color: "ochre",
    icon: "scale",
    tilt: -3,
  },
  {
    title: "Soft Motion",
    body: "The quietest movements can leave the strongest impression.",
    color: "bone",
    icon: "motion",
    tilt: 6,
  },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap');

.settle {
  --ink: #13140f;
  --paper: #f5f4e9;
  --clay: #c2502f;
  --bone: #e9e3d6;
  --forest: #1f6f5c;
  --ochre: #d9a441;
  position: relative;
  width: 100%;
  color: var(--ink);
  background: #f5f4e9;
  font-family: 'DM Sans', sans-serif;
  overflow: clip;
}

.settle * { box-sizing: border-box; }

.settle-track {
  position: relative;
  height: 520svh;
}

.settle-stage {
  position: sticky;
  top: 0;
  height: 100svh;
  min-height: 560px;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(ellipse at 50% 40%, #fbfdf3 0%, #f0f1e5 48%, #e3e6d6 100%);
}

.settle-chrome {
  position: absolute;
  z-index: 20;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 4vw;
  color: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.settle-chrome.top { top: 0; }
.settle-chrome.bottom { bottom: 0; }

.settle-logo {
  font-family: 'Oswald', sans-serif;
  font-size: 19px;
  letter-spacing: .08em;
}

.settle-hero-title {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: min(1000px, 90vw);
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: clamp(56px, 10vw, 148px);
  font-weight: 500;
  line-height: .91;
  letter-spacing: -.035em;
  text-transform: uppercase;
  will-change: transform, opacity;
  pointer-events: none;
}

.settle-hero-title span {
  display: block;
  color: var(--clay);
}

.settle-deck {
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  width: clamp(300px, 25vw, 390px);
  aspect-ratio: 4 / 5;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  perspective: 1400px;
  will-change: transform;
}

.settle-card {
  position: absolute;
  inset: 0;
  border-radius: 5px;
  overflow: hidden;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow: 0 28px 65px rgba(27, 28, 20, .16);
  will-change: transform, opacity;
}

.settle-card.cover {
  z-index: 10;
  background: var(--ink);
  color: var(--bone);
  transform-origin: center center;
}

.settle-card.cover::before {
  content: "";
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(233, 227, 214, .23);
  pointer-events: none;
}

.cover-inner {
  height: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cover-top, .cover-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 9px;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.cover-symbol {
  align-self: center;
  width: 76px;
  height: 76px;
  border: 1px solid rgba(233, 227, 214, .42);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--ochre);
  font-family: 'Oswald', sans-serif;
  font-size: 34px;
}

.cover-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(43px, 5vw, 68px);
  line-height: .95;
  text-transform: uppercase;
}

.cover-title span {
  display: block;
  color: var(--ochre);
}

.cover-subtitle {
  margin-top: 12px;
  font-size: 11px;
  letter-spacing: .08em;
  opacity: .7;
}

.settle-card.back {
  z-index: 2;
  transform: rotateY(-180deg);
  transform-origin: center center;
}

.settle-card.back.clay { background: var(--clay); color: #fff4e9; }
.settle-card.back.forest { background: var(--forest); color: #f3eee0; }
.settle-card.back.ochre { background: var(--ochre); color: #211b10; }
.settle-card.back.bone { background: var(--bone); color: var(--ink); }

.back-inner {
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.back-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 9px;
  letter-spacing: .15em;
  text-transform: uppercase;
  opacity: .8;
}

.back-icon {
  width: 58px;
  height: 58px;
}

.back-icon svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.back-copy h2 {
  margin: 0 0 14px;
  max-width: 290px;
  font-family: 'Oswald', sans-serif;
  font-size: clamp(40px, 4.7vw, 61px);
  line-height: .96;
  font-weight: 500;
  text-transform: uppercase;
}

.back-copy p {
  max-width: 255px;
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
  opacity: .85;
}

.back-number {
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: .1em;
}

.settle-hint {
  position: absolute;
  z-index: 15;
  left: 50%;
  bottom: 85px;
  transform: translateX(-50%);
  font-size: 9px;
  letter-spacing: .2em;
  text-transform: uppercase;
  opacity: .55;
  white-space: nowrap;
}

.settle-about {
  min-height: 70svh;
  padding: clamp(90px, 14vw, 180px) 8vw;
  background: #e3e6d6;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8vw;
  align-items: start;
}

.settle-about-label {
  font-size: 10px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--clay);
}

.settle-about h2 {
  margin: 20px 0 0;
  font-family: 'Oswald', sans-serif;
  font-size: clamp(50px, 7vw, 100px);
  line-height: .94;
  font-weight: 500;
  text-transform: uppercase;
}

.settle-about h2 span { color: var(--forest); }

.settle-about-copy {
  max-width: 430px;
  padding-top: 42px;
  font-size: clamp(15px, 1.3vw, 18px);
  line-height: 1.85;
  color: #45463c;
}

.settle-about-copy p { margin: 0 0 22px; }

@media (max-width: 700px) {
  .settle-stage { min-height: 520px; }
  .settle-chrome { padding: 20px 20px; }
  .settle-deck { width: min(72vw, 340px); }
  .settle-hero-title { font-size: clamp(54px, 14vw, 92px); }
  .cover-inner, .back-inner { padding: 23px; }
  .settle-about { grid-template-columns: 1fr; gap: 24px; }
  .settle-about-copy { padding-top: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .settle-track { height: 100svh; }
}
`;

function Icon({ name }) {
  const common = {
    viewBox: "0 0 48 48",
    "aria-hidden": true,
  };

  switch (name) {
    case "lock":
      return <svg {...common}>
        <rect x="10" y="21" width="28" height="21" rx="3" />
        <path d="M16 21v-7a8 8 0 0 1 16 0v7" />
        <path d="M24 29v5" />
      </svg>;
    case "layers":
      return <svg {...common}>
        <path d="m24 5 19 10-19 10L5 15 24 5Z" />
        <path d="m5 24 19 10 19-10M5 33l19 10 19-10" />
      </svg>;
    case "scale":
      return <svg {...common}>
        <path d="M24 7v34M12 13h24M8 13l-6 13h12L8 13ZM40 13l-6 13h12l-6-13Z" />
        <path d="M15 41h18" />
      </svg>;
    default:
      return <svg {...common}>
        <path d="M7 25c8-15 17-15 25 0" />
        <path d="m27 17 5 8-9 2" />
        <path d="M8 34c8 7 19 7 29-1" />
        <path d="m32 33 5 0-1 5" />
      </svg>;
  }
}

const clamp = (v, min = 0, max = 1) =>
  Math.min(max, Math.max(min, v));

const range = (p, a, b) => clamp((p - a) / (b - a));

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export default function Settle() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const titleRef = useRef(null);
  const deckRef = useRef(null);
  const coverRef = useRef(null);
  const cardRefs = useRef([]);
  const hintRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const title = titleRef.current;
    const deck = deckRef.current;
    const cover = coverRef.current;
    const backCards = cardRefs.current;
    const hint = hintRef.current;

    if (!root || !track || !deck || !cover) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const autoplay = new URLSearchParams(window.location.search).has("card");

    let raf = 0;
    let startTime = null;
    let lastProgress = -1;

    const setProgress = (p) => {
      p = clamp(p);

      if (Math.abs(p - lastProgress) < 0.0002) return;
      lastProgress = p;

      // 1. Lift the deck and move the headline away.
      const lift = easeOutCubic(range(p, 0, 0.18));
      const deckY = 46 + (-52 * lift);

      deck.style.transform =
        `translate(-50%, calc(-50% + ${deckY}%))`;

      if (title) {
        const titleY = -120 * lift;
        title.style.transform =
          `translate(-50%, calc(-50% + ${titleY}%))`;
        title.style.opacity = String(1 - lift);
      }

      // 2. Flip the cover away and reveal the back cards.
      const flip = easeOutBack(range(p, 0.30, 0.46));
      const coverRotation = 180 * flip;

      cover.style.transform = `rotateY(${coverRotation}deg)`;

      backCards.forEach((card, index) => {
        if (!card) return;

        const stagger = index * 0.075;
        const reveal = easeOutBack(
          range(p, 0.30 + stagger, 0.46 + stagger)
        );

        const rotation = -180 + (180 * reveal);
        const tilt = Number(card.dataset.tilt || 0) * reveal;

        // Each card occupies a slightly different depth plane.
        const depth = -index * 3;

        // 3. Peel cards upward in reverse reveal order.
        const dismissStart = 0.52 + ((3 - index) * 0.105);
        const dismiss = easeOutCubic(
          range(p, dismissStart, dismissStart + 0.23)
        );

        const dismissTilt = (index % 2 === 0 ? -1 : 1) *
          (18 + index * 5) * dismiss;

        const y = -240 * dismiss;
        const opacity = 1 - dismiss;

        card.style.transform =
          `translate3d(0, ${y}%, ${depth}px) ` +
          `rotateZ(${tilt + dismissTilt}deg) ` +
          `rotateY(${rotation}deg)`;

        card.style.opacity = String(opacity);
      });

      if (hint) {
        hint.style.opacity = String(0.55 * (1 - range(p, 0.18, 0.28)));
      }
    };

    const readScroll = () => {
      const distance = track.offsetHeight - window.innerHeight;
      if (distance <= 0) return 0;

      return clamp(
        -track.getBoundingClientRect().top / distance
      );
    };

    const renderScroll = () => {
      setProgress(readScroll());
    };

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = (timestamp - startTime) / 1000;
      const sweep = 4.2;
      const hold = 0.7;
      const cycle = sweep + hold;
      const timeInCycle = elapsed % cycle;

      // Sweep through the sequence, then pause at the open deck.
      const p = timeInCycle < sweep
        ? timeInCycle / sweep
        : 1;

      setProgress(p);
      raf = requestAnimationFrame(animate);
    };

    if (reduced) {
      setProgress(0.46);
    } else if (autoplay) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      setProgress(0);
      raf = requestAnimationFrame(animate);
    } else {
      setProgress(readScroll());
      window.addEventListener("scroll", renderScroll, { passive: true });
      window.addEventListener("resize", renderScroll);
      raf = requestAnimationFrame(function loop() {
        renderScroll();
        raf = requestAnimationFrame(loop);
      });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", renderScroll);
      window.removeEventListener("resize", renderScroll);

      if (autoplay) {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };
  }, []);

  return (
    <main className="settle" ref={rootRef}>
      <style>{styles}</style>

      <section className="settle-track" ref={trackRef}>
        <div className="settle-stage" ref={stageRef}>
          <div className="settle-chrome top">
            <span className="settle-logo">Kexsio®</span>
            <span>Independent motion study</span>
            <span>01 / 04</span>
          </div>

          <h1 className="settle-hero-title" ref={titleRef}>
            Scroll, and the
            <span>deck settles</span>
            into order
          </h1>

          <div className="settle-deck" ref={deckRef}>
            {cards.map((card, index) => (
              <article
                key={card.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`settle-card back ${card.color}`}
                data-tilt={card.tilt}
                style={{ zIndex: index + 1 }}
              >
                <div className="back-inner">
                  <div className="back-meta">
                    <span>Kexsio® / Study</span>
                    <span>0{index + 1}</span>
                  </div>

                  <div className="back-icon">
                    <Icon name={card.icon} />
                  </div>

                  <div className="back-copy">
                    <h2>{card.title}</h2>
                    <p>{card.body}</p>
                  </div>

                  <div className="back-meta">
                    <span>Form follows feeling</span>
                    <span className="back-number">K—0{index + 1}</span>
                  </div>
                </div>
              </article>
            ))}

            <article className="settle-card cover" ref={coverRef}>
              <div className="cover-inner">
                <div className="cover-top">
                  <span>Kexsio®</span>
                  <span>Edition 001</span>
                </div>

                <div className="cover-symbol">K.</div>

                <div>
                  <div className="cover-title">
                    First <span>Frame</span>
                  </div>
                  <div className="cover-subtitle">Start here.</div>
                </div>

                <div className="cover-bottom">
                  <span>Scroll to unfold</span>
                  <span>2025 — ∞</span>
                </div>
              </div>
            </article>
          </div>

          <div className="settle-hint" ref={hintRef}>
            Scroll to reveal — Keep moving
          </div>

          <div className="settle-chrome bottom">
            <span>Objects in motion</span>
            <span>Design / Interaction / 001</span>
            <span>Scroll sequence</span>
          </div>
        </div>
      </section>

      <section className="settle-about">
        <div>
          <div className="settle-about-label">About the sequence / 001</div>
          <h2>
            A study in
            <br />
            <span>settling</span>
            <br />
            into place.
          </h2>
        </div>

        <div className="settle-about-copy">
          <p>
            A deck is more than a collection of cards. It is a system
            of layers, held together by balance, tension and time.
          </p>
          <p>
            This sequence explores the moment when separate pieces
            become a considered whole. Scroll to open the deck, then
            watch each layer find its own way out.
          </p>
          <p>
            One movement at a time. Every detail has a place.
          </p>
        </div>
      </section>
    </main>
  );
}

