import React from 'react'
import {Button, Card, Container, Col, Row} from 'react-bootstrap';

const products = [
    {
        image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Camera',
        stock: 6,
        price: 120,
        provider: 'pexels',
    },
    {
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Camera',
      stock: 6,
      price: 120,
      provider: 'pexels',
  },
  {
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Camera',
    stock: 6,
    price: 120,
    provider: 'pexels',
  },
  {
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Camera',
    stock: 6,
    price: 120,
    provider: 'pexels',
  }
]

const CardPrd = () => {
  return (
        <Container fluid>
          <Row>
            {
              products.map((product) => {
                return (
                  <Col sm={4}>
                    <div>
                      <Card className='mb-2 px-2 py-2'>
                          <Card.Img fluid variant="top" src={product.image} width="20%"/>
                          <Card.Body>
                            <Card.Title> {product.title} </Card.Title>
                            <Card.Text> Stock: {product.stock} </Card.Text>
                            <Card.Text> Price: {product.price} </Card.Text>
                            <Card.Text> Provider: {product.provider} </Card.Text>
                            <Button variant="primary">Edit</Button>
                          </Card.Body>
                      </Card>
                    </div>  
                  </Col>
                )
              })}
          </Row>
        </Container>
      )
}


export default CardPrd