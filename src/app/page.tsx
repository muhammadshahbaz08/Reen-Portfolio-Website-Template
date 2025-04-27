import {
  Hero,
  Services,
  Portfolio,
  CallToAction,
  AnimationProvider,
} from "./components";

export default function Home() {
  return (
    <main>
      <AnimationProvider />

      <Hero />
      <span data-aos="fade-up-right" data-aos-duration="2000">
        <Services />
      </span>
      <span data-aos="fade-up-right" data-aos-duration="2000">
        <Portfolio />
      </span>
      <span data-aos="fade-up-right" data-aos-duration="2000">
        <CallToAction />
      </span>
    </main>
  );
}
