'use client';

import { useState, useRef, useEffect } from 'react';

const tracks = [
  { name: 'Zen River Calm', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { name: 'Forest Meditation', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { name: 'Ethereal Wind Chimes', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' }
];

export default function ZenSoundscape() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].src;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  return (
    <div className="zen-soundscape-widget" id="soundscapeWidget">
      <audio ref={audioRef} loop src={tracks[currentTrackIndex].src} />

      {/* Floating Trigger Button */}
      <button 
        className="soundscape-trigger" 
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Open Sanctuary Audio"
      >
        <span className={`waveform ${isPlaying ? 'playing' : ''}`} id="waveform">
          <span className="bar-wf"></span>
          <span className="bar-wf"></span>
          <span className="bar-wf"></span>
          <span className="bar-wf"></span>
        </span>
        <svg className="audio-volume-icon" viewBox="0 0 24 24" width="18" height="18">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {/* Expanded Controls Window */}
      {isOpen && (
        <div className="soundscape-panel" id="soundscapePanel" style={{ display: 'block' }}>
          <div className="panel-header">
            <h4>Sanctuary Audio</h4>
            <button className="panel-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Audio Panel">&times;</button>
          </div>

          <div className="panel-body">
            <p className="track-info">Playing: <span>{tracks[currentTrackIndex].name}</span></p>

            <div className={`audio-visualizer ${isPlaying ? 'active' : ''}`}>
              {[...Array(10)].map((_, i) => (
                <div key={i} className="vis-bar"></div>
              ))}
            </div>

            <div className="player-controls">
              <button className="play-pause-btn" onClick={togglePlay} aria-label="Play/Pause">
                {!isPlaying ? (
                  <svg className="play-icon" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg className="pause-icon" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
                  </svg>
                )}
              </button>

              <div className="volume-slider-wrapper">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <input 
                  type="range" 
                  className="volume-slider" 
                  min="0" 
                  max="1" 
                  step="0.05" 
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  aria-label="Volume" 
                />
              </div>
            </div>

            <div className="track-options">
              {tracks.map((t, idx) => (
                <button 
                  key={idx} 
                  className={`track-select-btn ${idx === currentTrackIndex ? 'active' : ''}`}
                  onClick={() => selectTrack(idx)}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
