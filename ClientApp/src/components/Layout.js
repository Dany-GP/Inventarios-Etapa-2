import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className='bg-dark'>
        <NavMenu />
        <Container className='bg-dark'>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
