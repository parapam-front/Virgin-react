import React, {Fragment, useEffect} from 'react'
import classes from './Stars.module.scss'
import {connect} from 'react-redux'
import {concatRating} from '../../../../store/actions/actionDetail'

// eslint-disable-next-line no-shadow
const Stars = ({localeKey, rated, rating, name, setConnectConcatRating, comment, size, justifyContent}) => {

  let localStorageRate = JSON.parse(localStorage.getItem(localeKey)) || {}

  useEffect(() => {
    if (localStorage.getItem(localeKey)) {
      if (localStorageRate[name]) {
        setConnectConcatRating(name, localStorageRate[name], true)
      }
    }
  }, [])

  const starClasses = (i) => {
    if (!comment) {
      if (!rated) {
        return classes.pathNotRated
      } else if (rated) {
        if (5 - i - 1 === Math.trunc(rate)) {
          return classes.pathGrad
        } else if (5 - i <= Math.trunc(rate)) {
          return classes.pathRated
        }
      }
    } else if (comment) {
      if (!rated) {
        return classes.pathNotRated
      } else if (rated && 5 - i <= localStorageRate[name]) {
        return classes.pathRated
      }
    }
  }

  function mClick(e) {
    if (e) {
      setConnectConcatRating(name, +e.target.value, true)
      localStorageRate[name] = +e.target.value
      localStorage.setItem(localeKey, JSON.stringify(localStorageRate))
    }
  }

  let rate = null
  let rateTrunc = null
  if (rating) {
    rate = (rating.reduce((a, b) => a + b) / rating.length).toFixed(2)
    rateTrunc = (rate % 1).toFixed(2) * 100
  }
  const svgCont = [5, 4, 3, 2, 1]
  return (
    <div
      className={classes.svgCont}
      data-type='stars'
      onChange={mClick}
      style={{justifyContent: justifyContent ? justifyContent : ''}}
    >
      {
        rated && !comment &&
        <div className={classes.starText}>{rate}</div>
      }
      {svgCont.map((val, i) => {
        return (

          <Fragment key={i}>
            <input type="radio" disabled={rated} value={val}
                   className={
                     // eslint-disable-next-line no-sequences
                     classes['inputStar-' + (val), 'input']
                   }
                   id={'star-' + (val)}
            />
            {/* eslint-disable-next-line no-sequences */}
            <label className={classes['labelStar-' + (val), 'label-star']} htmlFor={'star-' + (val)}>
              <svg
                key={i}
                width={size || '20'}
                height={size || '19'}
                viewBox="0 0 20 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                {
                  rated && 5 - i - 1 === Math.trunc(rate) && !comment &&
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset={rateTrunc + '%'} style={{stopColor: '#E8B567'}}/>
                      <stop offset={rateTrunc + 1 + '%'} style={{stopColor: 'white'}}/>
                    </linearGradient>
                  </defs>
                }
                <path
                  className={starClasses(i)}
                  d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                />
              </svg>
            </label>
          </Fragment>
        )
      })
      }
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setConnectConcatRating: (name, val, rated) => dispatch(concatRating(name, val, rated))
  }
}

export default connect(null, mapDispatchToProps)(Stars)
