const AboutPage = () => {
  return (
    <section>
      <h1 className=" flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          shopping
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Welcome to our e-commerce platform! Built with cutting-edge technology
        like Next.js, TypeScript, Tailwind CSS, and ShadCN, our store is
        designed to deliver a seamless and delightful shopping experience. We
        prioritize speed, accessibility, and elegance to bring you a modern
        solution for all your shopping needs.
        <br />
        <br />
        Explore a wide range of products, curated just for you, with a simple
        interface that makes browsing and purchasing effortless. From advanced
        features to a beautiful UI, we’ve built this platform with passion,
        innovation, and you in mind.
      </p>
    </section>
  );
};
export default AboutPage;
