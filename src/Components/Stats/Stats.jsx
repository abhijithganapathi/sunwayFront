import AnimatedNumber from "animated-number-react";
import { Component } from "react";

export default class Stats extends Component {
  state = {
    value1: 150,
    value2: 700,
    value3: 100,
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  formatValue = (value) => value.toFixed(0);
  render() {
    return (
      <section className="py-5 draggable">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-3">
              <h1 className="text-gradient text-primary">
                <AnimatedNumber
                  value={this.state.value1}
                  formatValue={this.formatValue}
                />
                +
              </h1>
              <h5 className="mt-3">Projects</h5>
              <p>
                of various sizes and types, ranging from residential rooftops to
                commercial buildings
              </p>
            </div>
            <div className="col-md-3">
              <h1 className="text-gradient text-primary">
                <AnimatedNumber
                  value={this.state.value2}
                  formatValue={this.formatValue}
                />
                kW+
              </h1>
              <h5 className="mt-3">Installed</h5>
              <p>
                catering to the diverse needs and preferences of our customers.
              </p>
            </div>
            <div className="col-md-3">
              <h1 className="text-gradient text-primary">
                <AnimatedNumber
                  value={this.state.value3}
                  formatValue={this.formatValue}
                />
                %
              </h1>
              <h5 className="mt-3">Customer Satisfaction</h5>
              <p>
                committed to delivering the best solar service and
                experience to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
