import React from 'react'
import '../containers/App.css'
import './style.css'
import showcase from '../assets/showcase.png'
export default function Showcase() {
  return (
    <section className="section-3">
      <div className="row main-row">
        <div className="col-md-7 col-sm-12 col-12">
          <div className="main-content">
          <h1>Showcase your app in out integration directory</h1>
          <p className="mt-4">Building Something soecial? We are always looking to work with partners who wants to help the world bring their ideas to life</p>
          <div className="btn_wrapper">
            <button className="partner-btn me-3">Become a partner</button>
            <button className="view-int-btn">View Integrations</button>
          </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 col-12">
          <div className="main-img-div">
            <img src={showcase} alt="showcase" className="img-fluid" width="600" />
          </div>
        </div>
      </div>
    </section>
  )
}
