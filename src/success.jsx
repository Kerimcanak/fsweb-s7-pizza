import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap';

const Success = ({ location }) => {
  const { state } = location;
  const { dataToSend } = state || {};
  const { note, toppings, selectedOption, price } = dataToSend || {};

  return (
    <div>
      <Card
        className="my-2"
        style={{
          width: '18rem'
        }}
      >
        <CardHeader>
          Order Details
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            Siprariş Notu: {note}
          </CardTitle>
          <CardText>
            Ek Malzemeler: {toppings.map((topping) => (
              <span key={topping}>{topping}, </span>
            ))}
          </CardText>
          <CardText>
            Selected Option: {selectedOption}
          </CardText>
          <CardText>
            Price: ${price.toFixed(2)}
          </CardText>
        </CardBody>
        <CardFooter>
          Thank you for your order!
        </CardFooter>
      </Card>
    </div>
  );
};

export default Success;

