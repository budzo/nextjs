import graphqlRequest from "./graphqlRequest";

export async function getAllEvents() {
    const query = {
        query: `query getAllEvents {
          events(first: 3) {
            nodes {
              date
              slug
              title
              content
              featuredImage {
                node {
                  sourceUrl
                  altText
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
            }
          }
        }`
    };

    const resJson = await graphqlRequest(query);
    const allEvents = resJson.data.events;  // Change "posts" to "events"

    return allEvents;
}

export async function getSingleEvent(slug) {
  const query = {
      query: `query getSingleEvent {
          event(id: "${slug}", idType: SLUG) {
            content(format: RENDERED)
            date
            modified
            slug
            title(format: RENDERED)
            content(format: RENDERED)
            databaseId
            featuredImage {
              node {
                sourceUrl
                altText
                mediaDetails {
                  sizes {
                    sourceUrl
                    width
                    height
                  }
                }
              }
            }
          }
        }`
  };

  const resJson = await graphqlRequest(query);
  const singleEvent = resJson.data.event;  // Change "post" to "event"

  return singleEvent;
}

export async function getEventSlugs() {
  const query = {
      query: `query getEventSlugs {
          events {
            nodes {
              slug
            }
          }
        }`
  };

  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.events.nodes;  // Change "posts" to "events"
  return slugs;
}
