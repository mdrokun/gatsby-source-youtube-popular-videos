# `gatsby-source-youtube-popular-video`

Pulls most popular videos from any youtube channel by channel ID.

## Example

In your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-youtube-popular-videos`,
      options: {
        key: "youtube_api_key",
        part: "snippet",
        channelId: process.env.CHANNEL_ID,
        chart: "mostPopular",
        maxResults: 6,
      },
    },
  ],
}
```
