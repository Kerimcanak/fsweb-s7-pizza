import React, { useState } from "react";
import { Button, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, FormGroup, Label, Input, Form, Card, CardTitle, FormFeedback, FormText, ButtonGroup, CardText } from "reactstrap";

function Formİcerik() {
    const pizzaPrice = 85.50;
    const pizzaToppings = [
        'Pepperoni',
        'Mozzarella',
        'Tomato',
        'Onion',
        'Mushroom',
        'Green pepper',
        'Red pepper',
        'Olive',
        'Pineapple',
        'Sausage',
        'Bacon',
        'Ham',
        'Anchovy',
        'Pesto'
    ]
    const [selectedDough, setSelectedDough] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [doughPrice, setDoughPrice] = useState(0);
    const [extraToppingsPrice, setExtraToppingsPrice] = useState(0);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleSelectDough = (event) => {
        setSelectedDough(event.target.textContent);
        setDropdownOpen(false);
    };


    const increaseValue = (limit) => {
        setQuantity((prev) => Math.min(prev + 1, limit));
    }
      
      const decreaseValue = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
      }

    React.useEffect(() => {
        if (selectedDough === 'İnce') {
            setDoughPrice(10);
        } else if (selectedDough === 'Orta') {
            setDoughPrice(20);
        } else if (selectedDough === 'Kalın') {
            setDoughPrice(30);
        }
    }, [selectedDough]);


    return (
        <div
            style={{
                backgroundColor: "white",
                height: "100vh"
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div>
                    <h2>Boyut Seç</h2>
                <div>
                <ButtonGroup>
                    <Button color="primary" onClick={() => setSelectedOption(10)} active={selectedOption === 10}>S</Button>
                    <Button color="primary" onClick={() => setSelectedOption(20)} active={selectedOption === 20}>M</Button>
                    <Button color="primary" onClick={() => setSelectedOption(30)} active={selectedOption === 30}>L</Button>
                </ButtonGroup>
                <p>Selected: {selectedOption}</p>
                </div>

                </div>
                    {' '}
                </div>
                <div>
                <h2>Hamur seç</h2>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            {selectedDough || 'Select an option'}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleSelectDough}>İnce</DropdownItem>
                            <DropdownItem onClick={handleSelectDough}>Orta</DropdownItem>
                            <DropdownItem onClick={handleSelectDough}>Kalın</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <Card style={{ border: 'none', width:"300px" }}>
            <CardTitle tag="h5">
                Ek malzemeler
            </CardTitle>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {pizzaToppings.map((topping, index) => (
                    <FormGroup check key={index}>
                        <Input 
                            type="checkbox"
                            onChange={(event) => {
                                const selected = event.target.checked;
                                setExtraToppingsPrice(prevPrice => prevPrice + (selected ? 5 : -5));
                            }}
                            max={10}
                            onClick={(event) => {
                                const selected = event.target.checked;
                                if (extraToppingsPrice > 10 && !selected) {
                                    setExtraToppingsPrice(prevPrice => prevPrice - 5);
                                }
                            }}
                        />
                        {' '}
                        <Label check>
                        {`${topping}`}
                        </Label>
                    </FormGroup>
                ))}
            </div>
        </Card>




            <FormGroup>
                <Label for="exampleEmail">
                Input without validation
                </Label>
                <Input />
                <FormFeedback>
                You will not be able to see this
                </FormFeedback>
                <FormText>
                Example help text that remains unchanged.
                </FormText>
            </FormGroup>
            <Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', border: 'none', width:"100px" }}>


            {/* ADET/QUANTITY */}
            <div style={{ marginLeft: "500px", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <button onClick={() => decreaseValue()}>
                    -
                </button>
                <div>{quantity}</div>
                <button onClick={() => increaseValue(5)}>
                    +
                </button>
            </div>

            {/* TUTAR/PRICE */}
            <Card>
                <CardTitle tag="h5">
                    Tutar
                </CardTitle>
                <CardText>
                    {(quantity * pizzaPrice + doughPrice + selectedOption) + extraToppingsPrice}₺
                </CardText>
            </Card>
            </Card>

        
        </div>
    );
}

export default Formİcerik
