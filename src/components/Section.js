function Section({ children, headingText, headerLevel = 2 }) {
  const H = `h${headerLevel}`;
  return (
    <section>
      <H>{headingText}</H>
      {children}
    </section>
  );
}

export default Section;
