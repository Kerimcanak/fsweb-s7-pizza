import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import formbannerimage from "./images/form-banner.png"

function FormBanner() {
    return (
        <div
            style={{
                backgroundColor: "#FAF7F2",
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >

<Card className="border-0" style={{ backgroundColor: "#FAF7F2", }}>
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
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>

        </div>

    );
}

export default FormBanner