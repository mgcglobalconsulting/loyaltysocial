'use client';

import './birthday.css';

export default function BirthdayPage() {
  return (
    <div className="screen-bg">
      <div className="card-scale-wrap">
      <div className="card-outer">
        <div className="card-inner">

          {/* Top corner accents */}
          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />

          {/* Top section */}
          <div className="top-section">
            <div className="orn-row">
              <span className="orn-line" /><span className="orn-diamond">◆</span><span className="orn-line" />
            </div>
            <p className="vip-label">Loyalty Lounge Md</p>
            <div className="orn-row">
              <span className="orn-line" /><span className="orn-diamond">◆</span><span className="orn-line" />
            </div>
          </div>

          {/* Logo */}
          <div className="logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/loyaltysocial-wallart.png" alt="Loyalty Social" className="logo-img" />
          </div>

          {/* Middle divider */}
          <div className="mid-divider">
            <span className="orn-line" />
            <span className="orn-star">✦</span>
            <span className="orn-line" />
            <span className="orn-star">✦</span>
            <span className="orn-line" />
            <span className="orn-star">✦</span>
            <span className="orn-line" />
          </div>

          {/* Birthday text */}
          <div className="bday-section">
            <p className="presents-text">Proudly Celebrates</p>
            <h1 className="happy-bday">Happy Birthday</h1>
            <h2 className="name">Candi</h2>
            <div className="name-under">
              <span className="name-line" /><span className="name-diamond">◆</span><span className="name-line" />
            </div>
            <p className="section-label">Head VIP Section</p>
          </div>

          {/* Bottom section */}
          <div className="bottom-section">
            <div className="orn-row">
              <span className="orn-line" /><span className="orn-star">✦</span><span className="orn-line" /><span className="orn-star">✦</span><span className="orn-line" />
            </div>
            <p className="bottom-copy">Tonight, the lounge belongs to you.</p>
            <div className="orn-row">
              <span className="orn-line" /><span className="orn-diamond">◆</span><span className="orn-line" />
            </div>
          </div>

        </div>
      </div>
      </div>

      <button className="print-btn" onClick={() => window.print()}>
        Print / Save as PDF
      </button>
    </div>
  );
}
