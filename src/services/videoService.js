import Hls from 'hls.js';
Hls.DefaultConfig
// Hls.isSupported

if (Hls.isSupported()) {
  console.log('hello hls.js!');
  console.log(Hls.DefaultConfig);
}

const hls = new Hls();

export default class Video {
  constructor(urlVideo) {
    this.url = urlVideo;
    this.video = document.createElement('video');
  }
  getVideo = async () => {
    try {
      // const video = document.createElement('video');
      this.video.id = 'course-video';
      console.log(this.url);

      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !');
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        console.log(
          'manifest loaded, found ' + data.levels.length + ' quality level'
        );
      });
      hls.loadSource(this.url);
      // bind them together
      hls.attachMedia(this.video);
      // console.log(hls.attachMedia(video));
      return this.video;
    } catch (error) {
      console.log(error);
    }
  }
}

// 'http://my.streamURL.com/playlist.m3u8'
// "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8"