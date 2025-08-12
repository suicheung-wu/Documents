import Navbar from "./Components/navbar";
import Hero from "./Components/Hero";
import About from "./Components/about";
import Services from "./Components/Services";
import Footer from "./Components/Footer";   
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}
            <nav class="navbar">
                <div class="container navbar-flex">
                    <img src="./img/logo.png" alt="" class="logo" />
                    {/* <!-- desktop menu --> */}
                    <div className="main-menu">
          <ul class="menu-list">
                    <li class="menu-item"><a href="#">Home</a></li>
            <li class="menu-item"><a href="#about">About</a></li>
            <li class="menu-item"><a href="#services">Services</a></li>
            <li class="menu-item"><a href="#tours">Tours</a></li>
          </ul>
        </div>
        <div class="icon-menu">
          <ul class="icon-list">
            <li class="icon-item">
              <a href="http://facebook.com"
                ><i class="fa-brands fa-facebook"> </i
              ></a>
            </li>
            <li class="icon-item">
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li class="icon-item">
              <a href="#"><i class="fa-brands fa-threads"></i></a>
            </li>
          </ul>
           </div>
        <!-- mobile menu -->
        <div class="mobile-menu">
          <div class="mobile-menu-toggle">
            <i class="fa-solid fa-bars fa-2x"></i>
          </div>
          <div class="mobile-menu-items">
            <ul class="mobile-menu-list">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#tours">Tours</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- hero -->
    <div class="hero">
      <div class="container">
        <h1>continue exploring</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="#" class="btn">explore tours</a>
      </div>
    </div>
    <!-- about -->
    <section class="about" id="about">
      <h2>about <span class="text-secondary">us</span></h2>
      <div class="about-content">
        <div class="about-img">
          <img src="./img/about.jpeg" alt="about" />
        </div>
        <div class="text">
          <h3>expolore the difference</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <a href="#" class="btn-about">read more</a>
        </div>
      </div>
    </section>

    <!-- services -->
    <main class="services" id="services">
      <h2>our <span class="text-secondary">services</span></h2>
      <div class="services-content">
        <div class="service-title">
          <i class="fa-solid fa-wallet"></i>
          <h3>saving money</h3>
          <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            assumenda.
          </p>
        </div>
        <div class="service-title">
          <i class="fa-solid fa-tree"></i>
          <h3>endless hiking</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, eius.
          </p>
        </div>
        <div class="service-title">
          <i class="fa-solid fa-socks"></i>
          <h3>amazing comfort</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            provident saepe laborum quibusdam corrupti recusandae numquam, iure
          </p>
        </div>
      </div>
    </main>
    <!-- tours -->
    <article class="tours" id="tours">
      <h2>featured <span class="text-secondary">tours</span></h2>
      <div class="cards">
        <!-- card X 4 -->
        <div class="card">
          <div class="card-img">
            <img src="./img/Tours-1.png" alt="" />
            <p>Aug 1st 2025</p>
          </div>

          <div class="card-content">
            <h3>adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li><i class="fa-solid fa-map"></i>China</li>
              <li>6 Days</li>
              <li>From $2100</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src="./img/Tours-2.png" alt="" />
            <p>Aug 1st 2025</p>
          </div>
          <div class="card-content">
            <h3>adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li><i class="fa-solid fa-map"></i>China</li>
              <li>6 Days</li>
              <li>From $2100</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src="./img/Tours-3.png" alt="" />
            <p>Aug 1st 2025</p>
          </div>
          <div class="card-content">
            <h3>adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li><i class="fa-solid fa-map"></i>China</li>
              <li>6 Days</li>
              <li>From $2100</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
    <!-- footer -->
    <footer class="footer">
      <div class="footer-menu">
        <ul class="menu-list">
          <li class="menu-item"><a href="#">Home</a></li>
          <li class="menu-item"><a href="#about">About</a></li>
          <li class="menu-item"><a href="#services">Services</a></li>
          <li class="menu-item"><a href="#tours">Tours</a></li>
        </ul>
      </div>
      <div class="footer-icon-menu">
        <ul class="icon-list">
          <li class="icon-item">
            <a href="http://facebook.com"
              ><i class="fa-brands fa-facebook"> </i
            ></a>
          </li>
          <li class="icon-item">
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li class="icon-item">
            <a href="#"><i class="fa-brands fa-threads"></i></a>
          </li>
        </ul>
      </div>
      <p>Copyright &copy; 2025 All Rights Reserved</p>
      <p>Copyright &copy; <span id="date"></span> All Rights Reserved</p>
    )
}
export default App;