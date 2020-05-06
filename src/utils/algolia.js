const postQuery = `{
  posts: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
    edges {
      node {
        title
        slug
        objectID: contentful_id
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          file {
            url 
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
  }`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => {
      const flat = flatten(data.posts.edges)

      const final = flat.map(edge => {
        return {
          title: edge.title,
          slug: edge.slug,
          objectID: edge.objectID,
          publishDate: edge.publishDate,
          description: edge.description.childMarkdownRemark.html,
          tags: edge.tags,
          heroImage: 'http:' + edge.heroImage.file.url,
        }
      })

      return final
    },
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries
