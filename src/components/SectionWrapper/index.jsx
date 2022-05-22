const SectionWrapper = ({ children  }) => {
  return (
    <section className="section-wrapper pt-0">
      <section className="custom-border">{children}</section>
    </section>
  )}

export default SectionWrapper