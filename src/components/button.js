import React, { PureComponent } from 'react';

export default class NewButton extends PureComponent {
  render() {
    return (
    <button style={{ color: 'red' }} >{this.props.name}</button>
    )
  }
}