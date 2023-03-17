import Hls from 'hls.js/dist/hls.min';

async function getVideo(video, urlVideo) {
  try {
    let hls = new Hls();
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log('video and hls.js are now bound together !');
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level'
      );
    });
    hls.loadSource(urlVideo);
    hls.attachMedia(video);
  } catch (error) {
    console.log(error);
  }
}
export default getVideo;
