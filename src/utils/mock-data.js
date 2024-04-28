export const mockEventDetails = {
    id: 'fah819-38110-da-1232',
    name: "Stephanie's Wedding Invitation",
    description: "This is a description of the event",
    date: "2021-09-21",
    time: "12:00 PM",
    location: "1234 Fake St, Fake City, Fake State 12345",
    attendanceStatus: { attending: 287, notAttending: 100, pending: 30 },
    emailStatus: { sent: 23, notSent: 10, pending: 15 },
    guestList: [
        { id: 1, first_name: "Tolu", last_name: "Adebayo", email: "toluadebayo@gmail.com", status: "attending", plus_ones: ["Hassan Ibrahim", "Amelia Jones", "Carlos Silva"] },
        { id: 2, first_name: "Akira", last_name: "Tanaka", email: "akira@outlook.com", status: "not attending", plus_ones: ["Sophia Kim", "Fatima Ali"] },
        { id: 3, first_name: "Yousef", last_name: "Al-Farsi", email: "yousefal-farsi@protonmail.com", status: "attending", plus_ones: [] },
        { id: 4, first_name: "Matteo", last_name: "Rossi", email: "matteo@rossi@hotmail.com,", status: "pending", plus_ones: ["Mohammed Ahmed", "Alejandro Lopez"] },
        { id: 5, first_name: "Emily", last_name: "Johnson", email: "emily.johnson@aol.com", status: "attending", plus_ones: ["Sophie Martin", "Ahmed Hassan", "Mia Thompson"] },
        { id: 6, first_name: "Maha", last_name: "Khalifa", email: "maha@khalifa@gmail.com", status: "not attending", plus_ones: ["Aaliyah Brown", "Daniel Garcia", "Maria Lopez"] },
        { id: 7, first_name: "Marcelo", last_name: "Lopez", email: "marcelolopez@yahoo.com", status: "attending", plus_ones: ["Lucas Nguyen"] },
        { id: 8, first_name: "Sofia", last_name: "Costa", email: "scosta@gmail.com", status: "pending", plus_ones: ["Olivia Rodriguez", "Liam Martinez", "Yara Nasser"] },
        { id: 9, first_name: "Moses", last_name: "Osei", email: "mosesosei@outlook.com", status: "attending", plus_ones: ["Sophia Silva"] }
    ],
};

export const mockMessages = []