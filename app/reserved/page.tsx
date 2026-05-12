'use client';

import './reserved.css';

export default function ReservedPage() {
  return (
    <div className="screen-bg">
      <div className="card-outer">
        <div className="card-inner">

          {/* Top ornament */}
          <div className="top-ornament">
            <span className="ornament-line" />
            <span className="diamond">◆</span>
            <span className="ornament-line" />
          </div>

          {/* Logo */}
          <div className="logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/loyaltysocial-wallart.png"
              alt="Loyalty Social Logo"
              className="logo-img"
            />
          </div>

          {/* Reserved text */}
          <div className="reserved-wrap">
            <p className="reserved-sub">— VIP —</p>
            <h1 className="reserved-title">Reserved</h1>
            <p className="reserved-tagline">Exclusively Reserved for Our Valued Guest</p>
          </div>

          {/* Bottom ornament */}
          <div className="bottom-ornament">
            <span className="ornament-line" />
            <span className="diamond">◆</span>
            <span className="ornament-line" />
          </div>

        </div>
      </div>

      <button className="print-btn" onClick={() => window.print()}>
        Print / Save as PDF
      </button>
    </div>
  );
}
