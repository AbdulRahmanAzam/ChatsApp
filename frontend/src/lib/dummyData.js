export const DUMMY_USERS = [
  {
    _id: "dummy1",
    fullName: "John Doe",
    email: "john@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    online: true
  },
  {
    _id: "dummy2",
    fullName: "Jane Smith",
    email: "jane@example.com",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true
  },
  {
    _id: "dummy3",
    fullName: "Robert Johnson",
    email: "robert@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
    online: false
  }
];

export const DUMMY_MESSAGES = {
  dummy1: [
    {
      _id: "msg1",
      senderId: "dummy1",
      receiverId: "current_user",
      text: "Hey there! How are you doing?",
      createdAt: "2025-09-05T10:30:00Z"
    },
    {
      _id: "msg2",
      senderId: "current_user",
      receiverId: "dummy1",
      text: "I'm good, thanks! How about you?",
      createdAt: "2025-09-05T10:32:00Z"
    },
    {
      _id: "msg3",
      senderId: "dummy1",
      receiverId: "current_user",
      text: "Pretty good! Working on a new project.",
      createdAt: "2025-09-05T10:33:00Z"
    }
  ],
  dummy2: [
    {
      _id: "msg4",
      senderId: "dummy2",
      receiverId: "current_user",
      text: "Did you finish the report?",
      createdAt: "2025-09-05T09:15:00Z"
    },
    {
      _id: "msg5",
      senderId: "current_user",
      receiverId: "dummy2",
      text: "Yes, I sent it to you via email.",
      createdAt: "2025-09-05T09:17:00Z"
    }
  ],
  dummy3: [
    {
      _id: "msg6",
      senderId: "dummy3",
      receiverId: "current_user", 
      text: "Meeting at 3pm tomorrow?",
      createdAt: "2025-09-04T14:20:00Z"
    }
  ]
};