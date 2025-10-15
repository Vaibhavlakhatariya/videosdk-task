🎥 VideoSDK React Task — Participant Room Switch
This project demonstrates seamless participant room switching between two rooms using the VideoSDK React SDK.
It covers two approaches — normal room switching and Media Relay–based switching, maintaining audio/video continuity as much as possible.

## 🔥 Features

✅ Join Room A as a host or participant
✅ Seamlessly switch from Room A → Room B
✅ Demonstrate Media Relay to relay streams between rooms
✅ Maintain audio/video continuity during switch
✅ Simple, intuitive UI with control buttons:
Join Room A/create new meeting
Switch to Room B
Trigger switch rooms

## ⚡ Quick Setup

1. Sign up on [VideoSDK](https://app.videosdk.live/) to grab your API Key and Secret.
2. Familiarize yourself with [Token](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/authentication-and-token)

## 🛠 Prerequisites

- React v16 or later
- Node v10 or later
- Valid Video SDK [Account](https://app.videosdk.live/)

## Setup and Installation

1️⃣ Clone the Repository

git clone [https://github.com/yourusername/videosdk-participant-room-switch.git](https://github.com/Vaibhavlakhatariya/videosdk-task.git)

cd videosdk-room-switch

2️⃣ Install Dependencies

npm install

npm install "@videosdk.live/react-sdk@latest"

3️⃣ Add Your VideoSDK Token

Update src/API.js:

export const authToken = "YOUR_TEMPORARY_TOKEN_HERE";

4️⃣ Run the App

npm start

### How to Test the Application

1️⃣ Create and Join a Meeting
Click on “Create New Meeting” to generate a new meeting ID.
You can join this meeting immediately once it’s created.
The app allows you to switch between rooms seamlessly —
simply click “Switch Room (Normal)” to move to another room.
A new meeting ID will be generated automatically, or you can also join an existing meeting using its ID.
All of this happens without reloading the page or reconnecting fully, ensuring a smooth transition.

2️⃣ Test Media Relay Functionality
To experience Media Relay, follow these steps:
Open two browser tabs of the app.
In the first tab, click “Create New Meeting” and join the meeting.
In the second tab, paste the Meeting ID from the first tab into the meeting input box.
Once joined, the Media Relay will automatically activate —
streaming audio and video from one meeting to the other in real time.

✅ You’ll notice that both mic and webcam remain active in both rooms simultaneously,
demonstrating the relay of media between rooms using VideoSDK.

### Limitations & Challenges
Media continuity can still experience a brief delay in normal switching.
Browser permissions may interrupt reinitialization of mic/camera.
Media Relay requires careful token validation and room configuration.
SDK updates or rate limits might affect performance during continuous switches.


🔄 Difference Between Normal Room Switching and Media Relay Switching
Normal Room Switching
In normal switching, the participant completely leaves the current meeting (Room A) and then joins a new meeting (Room B). This process involves disconnecting and reconnecting the audio and video streams, which may cause a short interruption. A new meeting ID is generated or joined, and the participant reinitializes their media streams.
Normal switching is ideal for use cases like breakout sessions, team shifts, or when a user intentionally moves from one meeting to another.

Media Relay Switching
Media Relay offers a more seamless and efficient way to move between rooms. Instead of leaving Room A and rejoining Room B, the participant’s media (audio and video) is relayed from one room to another without a full reconnection. This ensures minimal delay and maintains near-continuous media flow between rooms.
Implementing Media Relay is slightly more advanced, as it requires setting up relay channels to share streams across rooms. However, it provides a much smoother experience and better performance, especially in low-latency environments.
This method is particularly useful for live streaming events, multi-room broadcasts, or stage-based applications where uninterrupted transitions are important.

📖 References
VideoSDK React SDK Documentation
Media Relay Guide
Authentication & Token Setup



