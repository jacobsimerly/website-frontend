export default function ServiceSection({
  id = "services",
  sectionClassName = "",
  containerClassName = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`pt-8 sm:pt-10 pb-16 sm:pb-20 bg-white relative z-10 ${sectionClassName}`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
