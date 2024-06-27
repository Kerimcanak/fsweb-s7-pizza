import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap';

const Success = ({ location }) => {
  const { state } = location;
  const { totalPrice } = state || {};

  return (
    <div>
      <Card
        className="my-2"
        style={{
          width: '18rem'
        }}
      >
        <CardHeader>
          Total Price
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            {totalPrice && `$${totalPrice.toFixed(2)}`}
          </CardTitle>
          <CardText>
            Thanks for your order!
          </CardText>
        </CardBody>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>
    </div>
  );
};

export default Success;

