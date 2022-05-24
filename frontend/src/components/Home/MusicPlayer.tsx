import ReactJkMusicPlayer, {
  ReactJkMusicPlayerAudioInfo,
  ReactJkMusicPlayerAudioListProps,
  ReactJkMusicPlayerCustomLocale,
} from '@jeffreyca/react-jinke-music-player';
import * as React from 'react';
import { Badge } from 'react-bootstrap';
import { FADE_DURATION_MS } from '../../Constants';
import { separatorLabelMap } from '../../models/Separator';
import { SongData } from '../../models/SongData';
import { StaticMix } from '../../models/StaticMix';
import { AccompShortBadge, BassBadge, DrumsBadge, OriginalBadge, VocalsBadge } from '../Badges';
import './MusicPlayer.css';

interface Props {
  songData?: SongData;
  staticMix?: StaticMix;
  getAudioInstance: (instance: HTMLAudioElement) => void;
  onAudioPause: (audioInfo: ReactJkMusicPlayerAudioInfo) => void;
  onAudioPlay: (audioInfo: ReactJkMusicPlayerAudioInfo) => void;
}

/**
 * Music player component that controls audio playback. It shows up as a horizontal bar at the
 * bottom of the screen.
 */
class MusicPlayer extends React.Component<Props> {
  render(): JSX.Element | null {
    const { getAudioInstance, songData, staticMix, onAudioPause, onAudioPlay } = this.props;
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      <ReactJkMusicPlayer
        audioLists={audioList}
        getAudioInstance={getAudioInstance}
        audioTitleExtra={audioTitleExtra}
        responsive={false}
        theme="light"
        mode="full" // Show player at bottom of page
        clearPriorAudioLists={true} // Never keep old audio list
        autoPlayInitLoadPlayList={true} // Autoplay after updating audio list
        toggleMode={false} // Disable minimizing audio player bar
        remove={false} // Disable removing tracks from playlist
        drag={false}
        preload={true}
        autoHiddenCover={true}
        showDownload={false}
        showPlayMode={false}
        showReload={false}
        showThemeSwitch={false}
        showLyric={false}
        onAudioPause={onAudioPause}
        onAudioPlay={onAudioPlay}
        locale={{ playListsText: 'Now Playing' } as ReactJkMusicPlayerCustomLocale}
        spaceBar={true}
        volumeFade={{ fadeIn: FADE_DURATION_MS, fadeOut: FADE_DURATION_MS }}
      />
    );
  }
}

export default MusicPlayer;
