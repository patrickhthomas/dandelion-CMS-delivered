module.exports.data = {
  posts: `{
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          slug
          publishDate
        }
      }
    }
  }`,
  pages: `{
    allContentfulPage {
      edges {
        node {
          slug
        }
      }
    }
  }`,
  tags: `{
    allContentfulTag {
      edges {
        node {
          slug
          post {
            id
          }
        }
      }
    }
  }`,
  days: `{
    allContentfulDay(sort: {fields: tag, order: ASC}) {
      edges {
        node {
          dayOfWeek
          closeTime
          areYouOpen
          openTime
        }
      }
    }
  }`,
  products: `{
    allContentfulProduct(sort: {fields: id, order: ASC}) {
      edges {
        node {
          slug
          id
        }
      }
    }
  }`,
}
