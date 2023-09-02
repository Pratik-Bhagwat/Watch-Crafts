import { useState } from "react";
import Navbar from "./Components/Navbar";
import CustomCarousel from "./Components/CustomCarousel";
import Card from "./Components/Card";
import ProductInfoPage from "./Components/ProductInfoPage";
import MobileMenuCategories from "./Components/MobileMenuCategories";
import Footer from "./Components/Footer";
import { bannerImageData } from "./config";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="border-b shadow-sm">
        <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      </header>
      {mobileMenu && (
        <MobileMenuCategories
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {!mobileMenu && (
        <>
          <main>
            <section className="container mt-8 flex items-center justify-center">
              <CustomCarousel>
                {bannerImageData.map((image) => (
                  <img key={image.id} src={image.src} alt={image.alt} />
                ))}
              </CustomCarousel>
            </section>
            <section className="px-3 xs:p-0 container mt-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </section>
            <section className="container mt-8 flex items-center justify-center">
              <ProductInfoPage />
            </section>
          </main>
          <footer className="mt-8 bg-[#000000]">
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}

export default App;
