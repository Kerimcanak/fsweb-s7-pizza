import React from 'react';
import food1 from './food-1.png';
import food2 from './food-2.png';

const OptionsPizza = () => {
    return (
        <div>
            <div style={{ transform: 'scale(2, 2) translate(-30px, 0px)' }}>
            <div>Seçenekler</div>
            <div>
                <input type="checkbox" id="vegan" name="vegan" />
                <label htmlFor="vegan">Vegan</label>
            </div>
            <div>
                <input type="checkbox" id="gluten" name="gluten" />
                <label htmlFor="gluten">Glutensiz</label>
            </div>
            </div>
            <div style={{ transform: 'scale(2, 2) translate(70px, -30px)' }}>
                <div>Boyut</div>
                <div>
                    <input type="radio" id="size1" name="size" value="small" defaultChecked/>
                    <label htmlFor="size1">İdeal</label>
                </div>
                <div>
                    <input type="radio" id="size2" name="size" value="big" />
                    <label htmlFor="size2">Büyük</label>
                </div>
                <div>
                    <input type="radio" id="size3" name="size" value="extra-big" />
                    <label htmlFor="size3">Ekstra büyük</label>
                </div>
            </div>
            <div style={{ transform: 'scale(2, 2) translate(-25px, 20px)' }}>
                <div >Çeşit</div>
                <select name="toppings" id="toppings" onChange={(e) => {
                    const selectedOption = e.target.value;
                    if (selectedOption === 'mantarlı') {
                        document.getElementById('toppingsImage').src = food2;
                    } else if (selectedOption === 'mısırlı') {
                        document.getElementById('toppingsImage').src = food1;
                    }
                }}>
                    <option value="mantarlı">Mantarlı</option>
                    <option value="mısırlı">Mısırlı</option>
                </select>
                <img id="toppingsImage" src={food2} alt="Mantarlı" style={{ width: '80px', transform: 'translate(30px, 20px)' }} />
            </div>
        </div>
    );
};

export default OptionsPizza;
