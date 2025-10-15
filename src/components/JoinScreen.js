import React, { useState } from "react";

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState("");

  const onClick = async () => {
    await getMeetingAndToken(meetingId || null);
  };

  return (
    <div className="join-screen">
      <h1>VideoSDK Room Switching Demo</h1>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
      />
      <div className="button-group">
        <button onClick={onClick} className="btn btn-primary">
          Join Existing Meeting
        </button>
        <button
          onClick={() => getMeetingAndToken(null)}
          className="btn btn-success"
        >
          Create New Meeting
        </button>
      </div>
    </div>
  );
}

export default JoinScreen;
