import { useState } from 'react'
import './Landing.css'

const TESTIMONIALS = [
  {
    name: 'Jonny Thomas',
    role: 'Project Manager',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Bean Scene has completely changed my morning routine. The coffee is rich, smooth, and full of flavor. I can\'t imagine starting my day without a cup. The team is always welcoming and the atmosphere is perfect for getting work done.',
  },
  {
    name: 'Maria González',
    role: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'I\'ve tried coffee shops all over the city, but nothing compares to Bean Scene. Their espresso is simply extraordinary — bold and balanced. The service is always fast and the staff genuinely cares about quality.',
  },
  {
    name: 'Carlos Rivera',
    role: 'Graphic Designer',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    text: 'The Chai Latte here is incredible. Every time I visit I discover something new on the menu. Bean Scene feels like a second home — great coffee, great vibes, and amazing prices. Highly recommended to everyone!',
  },
  {
    name: 'Sophie Laurent',
    role: 'Marketing Director',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'What sets Bean Scene apart is their commitment to supreme quality beans. You can truly taste the difference. Whether you prefer a classic Cappuccino or something more adventurous, you\'ll leave satisfied every single time.',
  },
]

const NAV_LINKS = ['Home', 'Menu', 'About Us', 'Contact Us']

const PRODUCTS = [
  {
    name: 'Cappuccino',
    price: '$8.50',
    image:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
  },
  {
    name: 'Chai Latte',
    price: '$8.50',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80',
  },
  {
    name: 'Macchiato',
    price: '$8.50',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
  },
  {
    name: 'Espresso',
    price: '$8.50',
    image:
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&q=80',
  },
]

const FEATURES = [
  {
    title: 'Supreme Beans',
    description: 'Beans that provides great taste',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/7c95700e7d8064c8cec7770d3d0142c1265343d1?width=176',
    highlighted: true,
  },
  {
    title: 'High Quality',
    description: 'We provide the highest quality',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/9cf44d90e8010d908d334c55204e470ff7c47154?width=176',
  },
  {
    title: 'Extraordinary',
    description: 'Coffee like you have never tasted',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/d5ede7aa2401a176ab5bad5bb45d44be8f73f19d?width=176',
  },
  {
    title: 'Affordable Price',
    description: 'Our Coffee prices are easy to afford',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c3ac4dc41d2278d97f28cb658fb925c1cdeb5461?width=176',
  },
]

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="#" aria-label="Facebook" className="social-icons__link">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10Z" />
        </svg>
      </a>
      <a href="#" aria-label="Instagram" className="social-icons__link">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.51.5.904 1.105 1.153 1.772.248.638.415 1.363.465 2.428.048 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.638.248-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.897 4.897 0 0 1-1.772-1.153 4.898 4.898 0 0 1-1.153-1.772c-.248-.638-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428.254-.66.598-1.216 1.153-1.772A4.907 4.907 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.012 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM17.25 5.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
        </svg>
      </a>
      <a href="#" aria-label="YouTube" className="social-icons__link">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502a2.578 2.578 0 0 1-1.813 1.826C17.973 19.827 12 19.827 12 19.827s-5.972 0-7.73-.5a2.577 2.577 0 0 1-1.813-1.825C2 15.72 2 12 2 12s0-3.72.457-5.502A2.62 2.62 0 0 1 4.27 4.674C6.028 4.173 12 4.173 12 4.173s5.973 0 7.73.5a2.62 2.62 0 0 1 1.813 1.825ZM9.955 15.5l6-3.5-6-3.5v7Z" />
        </svg>
      </a>
      <a href="#" aria-label="Twitter" className="social-icons__link">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M22.162 5.656c-.75.334-1.556.559-2.401.66a4.195 4.195 0 0 0 1.84-2.314 8.377 8.377 0 0 1-2.656 1.015 4.184 4.184 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.615-4.365 4.183 4.183 0 0 0 1.294 5.583 4.15 4.15 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072 4.185 4.185 0 0 0 3.907 2.904A8.395 8.395 0 0 1 2 18.407a11.83 11.83 0 0 0 6.407 1.878c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.499 8.499 0 0 0 2.093-2.163l-.225-.026Z" />
        </svg>
      </a>
    </div>
  )
}

function Header({ menuOpen, onToggleMenu }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo">
          Bean Scene
        </a>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#top" className="header__nav-link">
              {link}
            </a>
          ))}
          <a href="#top" className="header__signin">
            Sign In
          </a>
          <button type="button" className="btn btn--pill btn--small">
            Sign Up
          </button>
        </nav>
        <button
          type="button"
          className="header__menu-toggle"
          aria-label="Toggle menu"
          onClick={onToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">We&rsquo;ve got your morning covered with</p>
        <h1 className="hero__title">Coffee</h1>
        <p className="hero__text">
          It is best to start your day with a cup of coffee. Discover the
          best flavours coffee you will ever have. We provide the best for
          our customers.
        </p>
        <button type="button" className="btn btn--pill">
          Order Now
        </button>
      </div>
    </section>
  )
}

function Discover() {
  return (
    <section className="discover">
      <div className="discover__text">
        <h2 className="section-title">Discover the best coffee</h2>
        <p className="section-text">
          Bean Scene is a coffee shop that provides you with quality coffee
          that helps boost your productivity and helps build your mood.
          Having a cup of coffee is good, but having a cup of real coffee is
          greater. There is no doubt that you will enjoy this coffee more
          than others you have ever tasted.
        </p>
        <button type="button" className="btn btn--pill">
          Learn More
        </button>
      </div>
      <div className="discover__image">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/24009c2dc8d4967b38915b455db901f162770644?width=1360"
          alt="Coffee beans shaped like a cup"
        />
      </div>
    </section>
  )
}

function Menu() {
  return (
    <section className="menu">
      <h2 className="section-title section-title--center">
        Enjoy a new blend of coffee style
      </h2>
      <p className="section-text section-text--center">
        Explore all flavours of coffee with us. There is always a new cup
        worth experiencing
      </p>
      <div className="menu__grid">
        {PRODUCTS.map((product) => (
          <div key={product.name} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-card__image"
            />
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__meta">Coffee 50% | Milk 50%</p>
            <p className="product-card__price">{product.price}</p>
            <button type="button" className="btn btn--pill btn--small">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="why-us">
      <h2 className="section-title section-title--center">
        Why are we different?
      </h2>
      <p className="section-text section-text--center">
        We don&rsquo;t just make your coffee, we make your day!
      </p>
      <div className="why-us__grid">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className={`feature-card ${
              feature.highlighted ? 'feature-card--highlighted' : ''
            }`}
          >
            <img
              src={feature.icon}
              alt=""
              className="feature-card__icon"
            />
            <h3 className="feature-card__title">{feature.title}</h3>
            <p className="feature-card__description">{feature.description}</p>
          </div>
        ))}
      </div>
      <p className="why-us__cta-text">
        Great ideas start with great coffee. Lets help you achieve that
        <br />
        <strong>Get started today.</strong>
      </p>
      <button type="button" className="btn btn--pill">
        Join Us
      </button>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta">
      <div className="cta__overlay" />
      <div className="cta__content">
        <h2 className="cta__title">
          Get a chance to have an
          <br />
          Amazing morning
        </h2>
        <p className="cta__text">
          We are giving you are one time opportunity to experience a better
          life with coffee.
        </p>
        <button type="button" className="btn btn--pill">
          Order Now
        </button>
      </div>
      <img
        className="cta__cup"
        src="https://api.builder.io/api/v1/image/assets/TEMP/1cd30236a740a5834ca4147a6bfcb3ca3a63860b?width=600"
        alt="Coffee cup to go"
      />
    </section>
  )
}

function Testimonials() {
  const [current, setCurrent] = useState(0)

  function prev() {
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  }

  function next() {
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))
  }

  const t = TESTIMONIALS[current]

  return (
    <section className="testimonials">
      <h2 className="section-title section-title--center">
        Our coffee perfection feedback
      </h2>
      <p className="section-text section-text--center">
        Our customers have amazing things to say about us
      </p>
      <div className="testimonial-card">
        <span className="testimonial-card__quote-mark">&ldquo;</span>
        <p className="testimonial-card__text">{t.text}</p>
        <img
          className="testimonial-card__avatar"
          src={t.avatar}
          alt={t.name}
        />
        <h3 className="testimonial-card__name">{t.name}</h3>
        <p className="testimonial-card__role">{t.role}</p>
        <div className="testimonial-card__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`testimonial-card__dot${i === current ? ' testimonial-card__dot--active' : ''}`}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="testimonial-card__arrow testimonial-card__arrow--prev"
          aria-label="Previous testimonial"
          onClick={prev}
        >
          &larr;
        </button>
        <button
          type="button"
          className="testimonial-card__arrow testimonial-card__arrow--next"
          aria-label="Next testimonial"
          onClick={next}
        >
          &rarr;
        </button>
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter__overlay" />
      <div className="newsletter__content">
        <h2 className="newsletter__title">Subscribe to get the Latest News</h2>
        <p className="newsletter__text">
          Don&rsquo;t miss out on our latest news, updates, tips and special
          offers
        </p>
        {submitted ? (
          <p className="newsletter__success">
            ✓ Thank you for subscribing! We&rsquo;ll keep you updated.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter__input"
              placeholder="Enter your email"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn--rect">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">Bean Scene</p>
          <p className="footer__description">
            Bean Scene is a coffee shop dedicated to bringing you the finest
            coffee experience. From our handpicked beans to our expertly
            crafted brews, every cup tells a story of passion and quality.
          </p>
          <SocialIcons />
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">About</h3>
          <ul className="footer__links">
            <li>Menu</li>
            <li>Features</li>
            <li>News &amp; Blogs</li>
            <li>Help &amp; Supports</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">Company</h3>
          <ul className="footer__links">
            <li>How we work</li>
            <li>Terms of service</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer__column footer__column--contact">
          <h3 className="footer__heading">Contact Us</h3>
          <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
          <p>+1 202-918-2132</p>
          <p>beanscene@mail.com</p>
          <p>www.beanscene.com</p>
        </div>
      </div>
    </footer>
  )
}

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="landing">
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />
      <Hero />
      <Discover />
      <Menu />
      <WhyUs />
      <Cta />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Landing
