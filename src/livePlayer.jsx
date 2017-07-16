/* eslint react/prop-types: 0 */
import React from 'react';
import JPlayer, { connect, Gui, SeekBar,
  Audio, Title, FullScreen, Mute, Play,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported,
 } from 'react-jplayer';

const LivePlayer = () => (
  <div className="container">
    <div className="text">
      <p>
        Poka tak
      </p>
    </div>
    <div className="text-small">
      <p>
        "I will say: idleness is a toy of the devil - in the first place.
        Second: get exercise - do not smoke weed in the corners there, wank,
        masturbate which of course much the same thing. Just idleness is the devil`s plaything,
        I repeat. Well , the whole world is against me - I`m right!  I'm the inspired by it.
        So guys do not lose your head in the first place. And all the best to you".
      </p>
      <br></br>
      <div>Kama the Bullet</div>
    </div>
    <JPlayer className="jp-sleek">
      <Audio />
      <Gui>
        <div className="jp-controls jp-icon-controls">
          <Play><i className="fa">{/* Icon set in css*/}</i></Play>
          <div className="jp-volume-container">
            <Mute>
              <i className="fa">{/* Icon set in css*/}</i>
            </Mute>
            <div className="jp-volume-slider">
              <div className="jp-volume-bar-container">
                <VolumeBar />
              </div>
            </div>
          </div>
          <div className="jp-title-container">
            <Title />
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </JPlayer>
  </div>
);

const options = {
  id: 'LivePlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'poka tak radio',
    sources: {
      mp3: 'http://listen.radionomy.com/abc-jazz',
    },
  },
};

export default connect(LivePlayer, options);
