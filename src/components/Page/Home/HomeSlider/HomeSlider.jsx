import React from 'react'
import classes from './HomeSlider.module.scss'
import HomeSliderSlide from './HomeSliderSlide/HomeSliderSlide.jsx'

const HomeSlider = () => {

  const inputs = [1, 2, 3]
  const labels = inputs
  const imgSrc = {
    bg: ['1', '2', '1'],
    price: [1290, 1590, 1300],
    title: [
      'повысь выносливость с virgin shilajit',
      'Источник природного здоровья',
      'повысь выносливость с virgin shilajit'
    ]
  }

  return (
    <div className={classes.wrapper}>
      {
        inputs.map((_, i) => {
          return (
            <input
              id={'slide' + (i + 1)}
              name='slideChanger'
              value={i}
              data-type='slide'
              defaultChecked={i === 1}
              key={i}
              type="radio"
              className={classes['input' + (i + 1)]}
            />
          )
        })
      }
      <div
        className={classes.sliderCont}
        style={{width: inputs.length * 100 + '%'}}
      >
        {
          imgSrc.bg.map((_, i) => {
            return (
              <HomeSliderSlide
                key={i}
                slide={imgSrc.bg[i]}
                price={imgSrc.price[i]}
                title={imgSrc.title[i]}
              />
            )
          })
        }


      </div>
      <div className={classes.controls}>
        {
          labels.map((_, i) => {
            return (
              <label className={classes['slide-label']} key={i} htmlFor={'slide' + (i + 1)}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomeSlider
