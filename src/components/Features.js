import React from 'react'
import '../containers/App.css'
import './style.css'
import img1 from '../assets/apiTeam@2x-5a72bbd0df3f17c4851dca773b2b1b8f-3ad8f.png'
import img2 from '../assets/graphQL.png'
import img3 from '../assets/superchargeWorkflow.png'
export default function Features() {
  return (
    <section className="section-2">
      <div class="feature_content">
        <h1>Experince the freedom to build features, right away.</h1>
        <p>You can now harness components of our platform and build powerfull integrations for our 2 million users - or simply just for your team</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="features">
            <figure>
              <img src={img1} alt="image1" />
            </figure>
            <div className="img-text">
              <h4>Dedicated API Team</h4>
              <p>Our team are available for user's question via Slack Developer Community And Email</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="features">
          <figure>
            <img src={img2} alt="graphQL" />
          </figure>
          <div className="img-text">
            <h4>Our API uses Graph QL</h4>
            <p>Our team are available for user's question via Slack Developer Community And Email</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="features">
          <figure>
            <img src={img3} alt="superchargeWorkflow" />
          </figure>
          <div className="img-text">
            <h4>Supercharge your workflow</h4>
            <p>Our team are available for user's question via Slack Developer Community And Email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
