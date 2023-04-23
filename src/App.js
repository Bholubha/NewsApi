import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
import "./App.css"
// import { BrowserRouter } from 'react-router-dom'

export class App extends Component {

  state = {
    progress : 0
  }
  setProgress = (progress) =>{
    this.setState({
      progress : progress
    })
  }

  render() {

    return (
      <div style={{backgroundColor:"rgba(52,53,65,var(--tw-bg-opacity))", height : "100%",width:"100%"}}>
  <Navbar/>
  <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />

{/* business
    entertainment
    general
    health
    science
    sports
    technology */}
 {/* <News setProgress = {this.setProgress} key = "general" country = "in" category = "general" />  */}

      <Routes>
      
        <Route exact path = "/" element = {<News setProgress = {this.setProgress} key = "general" country = "in" category = "general" /> }/>
        <Route exact path="/Business" element={<News setProgress = {this.setProgress} key = "business" country = "in" category = "business" />} />
        <Route exact path="/Entertainment" element={<News setProgress = {this.setProgress} key = "entertainment" country = "in" category = "entertainment" />} />
        <Route exact path="/Health" element={<News setProgress = {this.setProgress} key = "health" country = "in" category = "health" />} />
        <Route exact path="/Science" element={<News setProgress = {this.setProgress} key = "science" country = "in" category = "science" />} />
        <Route exact path="/Sports" element={<News setProgress = {this.setProgress} key = "sports" country = "in" category = "sports" />} />
        <Route exact path="/Technology" element={<News setProgress = {this.setProgress} key = "technology" country = "in" category = "technology" />} />
        
      </Routes>

</div>


    )
  }
}

export default App