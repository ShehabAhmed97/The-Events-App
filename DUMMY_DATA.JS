 const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/programming-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Web development is AWESOME',
      description:
        "Each and every day we take journeys. We embark on customer journeys in both the physical and digital worlds. Years ago our journeys were limited to store fronts and physical goods. Today we live in a multimedia world of websitesThat's why we came up with this event.",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/web-development-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Meet your new bestie',
      description:
        'Did you know that every 38 seconds a pet is adopted at a Pet store? If you have room in your heart & home to #adoptlove, give a pet in need the loving home they deserve. Meet your new bestie.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/animal-adoption-event.jpg',
      isFeatured: true,
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
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id == id);
  }