
import { ServiceItem } from './ServiceItem';

const ServicesListView = () => {
  const services = [
    { icon: "fas fa-fish", title: "Análisis de Población", description: "Evaluación detallada de las poblaciones de sardinas y anchovetas en regiones afectadas." },
    { icon: "fas fa-chart-line", title: "Modelado de Sistemas", description: "Uso de Vensim para simular dinámicas espacio-temporales en la pesca." },
    { icon: "fas fa-globe-americas", title: "Impacto Ambiental", description: "Investigación sobre los efectos de la sobrepesca en el ecosistema marino peruano." },
    { icon: "fas fa-people-arrows", title: "Estrategias de Mitigación", description: "Desarrollo de estrategias para la gestión sostenible de los recursos pesqueros." },
    { icon: "fas fa-balance-scale", title: "Regulación y Política", description: "Propuestas para mejorar la regulación y control de la pesca artesanal e industrial." },
    { icon: "fas fa-school", title: "Educación y Conciencia", description: "Programas educativos para concienciar sobre la importancia de la pesca sostenible." }
  ];

  return (
    <section className="about-section py-5">
      <div className="container py-lg-5 py-md-4 py-2 ServicesPageServices">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mt-lg-5 mt-4">
              <ServiceItem icon={service.icon} title={service.title} description={service.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListView;
