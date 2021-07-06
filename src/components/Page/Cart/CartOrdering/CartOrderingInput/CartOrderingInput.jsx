import React from 'react'
import classes from './CartOrderingInput.module.scss'

function addClass(value) {
  return value
}

function isInvalid(valid, touched, shouldValidate) {
  return !valid && shouldValidate && touched
}

function isValid(valid, touched, shouldValidate) {
  return valid && shouldValidate && touched
}

const CartOrderingInput = ({label, svg, type, onChange, value, errorMessage, valid, touched, shouldValidate, textError}) => {
  const cls = [classes.placeholder]
  const clsLabel = [classes.label]

  if (addClass(value)) {
    cls.push(classes.placeholderWriten)
  }

  if (isInvalid(valid, touched, shouldValidate)) {
    clsLabel.push(classes.invalid)
  }

  if (isValid(valid, touched, shouldValidate)) {
    clsLabel.push(classes.valid)
  }


  return (
    <label className={clsLabel.join(' ')} htmlFor={type}>
      <input
        data-type='input'
        className={classes.input}
        id={type}
        type="text"
        onChange={onChange}
      />
      <span className={cls.join(' ')}>{label}</span>
      {
        svg ?
          svg() : ''
      }
      {
        // eslint-disable-next-line no-undef
        isInvalid(valid, touched, shouldValidate) && textError
        &&
        <div className={classes.errorMessageContainer}>
          <span className={classes.errorMessage}>{errorMessage}</span>
        </div>
      }
    </label>
  )
}

export default CartOrderingInput
