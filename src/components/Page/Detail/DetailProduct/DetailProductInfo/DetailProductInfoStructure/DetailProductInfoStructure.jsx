import React, {Fragment} from 'react'
import classes from './DetailProductInfoStructure.module.scss'

const DetailProductInfoStructure = ({structure}) => {
  return (
    <Fragment>
      <h2 className={classes.title}>{structure.title}</h2>
      <div className={classes.description}>{structure.descriptionStructure}</div>
      <div className={classes.tableContainer}>
        {
          structure.structureTable.map((item, i) => {
            return (
              <Fragment key={'structure' + i}>
                {
                  item.title ?
                    <div className={classes.tableItem}>
                      <span className={classes.itemTitle}>{item.title}</span>
                      {
                        item.val ?
                          <span className={classes.itemValue}>{item.val}</span> : ''
                      }
                    </div> :
                    <div className={classes.tableItem}>
                      <div className={classes.tableItemBlock}>
                        <span className={classes.itemTitle}>{item.title1}</span>
                        <span className={classes.itemValue}>{item.val1}</span>
                      </div>
                      <div className={classes.tableItemBlock}>
                        <span className={classes.itemTitle}>{item.title2}</span>
                        <span className={classes.itemValue}>{item.val2}</span>
                      </div>
                    </div>
                }
              </Fragment>
            )
          })
        }
      </div>
      <span className={classes.clarification}>{structure.clarification}</span>
    </Fragment>
  )
}

export default DetailProductInfoStructure
