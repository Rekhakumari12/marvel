import React from 'react'
import logo from '../assets/blue-.png'
import List from './List'
export default function Footer() {
  const obj = {
    overview: [
      'Why Marvel',
      'Enterprise',
      'Pricing',
      'Request a demo',
      'Explore',
      'Apps',
      'Developer API',
    ],
    features : [
      'Wireframing',
      'Design',
      'Prototyping',
      'Collaboration',
      'Handoff',
      'Integration',
      'Sketch Plugin',
    ],
    support : [
      'Help Center',
      'Terms of Service',
      'Privacy',
      'Security'
    ],
    marvel: [
      'Blog',
      'Our Team',
      'Contact Us',
      'Success Stories',
      'Brand Giudance'
    ],
    follow: [
      'Twitter',
      'Dribble',
      'Facebook',
      'Github',
      'Wrokable'
    ]
  }
  return (
    <footer>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-12 mb-4">
        <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
          <h3>Overview</h3>
          <List data={obj.overview}/>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
          <h3>Overview</h3>
          <List data={obj.features}/>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
          <h3>Support</h3>
          <List data={obj.support}/>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
          <h3>Marvels</h3>
          <List data={obj.marvel}/>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
          <h3>Follow</h3>
          <List data={obj.follow}/>
        </div>
      </div>
  </footer>
  )
}
