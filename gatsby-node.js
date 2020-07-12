const axios = require("axios")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  const { key, part, channelId, chart, maxResults = 6 } = options

  const result = await axios({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    params: {
      key,
      part,
      channelId,
      chart,
      maxResults,
    },
  }).catch(error => console.error(error.message))

  const finalResult = result.data.items

  finalResult.forEach(item => {
    const node = {
      ...item,
      id: createNodeId(`MostPopular-${item.etag}`),
      videoId: item.id.videoId,
      internal: {
        type: "MostPopularVideo",
        contentDigest: createContentDigest(item),
      },
    }

    actions.createNode(node)
  })
}
