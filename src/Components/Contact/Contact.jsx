function Contact() {
  return (
    <div className="container">
      <div className="row removable">
        <div className="col-lg-4 mb-4 text-center">
          <div className="card draggable" draggable="true">
            <div className="card-body bg-dark rounded ">
              <i className="fa fa-phone text-lg mb-3" style={{color: "#ffffff"}}></i>
              <p className="mb-0 text-sm text-white" style={{minHeight:"50px"}}>+91 96330 21955</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4 text-center">
          <div className="card draggable" draggable="true">
            <div className="card-body bg-dark rounded">
            <i className="fa-solid fa-location-dot mb-3" style={{color: "#ffffff"}}></i>
              <p className="mb-0 text-sm text-white" style={{minHeight:"50px"}}>No. 670, Maruthayathu Building, Lower Karickom, Kottarakara - 691531</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4 text-center">
          <div className="card draggable" draggable="true">
            <div className="card-body bg-dark rounded">
              <i className="fa fa-envelope text-lg mb-3" style={{color: "#ffffff"}}></i>
              <p className="mb-0 text-sm text-white" style={{minHeight:"50px"}}>sunwaysolarsystems@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
