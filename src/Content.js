import React from "react";

function Content() {
  return (
    <>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            padding: "30px",
            color: "brown",
            fontFamily: "",
          }}
        >
          Welcome to our restaurant
        </h1>
        <div className="row">
          {/*First card */}
          <div className="col-sm">
            <div className="card" style={{ width: "22rem" }}>
              <img className="card-img-top" src="food3.jpeg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Dough Preparation</h5>
                <p className="card-text">
                  Discover the art of hand-tossed dough, where every pizza
                  begins with a perfect base.
                </p>
              </div>
            </div>
          </div>
          {/*second card*/}
          <div className="col-sm">
            {" "}
            <div className="card" style={{ width: "22rem" }}>
              <img className="card-img-top" src="food02.jpeg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Chocolate Cake</h5>
                <p className="card-text">
                  Indulge in layers of rich chocolate cake, filled with creamy
                  mousse and topped with a luscious ganache.
                </p>
              </div>
            </div>
          </div>

          {/*Third card*/}
          <div className="col-sm">
            {" "}
            <div className="card" style={{ width: "22rem" }}>
              <img className="card-img-top" src="food1.jpeg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Gourmet Plating</h5>
                <p className="card-text">
                  Step into the world of fine dining where precision and passion
                  meet to create unforgettable gourmet experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {/*NEXT ROW*/}
        <div className="container">
          <div className="row">
            <div className="col-sm">
              {" "}
              <div className="card" style={{ width: "22rem" }}>
                <img className="card-img-top" src="food1.jpeg" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Gourmet Plating</h5>
                  <p className="card-text">
                    Step into the world of fine dining where precision and
                    passion meet to create unforgettable gourmet experiences.
                  </p>
                </div>
              </div>
            </div>
            {/* fourth card */}
            <div className="col-sm">
              {" "}
              <div
                className="card "
                style={{ width: "22rem", marginTop: "230px" }}
              >
                <img
                  className="card-img-top"
                  src="food02.jpeg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Gourmet Plating</h5>
                  <p className="card-text">
                    Step into the world of fine dining where precision and
                    passion meet to create unforgettable gourmet experiences.
                  </p>
                </div>
              </div>
            </div>
            {/* fifth card */}
            <div className="col-sm">
              {" "}
              <div
                className="card"
                style={{ width: "22rem", marginTop: "300px" }}
              >
                <img className="card-img-top" src="food3.jpeg" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Gourmet Plating</h5>
                  <p className="card-text">
                    Step into the world of fine dining where precision and
                    passion meet to create unforgettable gourmet experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {/* third row */}
        <div className="row">
          {/*seventh card */}
          <div className="col-sm">
            <div
              className="card"
              style={{ width: "22rem", marginTop: "300px" }}
            >
              <img className="card-img-top" src="food3.jpeg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Dough Preparation</h5>
                <p className="card-text">
                  Discover the art of hand-tossed dough, where every pizza
                  begins with a perfect base.
                </p>
              </div>
            </div>
          </div>
          {/*eighth card*/}
          <div className="col-sm">
            {" "}
            <div
              className="card"
              style={{ width: "22rem", marginTop: "230px" }}
            >
              <img className="card-img-top" src="food02.jpeg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Chocolate Cake</h5>
                <p className="card-text">
                  Indulge in layers of rich chocolate cake, filled with creamy
                  mousse and topped with a luscious ganache.
                </p>
              </div>  
            </div>
          </div>

          {/*ninth card*/}
          <div className="col-sm">
            {" "}
            <div className="card" style={{ width: "22rem" }}>
              <img className="card-img-top" src="food1.jpeg" alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Gourmet Plating</h5>
                <p className="card-text">
                  Step into the world of fine dining where precision and passion
                  meet to create unforgettable gourmet experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
}
export default Content;
