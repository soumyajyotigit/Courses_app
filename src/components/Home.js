import React, { useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText,Button, Container } from 'reactstrap';

const Home = () => {
  useEffect(()=>{
    document.title="Home || Learn Code By Yourself"
  },[])
  return (
    <div className='text-center'>  
    
    <Card className="bg-secondary">
      <CardBody>
        <CardTitle tag="h1" >Soumya's Tech Site</CardTitle>
        <CardText>This is a website for learning</CardText>
        <Container>
            <Button color='dark' outline>Start Using</Button>
        </Container>
      </CardBody>
    </Card>
    </div>
    
  );
};

export default Home;
