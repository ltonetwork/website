const SectionWrapper = ({ children  }) => {
  return (
    <section className="section-wrapper">
      <section className="custom-border">{children}</section>
    </section>
  )}

export default SectionWrapper