import React, { useState } from "react";
import Dropzone from "react-dropzone";
import SampleAudioPlayer from "./SampleAudioPlayer";
import "../App.css";

const AudioPlayer = () => {
  const [audioUrl, setAudioUrl] = useState(null);
  const [key, setKey] = useState(0);

  const handleFileChange = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const audioBlob = new Blob([file], { type: "audio/mpeg" });
    const audioUrl = URL.createObjectURL(audioBlob);
    setAudioUrl(audioUrl);
    setKey(key + 1);
  };

  const handleSelectSample = (url) => {
    setAudioUrl(url);
    setKey(key + 1);
  };

  const sampleFiles = [
    { name: "Sample 1", url: require("./audio/sample1.mp3") },
    { name: "Sample 2", url: require("./audio/sample2.mp3") },
    { name: "Sample 3", url: require("./audio/sample3.mp3") },
  ];

  return (
    <>
      <Dropzone onDrop={handleFileChange}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="audio-player-container">
            <input {...getInputProps()} />
            {audioUrl ? (
              <audio key={key} controls>
                <source src={audioUrl} type="audio/mpeg" />
              </audio>
            ) : (
              <>
                <p>
                  Drag and drop an audio file here, or click to select a file
                </p>
                <button className="upload-button">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 11.5h-3.5V7a.5.5 0 00-1 0v4.5H8a.5.5 0 000 1h4.5V17a.5.5 0 001 0v-4.5H16a.5.5 0 000-1z" />
                  </svg>
                  Upload
                </button>
              </>
            )}
          </div>
        )}
      </Dropzone>
        <SampleAudioPlayer
          sampleFiles={sampleFiles}
          onSelectSample={handleSelectSample}
        />
    </>
  );
};

export default AudioPlayer;
