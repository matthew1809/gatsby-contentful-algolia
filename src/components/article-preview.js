import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => {
  console.log(article)
  return (
    <div className="preview">
      <Img alt="" fluid={article.heroImage.fluid} />
      <h3 className="previewTitle">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      {article.tags &&
        article.tags.map(tag => (
          <p className="tag" key={tag}>
            {tag}
          </p>
        ))}
    </div>
  )
}
