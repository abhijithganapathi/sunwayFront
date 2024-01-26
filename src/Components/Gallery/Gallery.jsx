import Carousel from "react-bootstrap/Carousel";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="bg-dark">
      <div
        style={{ display: "block", width: 700, padding: 30 }}
        className="container w-100"
      >
        <h1 className="text-white text-center">Gallery</h1>
        <h6 className="text-white text-center">A few stills from our sites</h6>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="/static/images/img5.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <p><mark>Structures are custom made according to customers requirement</mark></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="/static/images/img4.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <p><mark>Solar panels on a structure</mark></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="/static/images/img3.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <p><mark>Solar panels installed with proper walkway and lightning arrest</mark></p>
            </Carousel.Caption>
          </Carousel.Item><Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="/static/images/img2.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <p><mark>Solar panels after installation</mark></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="/static/images/img1.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <p><mark>Solar panels after installation</mark></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
