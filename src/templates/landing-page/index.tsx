import Footer from "../sharedModules/footer/footer";
import Header from "../sharedModules/header/header";
import { About } from "../sharedModules/home/about/about";
import { Banner } from "../sharedModules/home/banner/banner";
import { Contact } from "../sharedModules/home/contact/contact";
import { GetInTouch } from "../sharedModules/home/get-in-touch/get-in-touch";
import { Portfolio } from "../sharedModules/home/portfolio/portfolio";
import { Qualification } from "../sharedModules/home/qualification/qualification";
import { Services } from "../sharedModules/home/services/services";
import { Skills } from "../sharedModules/home/skills/skills";
import { Testimonials } from "../sharedModules/home/testimonials/testimonials";

export const LandingPageTemp = () => {
  return (
    <main className="m-0 box-border overflow-x-hidden bg-bg-color p-0 font-poppins text-secondary-color">
      <Header />
      <Banner />
      <About />
      <Qualification />
      <Skills />
      <Services />
      <Portfolio />
      <GetInTouch />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};
