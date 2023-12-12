import Service from "./Service";

export default function ServiceList(prop) {
  const { services } = prop;
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((item) => {
          return (
            <Service
              icon={item.icon}
              key={item.id}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </section>
  );
}
