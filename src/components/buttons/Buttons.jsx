import React, { PropTypes } from 'react'
import classNames from 'classnames/bind'
import styles from './_buttons.css'

const cx = classNames.bind(styles)

export function Button({ className, children, ...props }) {
  return (
    <button className={cx('btn', className)} {...props} >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export function Input({ className, ...props }) {
  return (
    <input className={cx('btn', className)} {...props} />
  )
}

Input.propTypes = {
  className: PropTypes.string,
}

export function Link({ className, children, ...props }) {
  return (
    <a className={cx('btn', className)} {...props} >
      {children}
    </a>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}
