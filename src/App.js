import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Images from './Images/bags.GIF'; // Make sure the path and file extension are correct

function App() {
  const [firstName, setFirstName] = useState(''); // State to store user's first name
  const handleInputChange = (event) => {
  setFirstName(event.target.value); // Update first name on input change
}
return(
    <div>
      <Card className='big'>
      <Card.Img variant="top" src={Images} />
        <Card.Body>
          <Card.Title> <h3>Name</h3>
           <Name />
           </Card.Title>
          <Card.Text>
           <h3>Description</h3>
           <Description />
          </Card.Text>
          <Card.Text>
            <h3>Price</h3> 
            <Price />
          </Card.Text>
          <Button variant="primary">Buy Now!</Button>
        </Card.Body>
      </Card>

      <div className="greeting">
        Hello, {firstName ? firstName : 'there'}!
        {firstName && <img src= {Images} alt="" />} 
      </div>

      <input
        type="text"
        placeholder="Enter your name"
        value={firstName}
        onChange={handleInputChange}
      />
    </div>
  );
};
export default App;