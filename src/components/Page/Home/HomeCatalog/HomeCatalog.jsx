import React from 'react'
import classes from './HomeCatalog.module.scss'
import HomeCatalogItem from './HomeCatalogItem/HomeCatalogItem.jsx'
import {connect} from 'react-redux'

const HomeCatalog = ({productData}) => {
  return (
    <section className={classes.wrapper} id='buy'>
      <h2 className={classes.sectionName}>Каталог</h2>
      <div className={classes.descr}>выберите свой virgin shilajit</div>
      <div className={classes.line}/>
      <aside className={classes.info}>
        <p>Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения
          организма человека!
        </p>
      </aside>
      <div className={classes.productsCont}>
        {
          productData.map((item, i) => {
            return (
              <HomeCatalogItem
                key={item.name + ' main ' + i}
                price={item.firstPortionPrice}
                avaible={item.avaible}
                sell={item.sell}
                name={item.name}
                src={item.mainImg}
                href={item.name}
              />
            )
          })
        }
      </div>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    productData: state.detail.products
  }
}

export default connect(mapStateToProps)(HomeCatalog)
