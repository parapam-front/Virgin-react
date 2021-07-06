import React, {useState} from 'react'
import classes from './Contucts.module.scss'
import CartOrderingInput from '../components/Page/Cart/CartOrdering/CartOrderingInput/CartOrderingInput.jsx'
import {validateControl} from '../components/Reused/FuncComponents/allReusedFunction'
import {connect} from 'react-redux'
import {sendQuestionData} from '../store/actions/actionQuestion'

// eslint-disable-next-line no-shadow
const Contucts = ({sendQuestionData}) => {
  const [formControls, setFormControls] = useState({
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
          },
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
        theme: {
          value: '',
          type: 'theme',
          label: 'Тема письма',
          errorMessage: 'Введите коректный адрес',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6
          },
        },
        contentEditable: {
          value: '',
          valid: true,
          touched: false,
          validation: {
            required: false
          },
        }
      }
    }
  )


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
        textError={false}
      />
    )
  }

  const contentEditable = (e) => {
    const formData = formControls
    formData.validationData.contentEditable.value = e.target.innerText
    setFormControls(formData)
  }

  const sendQuestion = () => {
    const input = document.querySelectorAll('[data-type="input"]')
    // eslint-disable-next-line no-shadow
    const contentEditable = document.querySelector('[data-type="contentEditable"]')
    input.forEach(item => {
      item.value = ''
    })
    contentEditable.innerText = ''
    let formData = {}
    Object.keys(formControls.validationData).forEach(name => {
      formData[name] = formControls.validationData[name].value
    })
    sendQuestionData(formData)
  }

  return (
    <section className={classes.container}>
      <div className={classes.locationContainer}>
        <div className={classes.textContainer}>
          <h3 className={classes.adress}>адрес</h3>
          <p className={classes.adressDescription}>
            vIRGIN SHILAJIT LTD
            QUEEN HOUSE
            180 TOTTENHART COURT ROAD
            LONDON W1P 7PD UK
          </p>

        </div>
        <iframe
          className={classes.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.51379103954!2d-0.13775544905551013!3d51.5221355173474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b292d62fb47%3A0xc587a60156a28748!2zMTgwIFRvdHRlbmhhbSBDb3VydCBSZCwgTG9uZG9uIFcxVCA3UEQsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2sru!4v1624361271228!5m2!1sru!2sru"
          style={{border: 0}}
          loading="lazy"
        />
      </div>
      <form onSubmit={e => e.preventDefault()} className={classes.questionForm}>
        <span className={classes.question}>задайте вопрос</span>
        <div className={classes.inputContainer}>
          {renderInputs('name', 0)}
          {renderInputs('email', 1)}
          {renderInputs('theme', 2)}
        </div>
        <div
          data-placeholder='Ваш отзыв'
          data-type='contentEditable'
          className={classes.contentEditable}
          contentEditable
          onInput={contentEditable}
        />
        <button onClick={sendQuestion} className={classes.formButton} disabled={!formControls.isFormValid}>
          <span className={classes.formButtonText}>Отправить</span>
        </button>
      </form>
    </section>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    sendQuestionData: (data) => dispatch(sendQuestionData(data))
  }
}

export default connect(null, mapDispatchToProps)(Contucts)
