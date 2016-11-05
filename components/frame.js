import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

export default ( { id } ) => (
  <div className={style(styles.photoWrapper)} >
    <div className={style(styles.image)} >
      {id}
    </div>
  </div>

  <div className={style(styles.sidebar)}>
    <ul className={style(styles.sidebarList)}>
      <li>
        <Link href="/profile?id=emil" > @emil </Link>
        - Photo description
      </li>
    </ul>
  </div>
)

const styles = {
  photoWrapper: {
    width: '800px',
    overflow: 'hidden',
    height: '500px',
    display: 'inline-block'
  },

  image: {
    float: 'left',
    width: '600px',
    height: '500px',
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '500px',
    fontSize: '40px'
  },

  sidebar: {
    float: 'right',
    background: '#fff',
    width: '200px',
    height: '500px',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: '20px',
    fontFamily: 'Monaco',
    fontSize: '11px'
  },

  sidebarList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  }
}
