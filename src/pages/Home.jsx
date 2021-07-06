import React from 'react'
import classes from './Home.module.scss'
import HomeSlider from '../components/Page/Home/HomeSlider/HomeSlider.jsx'
import HomeCatalog from '../components/Page/Home/HomeCatalog/HomeCatalog.jsx'
import HomeMoreDetails from '../components/Page/Home/HomeMoreDetails/HomeMoreDetails.jsx'
import HomeDescriprion from '../components/Page/Home/HomeDescription/HomeDescriprion.jsx'
import HomeBlog from '../components/Page/Home/HomeBlog/HomeBlog.jsx'

const Home = () => {

 return (
  <main className={classes.wrapper}>
   <HomeSlider />
   <HomeCatalog/>
   <HomeMoreDetails/>
   <HomeDescriprion/>
   <HomeBlog/>
  </main>
 )
}

export default Home
