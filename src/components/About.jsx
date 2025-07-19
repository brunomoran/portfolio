const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Bruno Morán, a software engineer currently working at app2U 
            after completing my degree in Computer Science.
            Previously, I interned at Midokura, where I gained hands-on experience in
            real-world software development. I&apos;m passionate about technology, always eager
            to take on new challenges, and constantly looking for opportunities to learn and
            grow both personally and professionally.
          </p>

          <img
            src="/images/logo.JPG"
            alt="Logo"
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
