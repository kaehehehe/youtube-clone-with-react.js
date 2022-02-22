class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = { method: 'GET', redirect: 'follow' };
  }

  getMostPopularVideos() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    )
      .then((res) => res.json())
      .then((data) => data.items);
  }

  getSearchVideos(inputValue) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${inputValue}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
      .then((res) => res.json())
      .then((data) =>
        data.items.map((item) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  getChannelsData(video) {
    const { channelId } = video.snippet;
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${this.key}`,
      this.getRequestOptions
    )
      .then((res) => res.json())
      .then((data) => data.items);
  }

  getCommentsData(video) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${video.id}&maxResults=10&key=${this.key}`,
      this.getRequestOptions
    )
      .then((res) => res.json())
      .then((data) => data.items);
  }
}

export default Youtube;
