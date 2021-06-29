import React from 'react'
import './style.css'
export default function List({data}) {
  return (
    <ul className="footer-list">
      {data?.map((item, i) => {
        return <li key={i}><p>{item}</p></li>
      })
      }
    </ul>
  );
}
