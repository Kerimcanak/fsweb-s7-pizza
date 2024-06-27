import React, { useState } from "react";
import { Button, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, FormGroup, Label, Input, Form, Card, CardTitle, FormFeedback, FormText, ButtonGroup, CardText, CardHeader, CardFooter, CardBody } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Success from "../../success";


function Formİcerik() {


    
    const [pizzaPrice, setPizzaPrice] = useState(85.5);
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
    const [optionPrice, setOptionPrice] = useState(0);
    const [note, setNote] = useState('');
    const [toppingSelected, setToppingSelected] = useState([]);

    const [resultPrice, setResultPrice] = useState(0);
    React.useEffect(() => {
        setResultPrice(quantity * pizzaPrice + doughPrice + optionPrice);
    }, [quantity, pizzaPrice, doughPrice, optionPrice]);

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
            setDoughPrice(0);
        } else if (selectedDough === 'Orta') {
            setDoughPrice(10);
        } else if (selectedDough === 'Kalın') {
            setDoughPrice(20);
        }
    }, [selectedDough]);

    const handleCheckboxChange = (event, topping) => {
        if (event.target.checked) {
            setPizzaPrice(pizzaPrice + 5);
            setOptionPrice(optionPrice + 5);
            setToppingSelected(prevSelected => [...prevSelected, topping]);
        } else {
            setPizzaPrice(pizzaPrice - 5);
            setOptionPrice(optionPrice - 5);
            setToppingSelected(prevSelected => prevSelected.filter(selected => selected !== topping));
        }
    }



    // Export the checked toppings' texts in array "toppingSelected"
    const exportToppings = () => {
        return toppingSelected.map((selectedTopping) => ({
            text: selectedTopping
        }));
    }











    return (
        <div
            style={{
                backgroundColor: "white",
                height: "150vh"
            }}
        >



        





            <div id="form" style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
            <div id="boyut" style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
                <div style={{ marginRight: '80px', marginTop: '45px' }}>
                    <h2>Boyut Seç</h2>
                <div>
                <ButtonGroup>
                    <Button color="primary" onClick={() => setSelectedOption(0)} active={selectedOption === 0}>Küçük</Button>
                    </ButtonGroup>
                    <Button color="primary" onClick={() => setSelectedOption(10)} active={selectedOption === 10}>Büyük</Button>
                    <ButtonGroup>
                    <Button color="primary" onClick={() => setSelectedOption(20)} active={selectedOption === 20}>Orta</Button>
                </ButtonGroup>
                <p style={{ visibility: 'hidden' }}>Selected: {selectedOption}</p>
                </div>

                </div>
                    {' '}
                </div>
                <div id="hamur">
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
            






            <Card style={{ border: 'none', width:"200px", gap: '10px', marginLeft: '550px' }}>
            <CardTitle tag="h5">
                Ek malzemeler
            </CardTitle>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '20px' }}>
                {pizzaToppings.map((topping, index) => (
                

                    <FormGroup check key={index} style={{ gridRow: `${Math.floor(index / 3) + 1}` }}>
                        <Input type="checkbox" onChange={(event) => handleCheckboxChange(event, topping)} />
                        <Label check>{topping}</Label>
                    </FormGroup>
                    
                ))}
            </div>
            </Card>




        




            <FormGroup style={{ width: '400px',  margin: "auto", marginTop: "40px" }}>
                <Label for="notes">
                Notlar
                </Label>
                <Input type="text" onChange={(event) => setNote(event.target.value)}/>
                <FormFeedback>
                You will not be able to see this
                </FormFeedback>
                <FormText>
                Example help text that remains unchanged.
                </FormText>
            </FormGroup>
            <Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', border: 'none', width:"100px" }}>
            </Card>


                {/* 👇️ basic horizontal line */}
                <hr style={{ margin: "auto", width: '800px' }}/>


            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '40px' }}>
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
            <Card
                    className="my-2"
                    style={{
                        width: '18rem'
                    }}
                    >
                <CardBody>
                <CardTitle tag="h4">
                    Sipariş Toplamı
                </CardTitle>
                   <CardTitle className="mb-2 text-muted" tag="h5" style={{color: '#c20608'}}>
                    Seçimler: {(quantity * (optionPrice + doughPrice + selectedOption))}₺
                    </CardTitle>
                    <CardTitle tag="h5" style={{color: '#c20608'}}>
                    Toplam: {(quantity * pizzaPrice + doughPrice + selectedOption)}₺
                    </CardTitle>
                </CardBody>
                <Link to={{
                    pathname: "/success", 
                    state: {
                        dataToSend: {
                            note: note,
                            toppings: toppingSelected,
                            selectedOption: selectedOption,
                            price: quantity * (pizzaPrice + doughPrice + selectedOption)
                        }
                    }
                }}>
                    <Button>Sipariş ver!</Button>
                </Link>
                </Card>
            </div>


  

        
        </div>
    );
}

export default Formİcerik

