import React from "react";
import "./Homey.css";
function FindMore() {
  return (
    <div
      style={{
        marginTop: "3.5rem",
      }}
    >
      <div
        style={{
          float: "left",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "navy",
            marginTop: "3rem",
          }}
        >
          Top Destinations
        </h2>

        <br />
        <div
          class="row row-cols-1 row-cols-md-2 g-4"
          style={{ marginLeft: "60px" }}
        >
          <div class="col" style={{ marginLeft: "10px" }}>
            <div class="card">
              <img
                src="	https://www.keralatourism.org/images/homecontentimage/desktop/Chandragiri_fort-1.jpg"
                alt="Skyscrapers"
                style={{ height: "183px" }}
              />
              <h5 className="cardtext">Chandragiri Fort and River</h5>
            </div>
          </div>
          <div class="col" style={{ marginLeft: "-23px" }}>
            <div class="card">
              <img
                src="https://www.keralatourism.org/images/homecontentimage/desktop/parasurama-temple-1.jpg"
                style={{ height: "183px" }}
                alt="Skyscrapers"
              />
              <h5 className="cardtext"> Parasurama Temple</h5>
            </div>
          </div>
          <div class="col" style={{ marginLeft: "-23px" }}>
            <div class="card ">
              <img
                src="	https://www.keralatourism.org/images/homecontentimage/desktop/kumbalangi.jpg"
                style={{ height: "183px" }}
                alt="Skyscrapers"
              />
              <h5 className="cardtext">Kumbalangi Tourist Village</h5>
            </div>
          </div>
          <div class="col" style={{ marginLeft: "-23px" }}>
            <div class="card">
              <img
                src="https://www.keralatourism.org/images/homecontentimage/desktop/Muzhappilangad-Beach31.jpg"
                style={{ height: "183px" }}
                alt="Skyscrapers"
              />
              <h5 className="cardtext">Muzhappilangad Beach</h5>
            </div>
          </div>
          <div class="col" style={{ marginLeft: "10px" }}>
            <div class="card" style={{ marginTop: "-235px" }}>
              <img
                src="	https://www.keralatourism.org/images/homecontentimage/desktop/nilambur-kovilakom.jpg"
                style={{ height: "183px" }}
                alt="Skyscrapers"
              />
              <h5 className="cardtext">Nilambur Kovilakam</h5>
            </div>
          </div>
          <div class="col" style={{ marginLeft: "-23px" }}>
            <div class="card" style={{ marginTop: "-235px" }}>
              <img
                src="https://www.keralatourism.org/images/homecontentimage/desktop/devikulam-3.jpg"
                style={{ height: "183px" }}
                alt="Skyscrapers"
              />
              <h5 className="cardtext">Devikulam Hills</h5>
            </div>
          </div>
          <div class="col" style={{ marginLeft: "-23px" }}>
            <div class="card" style={{ marginTop: "-235px" }}>
              <img
                src="	https://www.keralatourism.org/images/homecontentimage/desktop/gavi4.jpg"
                style={{ height: "183px" }}
                alt="Skyscrapers"
              />
              <h5 className="cardtext">Gavi</h5>
            </div>
          </div>
          <div class="col" style={{ marginLeft: "-23px" }}>
            <div class="card" style={{ marginTop: "-235px" }}>
              <img
                src="https://www.keralatourism.org/images/homecontentimage/tab/kalvarimount-2.jpg"
                style={{ height: "183px" }}
                alt="Skyscrapers"
              />
              <h5 className="cardtext">Kalvari Mount</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindMore;
