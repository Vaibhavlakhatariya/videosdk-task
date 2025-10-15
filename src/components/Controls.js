import React from "react";
import { useMeeting } from "@videosdk.live/react-sdk";

function Controls({ onSwitchRoom, onMediaRelay, switchingMode }) {
  const { leave, toggleMic, toggleWebcam, participants } = useMeeting();

  return (
    <div className="controls">
      <div className="control-buttons">
        <button onClick={() => toggleMic()} className="btn btn-secondary">
          Toggle Mic
        </button>
        <button onClick={() => toggleWebcam()} className="btn btn-secondary">
          Toggle Webcam
        </button>
        <button onClick={onSwitchRoom} className="btn btn-warning">
          {switchingMode === "normal"
            ? "Switch Room (Normal)"
            : "Switch Room (Media Relay)"}
        </button>
        <button onClick={leave} className="btn btn-danger">
          Leave Meeting
        </button>
      </div>
      <div className="participant-count">Participants: {participants.size}</div>
    </div>
  );
}

export default Controls;
