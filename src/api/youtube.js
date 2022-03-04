class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = { method: 'GET', redirect: 'follow' };
  }

  async getMostPopularVideos() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    );
    const data = await response.json();
    return data.items;
  }

  async getSearchVideos(inputValue) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${inputValue}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const data = await response.json();
    return data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async getChannelsData(video) {
    const { channelId } = video.snippet;
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${this.key}`,
      this.getRequestOptions
    );
    const data = await response.json();
    return data.items;
  }

  async getCommentsData(video) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${video.id}&maxResults=10&key=${this.key}`,
      this.getRequestOptions
    );
    const data = await response.json();
    return data.items;
  }
}

export default Youtube;
