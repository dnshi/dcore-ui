import React from 'react'
import ReactDOM from 'react-dom'
import { SampleButtons } from '../src/componments.sample'

const { SimpleButton } = SampleButtons
const MOUNT_ELEMENT = document.getElementById('root')

ReactDOM.render(
  <div>
    <SimpleButton />
  </div>,
  MOUNT_ELEMENT
)
