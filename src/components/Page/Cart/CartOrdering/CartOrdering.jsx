import React, {useState} from 'react'
import classes from './CartOrdering.module.scss'
import CartOrderingItem from './CartOrderingItem/CartOrderingItem.jsx'
import CartOrderingInput from './CartOrderingInput/CartOrderingInput.jsx'
import {connect} from 'react-redux'
import {clearCart} from '../../../../store/actions/actionDetail'
import {registrationOrder} from '../../../../store/actions/actionCart'
import {useHistory} from 'react-router-dom'
import {validateControl} from '../../../Reused/FuncComponents/allReusedFunction'

// eslint-disable-next-line no-shadow
const CartOrdering = ({cart, clearCart, registrationOrder}) => {
  let nextLink = useHistory()
  const [formControls, setFormControls] = useState({
    checkbox: false,
    isFormValid: false,
    validationData: {
      name: {
        value: '',
        type: 'name',
        label: 'Имя',
        errorMessage: 'Введите коректное имя',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 2
        },
        // eslint-disable-next-line react/no-multi-comp
        svg: () => {
          return (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="17" height="16">
                <path
                  d="M12.5 4C13.5609 4 14.5783 4.42143 15.3284 5.17157C16.0786 5.92172 16.5 6.93913 16.5 8C16.5 9.06087 16.0786 10.0783 15.3284 10.8284C14.5783 11.5786 13.5609 12 12.5 12C11.4391 12 10.4217 11.5786 9.67157 10.8284C8.92143 10.0783 8.5 9.06087 8.5 8C8.5 6.93913 8.92143 5.92172 9.67157 5.17157C10.4217 4.42143 11.4391 4 12.5 4ZM12.5 14C16.92 14 20.5 15.79 20.5 18V20H4.5V18C4.5 15.79 8.08 14 12.5 14Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <rect x="0.5" width="24" height="24"/>
              </g>
            </svg>
          )
        }
      },
      email: {
        value: '',
        type: 'email',
        label: 'E-mail',
        errorMessage: 'Введите коректный E-mail',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        },
        // eslint-disable-next-line react/no-multi-comp
        svg: () => {
          return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                <path
                  d="M12 15C12.81 15 13.5 14.7 14.11 14.11C14.7 13.5 15 12.81 15 12C15 11.19 14.7 10.5 14.11 9.89C13.5 9.3 12.81 9 12 9C11.19 9 10.5 9.3 9.89 9.89C9.3 10.5 9 11.19 9 12C9 12.81 9.3 13.5 9.89 14.11C10.5 14.7 11.19 15 12 15ZM12 2C14.75 2 17.1 3 19.05 4.95C21 6.9 22 9.25 22 12V13.45C22 14.45 21.65 15.3 21 16C20.3 16.67 19.5 17 18.5 17C17.3 17 16.31 16.5 15.56 15.5C14.56 16.5 13.38 17 12 17C10.63 17 9.45 16.5 8.46 15.54C7.5 14.55 7 13.38 7 12C7 10.63 7.5 9.45 8.46 8.46C9.45 7.5 10.63 7 12 7C13.38 7 14.55 7.5 15.54 8.46C16.5 9.45 17 10.63 17 12V13.45C17 13.86 17.16 14.22 17.46 14.53C17.76 14.84 18.11 15 18.5 15C18.92 15 19.27 14.84 19.57 14.53C19.87 14.22 20 13.86 20 13.45V12C20 9.81 19.23 7.93 17.65 6.35C16.07 4.77 14.19 4 12 4C9.81 4 7.93 4.77 6.35 6.35C4.77 7.93 4 9.81 4 12C4 14.19 4.77 16.07 6.35 17.65C7.93 19.23 9.81 20 12 20H17V22H12C9.25 22 6.9 21 4.95 19.05C3 17.1 2 14.75 2 12C2 9.25 3 6.9 4.95 4.95C6.9 3 9.25 2 12 2Z"
                />
              </mask>
              <g mask="url(#mask1)">
                <rect width="24" height="24"/>
              </g>
            </svg>
          )
        }
      },
      tel: {
        value: '',
        type: 'tel',
        label: 'Телефон',
        errorMessage: 'Введите коректный номер',
        valid: false,
        touched: false,
        validation: {
          required: true,
          tel: true
        },
        // eslint-disable-next-line react/no-multi-comp
        svg: () => {
          return (
            <svg className={classes.svg} width="25" height="24" viewBox="0 0 25 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="19" height="18">
                <path
                  d="M7.12 10.79C8.56 13.62 10.88 15.94 13.71 17.38L15.91 15.18C16.19 14.9 16.58 14.82 16.93 14.93C18.05 15.3 19.25 15.5 20.5 15.5C20.7652 15.5 21.0196 15.6054 21.2071 15.7929C21.3946 15.9804 21.5 16.2348 21.5 16.5V20C21.5 20.2652 21.3946 20.5196 21.2071 20.7071C21.0196 20.8946 20.7652 21 20.5 21C15.9913 21 11.6673 19.2089 8.47918 16.0208C5.29107 12.8327 3.5 8.50868 3.5 4C3.5 3.73478 3.60536 3.48043 3.79289 3.29289C3.98043 3.10536 4.23478 3 4.5 3H8C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4C9 5.25 9.2 6.45 9.57 7.57C9.68 7.92 9.6 8.31 9.32 8.59L7.12 10.79Z"
                />
              </mask>
              <g mask="url(#mask2)">
                <rect x="0.5" width="24" height="24"/>
              </g>
            </svg>
          )
        }
      },
      adress: {
        value: '',
        type: 'adress',
        label: 'Адрес',
        errorMessage: 'Введите коректный адрес',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        },
        // eslint-disable-next-line react/no-multi-comp
        svg: () => {
          return (
            <svg className={classes.svg} width="25" height="24" viewBox="0 0 25 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="2" width="15" height="20">
                <path
                  d="M12.5 11.5C11.837 11.5 11.2011 11.2366 10.7322 10.7678C10.2634 10.2989 10 9.66304 10 9C10 8.33696 10.2634 7.70107 10.7322 7.23223C11.2011 6.76339 11.837 6.5 12.5 6.5C13.163 6.5 13.7989 6.76339 14.2678 7.23223C14.7366 7.70107 15 8.33696 15 9C15 9.3283 14.9353 9.65339 14.8097 9.95671C14.6841 10.26 14.4999 10.5356 14.2678 10.7678C14.0356 10.9999 13.76 11.1841 13.4567 11.3097C13.1534 11.4353 12.8283 11.5 12.5 11.5ZM12.5 2C10.6435 2 8.86301 2.7375 7.55025 4.05025C6.2375 5.36301 5.5 7.14348 5.5 9C5.5 14.25 12.5 22 12.5 22C12.5 22 19.5 14.25 19.5 9C19.5 7.14348 18.7625 5.36301 17.4497 4.05025C16.137 2.7375 14.3565 2 12.5 2Z"
                />
              </mask>
              <g mask="url(#mask3)">
                <rect x="0.5" width="24" height="24"/>
              </g>
            </svg>
          )
        }
      },
      city: {
        value: '',
        type: 'city',
        label: 'Город',
        errorMessage: 'Введите коректный город',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 3
        }
      },
      index: {
        vale: '',
        type: 'index',
        label: 'Индекс',
        errorMessage: 'Введите коректный индекс',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
          maxLength: 6
        }
      },
      region: {
        vale: '',
        type: 'region',
        label: 'Регион',
        errorMessage: 'Введите коректный регион',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  })

  const checkboxChange = (e) => {
    setFormControls({...formControls, checkbox: e.target.checked})
  }

  const onChangeHandler = (event, controlName) => {
    const formCont = {...formControls}
    const control = {...formControls.validationData[controlName]}
    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)
    let formValid = true

    Object.keys(formCont.validationData).forEach(name => {
      formValid = formCont.validationData[name].valid && formValid

    })

    formCont.validationData[controlName] = control

    setFormControls({...formCont, isFormValid: formValid})
  }

  const renderInputs = (controlName, index) => {
    const control = formControls.validationData[controlName]
    return (
      <CartOrderingInput
        key={controlName + index}
        type={control.type + 'ordering' + index}
        value={control.value}
        valid={control.valid}
        touched={control.touched}
        label={control.label}
        shouldValidate={!!control.validation}
        errorMessage={control.errorMessage}
        onChange={event => onChangeHandler(event, controlName)}
        svg={control.svg}
        textError
      />
    )
  }

  const registrationOrderButton = () => {
    let formData = {}
    Object.keys(formControls.validationData).forEach((name) => {
      formData[name] = formControls.validationData[name].value
    })
    formData.order = cart
    registrationOrder(formData)
    clearCart()
    nextLink.push('/cart/orderReceived')
  }


  return (
    <>
      <h2 className={classes.title}>Оформление заказа</h2>
      <div className={classes.container}>
        <form
          className={classes.formContainer}
          onSubmit={e => e.preventDefault()}
        >
          <div className={classes.formBox}>
            <span className={classes.span}>Клиент</span>
            {renderInputs('name', 0)}
            {renderInputs('email', 1)}
            {renderInputs('tel', 2)}
          </div>
          <div className={classes.formBox}>
            <span className={classes.span}>Куда Доставить</span>
            {renderInputs('adress', 3)}
            <div className={classes.formTwoEl}>
              {renderInputs('city', 4)}
              {renderInputs('index', 5)}
            </div>
            {renderInputs('region', 6)}
          </div>
          <button
            onClick={registrationOrderButton}
            disabled={!formControls.isFormValid && !formControls.checkbox}
            className={classes.formButton}
          >
            <span className={classes.formButtonText}>Подтвердить</span>
          </button>
          <input onChange={checkboxChange} className={classes.checkboxInput} type="checkbox" id='orderingFormCheckbox'/>
          <label className={classes.checkboxLabel} htmlFor="orderingFormCheckbox">
            <span
              className={classes.checkboxSpan}
            >
              Даю согласие на обработку моих <span>персональных данных</span>
            </span>
          </label>
        </form>
        <div className={classes.productContainer}>
          <div className={classes.productDescriptionBlock}>
            <span className={classes.productDescription}>ваш заказ</span>
            <span className={classes.productSummPrice}>
              {
                cart.reduce((prev, curr) => {
                  return prev + curr.sumPrice
                }, 0)
              } ₽
            </span>
          </div>
          {
            cart.map((item, i) => {
              return (
                <CartOrderingItem
                  key={'ordering' + i}
                  img={item.img}
                  count={item.count}
                  price={item.sumPrice}
                  name={item.name}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.detail.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearCart: () => dispatch(clearCart()),
    registrationOrder: (data) => dispatch(registrationOrder(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOrdering)
