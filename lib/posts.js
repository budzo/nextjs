import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
    const query = {
        query: `query getAllPosts {
          posts(first: 3) {
            nodes {
              date
              slug
              title
              excerpt
              featuredImage {
                node {
                  mediaDetails {
                    file
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                  altText
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
                pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
                }
              }
            }
          }
        }`
    };

    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;

    return allPosts;
}

export async function getSinglePost(slug) {
  const query = {
      query: `query getSinglePost {
          post(id: "${slug}", idType: SLUG) {
            content(format: RENDERED)
            date
            excerpt(format: RENDERED)
            modified
            slug
            title(format: RENDERED)
            databaseId
            featuredImage {
              node {
                mediaDetails {
                  sizes {
                    sourceUrl
                    width
                    height
                  }
                }
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }`
  };

  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.post;

  return singlePost;
}

export async function getPostSlugs() {
  const query = {
      query: `query getPostSlugs {
          posts {
            nodes {
              slug
            }
          }
        }`
  };

  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.posts.nodes;
  return slugs;
}