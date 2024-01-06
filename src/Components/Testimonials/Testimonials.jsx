import Background from "../../assets/blurry-gradient-haikei.svg"

function Testimonials() {
  return (
    <section className="py-5 draggable" style={{backgroundImage: `url(${Background})`,backgroundSize:"cover"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h2 className="text-gradient text-primary mb-0">
              What our customers
            </h2>
            <h2 className="mb-3">Think about us</h2>
            <p>
              <mark>
                Hear from our satisfied customers who have switched to solar
                energy
              </mark>{" "}
            </p>
          </div>
        </div>
        <div className="row mt-6 p-3">
          <div className="col-lg-4 col-md-8">
            <div className="card card-plain">
              <div className="card-body">
                <div className="author">
                  <div className="name ps-2">
                    <strong>Vijaya traders</strong>
                    <div className="stats">
                      <small>Perumpuzha</small>
                    </div>
                  </div>
                </div>
                <p className="mt-4" style={{ minHeight: "200px" }}>
                  &#34;We are very pleased with the service and performance of
                  Sunway solar systems. They have installed a{" "}
                  <strong>10 kW solar plant </strong>
                  for our shop and warehouse in a timely and professional
                  manner. The system is generating enough power to run our
                  business and also sell the excess to the grid. Sunway solar
                  systems is a trustworthy and efficient solar company.&#34;
                </p>
                <div className="rating mt-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 ms-md-auto">
            <div className="card bg-gradient-primary bg-dark">
              <div className="card-body">
                <div className="author align-items-center">
                  <div className="name ps-2">
                    <strong className="text-white">Anzar</strong>
                    <div className="stats">
                      <small className="text-white">Vembayam</small>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white" style={{ minHeight: "200px" }}>
                  &#34;I am very happy with the service and quality of Sunway
                  Solar Systems. They installed a{" "}
                  <strong>5 kW rooftop solar plant</strong> for my home in just
                  a few days, and it has been working flawlessly ever since. I
                  have reduced my electricity bill, and I am also contributing
                  to a greener environment. Thank you, Sunway Solar Systems, for
                  making my life brighter and better!&#34;
                </p>
                <div className="rating mt-3">
                  <i className="fas fa-star text-white"></i>
                  <i className="fas fa-star text-white"></i>
                  <i className="fas fa-star text-white"></i>
                  <i className="fas fa-star text-white"></i>
                  <i className="far fa-star text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="card card-plain">
              <div className="card-body">
                <div className="author">
                  <div className="name ps-2">
                    <strong>Muslim Jama-ath</strong>
                    <div className="stats">
                      <small>Kannanalloor</small>
                    </div>
                  </div>
                </div>
                <p className="mt-4" style={{ minHeight: "200px" }}>
                  &#34;We are very grateful to Sunway solar systems for
                  installing a <strong>20 kW solar plant</strong> for our mosque
                  and community hall. They have done a remarkable job in
                  designing and executing the project. The system is meeting all
                  our power needs and saving us a lot of money. Sunway solar
                  systems is a highly recommended solar company.&#34;
                </p>
                <div className="rating mt-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="horizontal dark my-5" />
      </div>
    </section>
  );
}

export default Testimonials;
