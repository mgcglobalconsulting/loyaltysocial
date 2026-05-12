'use client';

import './menu.css';

const menuItems = [
  {
    id: 1,
    title: 'Signature Chicken Wings',
    price: '$16.95',
    description:
      'Crispy, juicy, and packed with flavor. Choose your favorite style to pair with the perfect basket of fries.',
    sauces: ['Naked', 'Buffalo Hot Chili', 'Honey', 'Old Bay', 'Lemon Pepper'],
  },
  {
    id: 2,
    title: 'Southern Crispy Catfish Basket',
    price: '$15.95',
    description: 'Cornmeal-crusted catfish fillets, fried golden, served with fries.',
  },
  {
    id: 3,
    title: 'Golden Fried Shrimp Basket',
    price: '$14.95',
    description: 'Large shrimp, lightly battered and fried to golden crisp, served with fries.',
  },
  {
    id: 4,
    title: 'Chicken Tender Basket',
    price: '$14.95',
    description: 'Crispy fried chicken tenders, served with fries.',
  },
];

export default function MenuPage() {
  return (
    <div className="page-wrap">
      <div className="glow" />

      <div className="inner">
        <header className="menu-header">
          <p className="brand-label">Loyalty Social</p>
          <h1 className="menu-title">Quick Bites Menu</h1>
          <div className="divider" />
          <p className="subtitle">All Baskets Served with Fries</p>
        </header>

        <main className="grid">
          {menuItems.map((item) => (
            <div key={item.id} className="card">
              <div className="card-top">
                <h3 className="item-name">{item.title}</h3>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-desc">{item.description}</p>
              {item.sauces && (
                <div className="sauce-section">
                  <p className="sauce-label">Choice of Sauce</p>
                  <div className="sauce-tags">
                    {item.sauces.map((sauce, idx) => (
                      <span key={idx} className="sauce-tag">{sauce}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>

        <footer className="menu-footer">
          <div className="footer-line" />
          <p className="footer-note">*All food items subject to 18% service charge and tax*</p>
        </footer>

        <button className="print-btn" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
}
