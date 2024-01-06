import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

function Faq() {
  return (
    <div className="w-75 container mt-5 mb-5">
      <h2 className="p-2">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>
              What are the benefits of installing solar panels on my rooftop?
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            Installing solar panels on your rooftop can help you save money on
            your electricity bills, reduce your carbon footprint, increase your
            property value, and enjoy a reliable and clean source of energy.
            Solar panels can also help you earn money by exporting excess
            electricity to the grid through net metering or selling it to third
            parties through power purchase agreements.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>
              How much does it cost to install solar panels on my rooftop?
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            The cost of installing solar panels on your rooftop depends on
            various factors, such as the size and type of your system, the
            quality and brand of your components, the location and orientation
            of your roof, the availability of subsidies and incentives, and the
            installation and maintenance charges. Give us a call, and we will
            give you a free estimate!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <strong>
              How long does it take to install solar panels on my rooftop?
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            The installation time of solar panels on your rooftop depends on the
            size and complexity of your system, the availability of materials
            and manpower, the weather conditions, and the regulatory approvals.
            Generally, it takes about 1 to 2 weeks to complete the installation
            process, from site assessment to commissioning. However, this may
            vary depending on your specific situation and location.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <strong>How long do solar panels last on my rooftop?</strong>
          </Accordion.Header>
          <Accordion.Body>
            Solar panels are designed to last for a long time, typically 25 to
            30 years, with minimal degradation and maintenance. However, the
            actual lifespan of your solar panels may depend on the quality and
            brand of your components, the environmental factors, and the usage
            patterns. You should also check the warranty and guarantee terms of
            your solar panels and other components, such as inverters and
            batteries, to ensure their performance and durability.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h6 className="text-center m-4">
        Still have questions? <mark>Contact us</mark>
      </h6>
    </div>
  );
}

export default Faq;
