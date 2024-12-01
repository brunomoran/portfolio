const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Bruno Morán, a final year computer science student
            and currently working as a software engineer intern in Midokura.
            I&apos;m now looking to continue my professional career as a full
            time engineer while finishing my degree. I&apos;m always looking for
            new challenges and opportunities to learn and grow in any aspect of
            my life.
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
