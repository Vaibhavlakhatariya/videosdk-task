//generated it from the VideoSDK Dashboard
//  https://app.videosdk.live/api-keys
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkMWQ0ZWI1Yi1hYzdmLTQ3MzQtYjUyNy0zYzE1ZjRhNjM3OWQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTc2MDM4NDU4NywiZXhwIjoxNzYwOTg5Mzg3fQ.gJTHc8cBB58B3pvj8HHc9OPGcRIf3tNN8CD_6bSaVF4";

// API call to create a new meeting room
export const createMeeting = async ({ token }) => {
  try {
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
      method: "POST",
      headers: {
        authorization: `${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!res.ok) {
      throw new Error(`Failed to create meeting: ${res.statusText}`);
    }

    const { roomId } = await res.json();
    console.log("Meeting created with ID:", roomId);
    return roomId;
  } catch (error) {
    console.error("Error creating meeting:", error);
    throw error;
  }
};

// API call to get room information
export const getRoomInfo = async ({ roomId }) => {
  try {
    const res = await fetch(
      `https://api.videosdk.live/v2/rooms/${roomId}`,
      {
        method: "GET",
        headers: {
          authorization: `${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to get room info: ${res.statusText}`);
    }

    const roomData = await res.json();
    return roomData;
  } catch (error) {
    console.error("Error getting room info:", error);
    throw error;
  }
};

// API call to enable media relay between two rooms
export const enableMediaRelay = async ({ fromRoomId, toRoomId, participantId }) => {
  try {
    const res = await fetch(
      `https://api.videosdk.live/v2/rooms/${fromRoomId}/media-relay`,
      {
        method: "POST",
        headers: {
          authorization: `${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          targetRoomId: toRoomId,
          participantId: participantId,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to enable media relay: ${res.statusText}`);
    }

    const result = await res.json();
    console.log("Media relay enabled:", result);
    return result;
  } catch (error) {
    console.error("Error enabling media relay:", error);
    throw error;
  }
};

// API call to disable media relay
export const disableMediaRelay = async ({ roomId, relayId }) => {
  try {
    const res = await fetch(
      `https://api.videosdk.live/v2/rooms/${roomId}/media-relay/${relayId}`,
      {
        method: "DELETE",
        headers: {
          authorization: `${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to disable media relay: ${res.statusText}`);
    }

    console.log("Media relay disabled");
    return true;
  } catch (error) {
    console.error("Error disabling media relay:", error);
    throw error;
  }
};