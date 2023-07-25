import React from "react";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Business</h1>
        <p>We provide top-notch services to our customers.</p>
        <button>Contact Us</button>
      </header>
      <section className="Services">
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
      <section className="About">
        <h2>About Us</h2>
        <p>
          We are a dedicated team committed to delivering high-quality services
          and products to our clients.
        </p>
      </section>
      <footer>
        <p>Contact: info@business.com | Phone: 123-456-7890</p>
      </footer>
    </div>
  );
}

export default Home;
