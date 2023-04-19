import React from 'react';

const SampleAudioPlayer = ({ sampleFiles, onSelectSample }) => {

    const handleClick = (url) => {
        onSelectSample(url);
        console.log(url)
      };

    return (
      <div className="sample-files-container">
        <p>Or choose a sample file:</p>
        {sampleFiles.map((file, index) => (
          <button key={index} onClick={() => handleClick(file.url)}>
            {file.name}
          </button>
        ))}
      </div>
    );
  };

export default SampleAudioPlayer;
