import React from 'react'
import Home from '../pages/Home.jsx'
import {Redirect, Route, Switch} from 'react-router-dom'
import './App.scss'
import HeaderNavigation from '../components/Static/HeaderNavigation/HeaderNavigation.jsx'
import Footer from '../components/Static/Footer/Footer.jsx'
import Details from '../pages/Details.jsx'
import Review from '../pages/Review.jsx'
import Cart from '../pages/Cart.jsx'
import ScrollToTop from '../components/Reused/HOC/ScrollToTop.jsx'
import HowUse from '../pages/HowUse.jsx'
import Contucts from '../pages/Contucts.jsx'
import Blog from '../pages/Blog.jsx'
import BlogContent from '../components/Page/Blog/BlogContent.jsx'

class App extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop/>
        <HeaderNavigation/>
        <Switch>
          <Route path='/details/:name' component={Details}/>
          <Route path='/blog/:name' component={BlogContent}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/review' component={Review}/>
          <Route path='/contucts' component={Contucts}/>
          <Route path='/howUse' component={HowUse}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/' exact component={Home}/>
          <Redirect to='/'/>
        </Switch>
        <Footer/>
      </>
    )
  }
}

export default App
