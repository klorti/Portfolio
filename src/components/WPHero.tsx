import "../assets/index.css";

export default function Hero() {
  return (
    <section className="bg-hero-gray mx-auto min-h-svh w-full min-w-75 px-3 pt-20 text-center overflow-hidden">
      <div className="flex">
      <img src='https://picsum.photos/200/300' className=" absolute" />
      <img src='https://picsum.photos/200/300' className=" absolute right-15 mt-20" />
      </div>
      <div className=" mx-auto max-w-3xl">
        <h1 className="m-2 flex flex-col font-serif text-5xl xl:text-[4rem]">
          <span className="font-(family-name:--sans) text-xs text-gray-500 uppercase lg:text-base">
            Managed Hosting & Beyond
          </span>
          <span className=" text-black my-10">Intelligent platforms built for your digital future
        </span>
        </h1>
        <p>
          Powering 5 million websites, WP Engine brings together
          enterprise-grade software, managed hosting, developer tools, and
          cutting-edge AI across its ecosystem to help sites get found, gain
          attention, and convert.
        </p>
        <br />
        <div className="flex flex-col sm:flex-row">
          <a className="rounded-3xl bg-blue-900 p-4 text-white max-w-40 m-auto">
            Plans & Pricing
          </a>&nbsp;
          <a className="rounded-3xl border-black p-4 text-black outline-2 m-auto">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
