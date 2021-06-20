const DUMMY_EVENTS = [
  {
    id: "1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "971  Mahlon Street, West Roxbury, MA",
    date: "2021-04-12",
    image: "/images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "1621  Brannon Avenue, High Island, TX",
    date: "2021-05-31",
    image: "/images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Consumer Electronics Shows",
    description:
      "CES has been the global gathering place for all those involved in consumer technologies and the next generation of innovations, showcasing products in the areas of 3D Printing, Augmented & Virtual Reality, Computer Hardware/Software/Services, and more.",
    location: "2019  Maple Avenue, Las Vegas, NV",
    date: "2021-10-08",
    image: "/images/electronics-event.jpg",
    isFeatured: true,
  },
  {
    id: "4",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "307  Cherry Camp Road, Winchester, NY",
    date: "2022-03-15",
    image: "/images/extrovert-event.jpg",
    isFeatured: true,
  },
  {
    id: "5",
    title: "Gartner Digital Workplace Summit",
    description:
      "At the Gartner Digital Workplace Summit, the world’s leading IT advisory company offers you the chance to be the first to hear about emerging trends and latest predictions surrounding the future of work, provides an action plan to build the digital workplace of tomorrow, and offers real-world solutions for leveraging these technologies your organization.",
    location: "3692  Mayo Street, Los Angeles, CA",
    date: "2022-07-11",
    image: "/images/workplace-event.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
