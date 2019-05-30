import React, { Component } from 'react';
import { Row, Col, Button, Form, Badge, Jumbotron } from 'react-bootstrap';

import './MainSection.css';

export default class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstWord: '',
      secondWord: '',
      firstWordResponse: '',
      secondWordResponse: '',
    };

    this.handleInputsChange = this.handleInputsChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputsChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });   
  }
  
  handleFormSubmit(event) {
    let word = this.state.firstWord;
    let wordWithoutSpaces = word.trim().replace(/ /g, '');
    
    let wordForArrayJoin = wordWithoutSpaces.split('').join('');
    let wordForArrayReverseJoin = wordWithoutSpaces.split('').reverse().join('');

    if (wordForArrayJoin === wordForArrayReverseJoin) {
      let firstWordResponse = 'A palavra ' + this.state.firstWord + ' é um palíndromo';
      this.setState({
        firstWordResponse: firstWordResponse
      });       
    } else {
      let firstWordResponse = 'A palavra ' + this.state.firstWord + ' não é um palíndromo';
      this.setState({
        firstWordResponse: firstWordResponse
      });
    }

    let word2 = this.state.secondWord;
    let wordWithoutSpaces2 = word2.trim().replace(/ /g, '');

    let wordForArrayJoin2 = wordWithoutSpaces2.split('').join();
    let wordForArrayReverseJoin2 = wordWithoutSpaces2.split('').reverse().join();

    if (wordForArrayJoin2 === wordForArrayReverseJoin2) {
      let secondWordResponse = 'A palavra ' + this.state.secondWord + ' é um palíndromo';
      this.setState({
        secondWordResponse: secondWordResponse
      });      
    } else {
      let secondWordResponse = 'A palavra ' + this.state.secondWord + ' não é um palíndromo';
      this.setState({
        secondWordResponse: secondWordResponse
      });      
    }

    this.setState({
      firstWord: '',
      secondWord: ''
    });  

    event.preventDefault();
  }

  render() {
    return (
        <Jumbotron className="marginTop10">
          <h3>
            Verificador de <Badge variant="secondary">Palíndromos</Badge>
          </h3>
          <hr></hr>    
          <Form onSubmit={this.handleFormSubmit}>
            <Row className="marginTop10">
              <Col>
                <Form.Control required name="firstWord" value={this.state.firstWord} onChange={this.handleInputsChange} type="text" placeholder="Palavra 1" />
              </Col>
            </Row>
            <Row className="marginTop10">
              <Col>
                <Form.Control required name="secondWord" value={this.state.secondWord} onChange={this.handleInputsChange} type="text" placeholder="Palavra 2" />
              </Col>
            </Row>
            <Row className="marginTop10">
              <Col>
                <Button type="submit" variant="primary" block>Verificar</Button>
              </Col>
            </Row>
          </Form>
            <Row className="marginTop10">
              <Col>
                <p>{this.state.firstWordResponse}</p>
                <p>{this.state.secondWordResponse}</p>
              </Col>
            </Row>
        </Jumbotron>              
    );
  }
}