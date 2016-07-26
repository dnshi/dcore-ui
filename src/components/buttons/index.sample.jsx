import React, { Component } from 'react'
import { Button, Input, Link } from './Buttons'
import classNames from 'classnames'

export class SimpleButton extends Component {
  state = {}

  handleClick() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <div>
        <div style={{ paddingTop: '10px' }}>
          <Button onClick={::this.handleClick}>
            default
          </Button>
        </div>
        {['primary', 'secondary', 'success', 'warning', 'info', 'error'].map((flavor, i) => (
          <div key={`type-${i + flavor}`} style={{ paddingTop: '10px' }}>
            <Button onClick={::this.handleClick} className={flavor}>
              {flavor}
            </Button>
          </div>
        ))}
        <div style={{ paddingTop: '10px' }}>
          <Button onClick={::this.handleClick}>
            {this.state.active ? 'active' : 'not active'}
          </Button>
        </div>
        <br />
        <div style={{ paddingTop: '10px' }}>
          <Input onClick={::this.handleClick} className="primary" type="button" value="Input" />
        </div>
        <div style={{ paddingTop: '10px' }}>
          <Link className="primary" href="#" role="button">
            Link
          </Link>
        </div>
        <br />
          {['primary', 'secondary', 'success', 'warning', 'info', 'error'].map((flavor, i) => (
            <div key={`inverted-${i + flavor}`} style={{ paddingTop: '10px' }}>
              <Button onClick={::this.handleClick} className={classNames(flavor, 'inverted')}>
                {flavor}
              </Button>
            </div>
          ))}
      </div>
    )
  }
}
