import React from 'react'
import classes from './DetailProductInfo.module.scss'
import DetailProductInfoDescr from './DetailProductInfoDescr/DetailProductInfoDescr.jsx'
import DetailProductInfoStructure from './DetailProductInfoStructure/DetailProductInfoStructure.jsx'
import DetailProductInfoHowUse from './DetailProductInfoHowUse/DetailProductInfoHowUse.jsx'

const DetailProductInfo = ({infoBlock, descr, structure, howUse}) => {
  return (
    <div className={classes.wrapper} id='howUse'>
      <section className={classes.container}>
        <input className={classes.input1} defaultChecked={descr} type="radio" name='detailInfo' id='detailInfo1'/>
        <input className={classes.input2} defaultChecked={structure} type="radio" name='detailInfo' id='detailInfo2'/>
        <input className={classes.input3} defaultChecked={howUse} type="radio" name='detailInfo' id='detailInfo3'/>
        <div className={classes.radioBlock}>
          <label className={classes.label} htmlFor="detailInfo1"><span>описание</span></label>
          <label className={classes.label} htmlFor="detailInfo2"><span>состав</span></label>
          <label className={classes.label} htmlFor="detailInfo3"><span>как использовать</span></label>
        </div>
        <section className={classes.contentContainerDescription}>
          <DetailProductInfoDescr description={infoBlock.description}/>
        </section>
        <section className={classes.contentContainerStructure}>
          <DetailProductInfoStructure structure={infoBlock.structure}/>
        </section>
        <section className={classes.contentContainerHowUse}>
          <DetailProductInfoHowUse howUse={infoBlock.howUse}/>
        </section>
      </section>
    </div>
  )
}

export default DetailProductInfo
