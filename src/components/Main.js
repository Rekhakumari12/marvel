import React from 'react'
import '../containers/App.css'
import './style.css'
import illustration from '../assets/illustration.png'
export default function Main() {
  return (
    <section className="section-1">
      <div className="row main-row">
        <div className="col-md-6 col-sm-12 col-12">
          <div className="main-content">
          <h1>Let's build the future of design, now.</h1>
          <p>Create amazing tools and intergration for 1 million users of customers Marvel for your team.</p>
          <div className="btn_wrapper">
            <button className="submit-btn">Submit your app</button>
            <button className="view-btn">View API Docs</button>
          </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-12">
          <div className="main-img-div">
            <img src={illustration} alt="illustration" className="img-fluid" width="600" />
          </div>
        </div>
      </div>
    </section>
  )
}
