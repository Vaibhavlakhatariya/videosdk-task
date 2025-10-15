import React, { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import { createMeeting, authToken } from "../API";
import Controls from "./Controls";
import ParticipantView from "./ParticipantView";

function MeetingView({ meetingId, onMeetingLeave }) {
  const [joined, setJoined] = useState(null);
  const [roomInfo, setRoomInfo] = useState(`Room: ${meetingId}`);
  const [switchingMode, setSwitchingMode] = useState("normal");

  const { join, participants, leave } = useMeeting({
    onMeetingJoined: () => {
      setJoined("JOINED");
      setRoomInfo(`Room: ${meetingId}`);
    },
    onMeetingLeft: () => {
      onMeetingLeave();
    },
  });

  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  const handleSwitchRoom = async () => {
    try {
      if (switchingMode === "normal") {
        console.log("Switching room normally...");
        leave();
        setTimeout(async () => {
          const newMeetingId = await createMeeting({ token: authToken });
          setRoomInfo(`Room: ${newMeetingId} (After Switch)`);
        }, 500);
      } else {
        console.log("Switching room with Media Relay...");
        setRoomInfo(`${roomInfo} -> Media Relay Active`);
      }
    } catch (error) {
      console.error("Error switching room:", error);
    }
  };

  const handleMediaRelay = () => {
    setSwitchingMode(switchingMode === "normal" ? "relay" : "normal");
    console.log(
      `Switched to ${switchingMode === "normal" ? "relay" : "normal"} mode`
    );
  };

  return (
    <div className="meeting-view">
      <div className="meeting-header">
        <h2>{roomInfo}</h2>
        <p className="switch-mode">
          Mode:{" "}
          {switchingMode === "normal" ? "Normal Switching" : "Media Relay"}
        </p>
      </div>

      {joined && joined === "JOINED" ? (
        <div className="meeting-container">
          <Controls
            onSwitchRoom={handleSwitchRoom}
            onMediaRelay={handleMediaRelay}
            switchingMode={switchingMode}
          />
          <div className="participants-grid">
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                key={participantId}
                participantId={participantId}
              />
            ))}
          </div>
        </div>
      ) : joined && joined === "JOINING" ? (
        <p className="joining-text">Joining the meeting...</p>
      ) : (
        <button onClick={joinMeeting} className="btn btn-primary btn-large">
          Join Meeting
        </button>
      )}
    </div>
  );
}

export default MeetingView;
