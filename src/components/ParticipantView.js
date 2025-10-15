import React, { useEffect, useRef } from "react";
import { useParticipant, VideoPlayer } from "@videosdk.live/react-sdk";

function ParticipantView({ participantId }) {
  const micRef = useRef(null);
  const { micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);
        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("audioElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div className="participant-view">
      <p className="participant-info">
        {displayName} {isLocal && "(You)"}
      </p>
      <div className="media-status">
        Webcam: {webcamOn ? "✓" : "✗"} | Mic: {micOn ? "✓" : "✗"}
      </div>
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn && (
        <VideoPlayer
          participantId={participantId}
          type="video"
          containerStyle={{
            height: "300px",
            width: "100%",
            backgroundColor: "#000",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        />
      )}
    </div>
  );
}

export default ParticipantView;
