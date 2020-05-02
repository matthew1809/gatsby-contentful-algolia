import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './hit.module.css'

export default ({ hit }) => (
  <div className={styles.preview}>
    <img src={hit.heroImage} className={styles.heroImage}></img>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${hit.slug}`}>{hit.title}</Link>
    </h3>
    <small>{hit.publishDate}</small>
    <p>{hit.description}</p>
    {hit.tags &&
      hit.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
)
