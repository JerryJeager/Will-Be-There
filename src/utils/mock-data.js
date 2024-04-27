export const mockEventDetails = {
    title: "Stephanie's Wedding Invitation",
    description: "This is a description of the event",
    date: "2021-09-21",
    time: "12:00 PM",
    location: "1234 Fake St, Fake City, Fake State 12345",
    attendanceStatus: { attending: 287, notAttending: 100, pending: 30 },
    emailStatus: { sent: 23, notSent: 10, pending: 15 },
    guestList: [
        { id: 1, name: "Tolu Adebayo", email: "toluadebayo@gmail.com", status: "attending", plusOnes: ["Hassan Ibrahim", "Amelia Jones", "Carlos Silva"] },
        { id: 2, name: "Akira Tanaka", email: "akira@outlook.com", status: "not attending", plusOnes: ["Sophia Kim", "Fatima Ali"] },
        { id: 3, name: "Yousef Al-Farsi", email: "yousefal-farsi@protonmail.com", status: "attending", plusOnes: [] },
        { id: 4, name: "Matteo Rossi", email: "matteo@rossi@hotmail.com,", status: "pending", plusOnes: ["Mohammed Ahmed", "Alejandro Lopez"] },
        { id: 5, name: "Emily Johnson", email: "emily.johnson@aol.com", status: "attending", plusOnes: ["Sophie Martin", "Ahmed Hassan", "Mia Thompson"] },
        { id: 6, name: "Maha Khalifa", email: "maha@khalifa@gmail.com", status: "not attending", plusOnes: ["Aaliyah Brown", "Daniel Garcia", "Maria Lopez"] },
        { id: 7, name: "Marcelo Lopez", email: "marcelolopez@yahoo.com", status: "attending", plusOnes: ["Lucas Nguyen"] },
        { id: 8, name: "Sofia Costa", email: "scosta@gmail.com", status: "pending", plusOnes: ["Olivia Rodriguez", "Liam Martinez", "Yara Nasser"] },
        { id: 9, name: "Moses Osei", email: "mosesosei@outlook.com", status: "attending", plusOnes: ["Sophia Silva"] }
    ],
};