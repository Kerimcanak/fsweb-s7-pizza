import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import formbannerimage from "./images/form-banner.png"

function FormBanner() {
    return (
        <div
            style={{
                backgroundColor: "#FAF7F2",
                backgroundSize: "cover",
                height: "70vh",
                width: "100vw",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >

<Card className="border-0" style={{ backgroundColor: "#FAF7F2", paddingLeft:"300px", paddingRight:"300px" }}>
    <CardImg
      alt="Card image cap"
      src={formbannerimage}
      style={{
        height: 300,
        width: "70%",
        marginLeft: "120px",
      }}
      top
    />
    <CardBody>
     <CardTitle tag="h6" className="text-muted" class="d-flex" style={{paddingLeft:"140px", paddingRight:"140px" }}>
        Anasayfa - Seçenekler - <span style={{ color: '#c20608' }}>Sipariş Oluştur</span>
      </CardTitle>
      <CardTitle tag="h5" class="d-flex" style={{paddingLeft:"140px", paddingRight:"140px" }}>
        Position Absolute Acı Pizza
      </CardTitle>
      <CardTitle tag="h4" class="d-flex" style={{paddingLeft:"140px", paddingRight:"140px" }}>
        85.50₺
      </CardTitle>
      <CardText class="d-flex justify-content-center" style={{paddingLeft:"140px", paddingRight:"140px" }}>
      Frontent Dev olarak hala position:absolute kullanryorsan bu çok acı pizza tam sana göre. Piııa. domates, peynir ve genellikle çesitli diger malıenıelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fınnda yüksek sıcaklıkta pişirilen. genellikle yuvarlak, düzleştirilmiş mayalı bugday bazlı hamurdan oluşan İtalya, kökenli lezzetli bir yernektir.. Küçük bir pizzaya bazen pizzetta denir. 
      </CardText>
      <CardText>
      </CardText>
    </CardBody>
  </Card>

        </div>

    );
}

export default FormBanner