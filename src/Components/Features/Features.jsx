import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Features() {
  return (
    <section className="py-4 draggable" style={{ backgroundColor: "#1E1E1E" }}>
      <div className="container">
        <div className="row containerx">
          <div className="col-md-4 col-10 mx-auto">
            <div className="p-3 text-center">
              <img
                className="mb-3"
                style={{ height: "100px" }}
                src="/static/images/solution.png"
              />
              <h4 className="start-step-h4">Customized solutions</h4>
              <p className="text-white">
              <FontAwesomeIcon icon="fa-solid fa-gear" />
                We design and install solar systems that are tailored to your
                specific needs and preferences. We take into account your roof
                size, orientation, shading, load profile, and aesthetic
                requirements.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-10 mx-auto">
            <div className="p-3 text-center">
              <img
                className="mb-3"
                style={{ height: "100px" }}
                src="/static/images/expert.png"
              />
              <h4 className="start-step-h4">Expert guidance</h4>
              <p className="text-white">
                We provide you with expert advice and guidance throughout the
                entire solar process, from site assessment to commissioning. We
                help you understand the technical aspects, the financial
                benefits, and the environmental impacts of going solar.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-10 mx-auto">
            <div className="p-3 text-center">
              <img
                className="mb-3"
                style={{ height: "100px" }}
                src="/static/images/quality.png"
              />
              <h4 className="start-step-h4">Quality assurance</h4>
              <p className="text-white">
                We use only the best quality materials and equipment for our
                solar systems. We follow the highest standards of safety and
                quality control during installation and testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
