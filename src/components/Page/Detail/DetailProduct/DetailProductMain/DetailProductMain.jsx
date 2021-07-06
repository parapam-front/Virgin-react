import React, {Fragment} from 'react'
import classes from './DetailProductMain.module.scss'
import DetailProductSlider from '../DetailProductSlider/DetailProductSlider.jsx'
import Stars from '../../../../Reused/FuncComponents/Stars/Stars.jsx'
import CounterNumb from '../../../../Reused/FuncComponents/CounterNumb/CounterNumb.jsx'
import {addCartAction, changePortionValue} from '../../../../../store/actions/actionDetail'
import {connect} from 'react-redux'

// eslint-disable-next-line no-shadow
const DetailProductMain = ({product, changePortionValue, addCartAction}) => {
  const addCart = () => {
    addCartAction({
      name: product.name,
      count: product.count,
      portion: product.portions[+product.activePortion],
      sumPrice: product.sumPrice || product.price[+product.activePortion],
      img: product.img[product.activePortion],
      price: product.price[+product.activePortion]
    })
  }
  const buttonAddCart = () => {
    if (!product.addCart) {
      return classes.addCart
    }
    return classes.removeCart
  }
  const PortionValue = (e) => {
    changePortionValue(product.name, e.target.value, +e.target.dataset.position, product.price[+e.target.dataset.position])
  }

  return (
    <section className={classes.cont}>
      <DetailProductSlider
        img={product.img}
        name={product.name}
      />
      <div className={classes.infoCont}>
        <h3 className={classes.infoTitle}>{product.name}</h3>
        <div className={classes.priceCont}>
          <span>{product.sumPrice || product.price[product.activePortion]} Р</span>
          <div className={classes.starsAbsoluteContainer}>
            <Stars
              localeKey={'rating'}
              rating={product.rating}
              name={product.name}
              rated={product.rated}
            />
          </div>
        </div>
        <div className={classes.changeCont}>
          <div className={classes.changeContCounter}>
            <span className={classes.changeCont__textCounter}>Кол-во:</span>
            <CounterNumb
              count={product.count}
              name={product.name}
            />
          </div>
          <div className={classes.changeLine}/>
          {/* отдельный блок DetailProductInfoPortions */}
          <div className={classes.portionCont}>
            <span className={classes.portionDescr}>кол- во Порций:</span>
            <div className={classes.radioBlock} onChange={PortionValue}>
              {product.portions.map((val, i) => {
                return (
                  <Fragment key={i}>
                    <input
                      data-position={i}
                      className={classes['radio' + (i + 1)]}
                      defaultChecked={i === product.activePortion} name="portion" type="radio"
                      id={`portion${i + 1}`} value={val}
                    />
                    <label className={classes['label' + (i + 1)]} htmlFor={`portion${i + 1}`}>{val}</label>
                  </Fragment>
                )
              })
              }

            </div>
          </div>
        </div>
        <button className={buttonAddCart()} onClick={addCart}>
          <div className={classes.addCartText}>
            {!product.addCart ? 'добавить в корзину' : 'удалить из корзины'}
          </div>
        </button>
        {/* отдельный блок для плюсов DeatilProductInfoPluses */}
        <div className={classes.plusWrapper}>
          {
            product.plus.map((item, i) => {
              return (
                <div key={i} className={classes.plusCont}>
                  <div className={classes.svgBorder}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.614 0.850966C10.5834 0.820206 10.5471 0.795796 10.507 0.779138C10.467 0.762481 10.424 0.753906 10.3807 0.753906C10.3373 0.753906 10.2944 0.762481 10.2543 0.779138C10.2143 0.795796 10.1779 0.820206 10.1473 0.850966L4.51467 6.48363L1.75201 3.72096C1.72143 3.69021 1.68508 3.6658 1.64503 3.64914C1.60499 3.63248 1.56204 3.62391 1.51867 3.62391C1.4753 3.62391 1.43236 3.63248 1.39232 3.64914C1.35227 3.6658 1.31592 3.69021 1.28534 3.72096L0.585341 4.42096C0.554581 4.45154 0.530171 4.4879 0.513514 4.52794C0.496857 4.56798 0.488281 4.61093 0.488281 4.6543C0.488281 4.69767 0.496857 4.74061 0.513514 4.78066C0.530171 4.8207 0.554581 4.85706 0.585341 4.88763L4.27201 8.5603C4.30262 8.59091 4.33901 8.61513 4.37907 8.63156C4.41913 8.64798 4.46205 8.65627 4.50534 8.65596H4.52867C4.57196 8.65627 4.61489 8.64798 4.65494 8.63156C4.695 8.61513 4.73139 8.59091 4.76201 8.5603L11.3093 2.01063C11.3401 1.98006 11.3645 1.9437 11.3812 1.90366C11.3978 1.86361 11.4064 1.82067 11.4064 1.7773C11.4064 1.73393 11.3978 1.69099 11.3812 1.65094C11.3645 1.6109 11.3401 1.57454 11.3093 1.54397L10.614 0.850966Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className={classes.plusDescr}>{item}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    changePortionValue: (name, val, position, price) => dispatch(changePortionValue(name, val, position, price)),
    addCartAction: (data) => dispatch(addCartAction(data))
  }
}

export default connect(null, mapDispatchToProps)(DetailProductMain)
