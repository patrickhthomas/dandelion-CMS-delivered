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
  apothecaryProducts: `{
    allBigCommerceProducts {
    edges {
      node {
        id
        name
        images {
          url_standard
          url_thumbnail
          image_file
        }
        price
        description
      }
    }
  }
  }`
}
