import React, { useEffect, useState } from 'react';
import { useRoutes, Outlet } from 'react-router-dom';

const mockEventData = [
  // Your mock event data here...
  {
    $id: '1',
    eventname: 'Event 1',
    description: 'Description for Event 1',
    type: 'Type A',
    audience: 'Audience 1',
    created: 'user1',
    url: 'event1.jpg',
  },
  {
    $id: '2',
    eventname: 'Event 2',
    description: 'Description for Event 2',
    type: 'Type B',
    audience: 'Audience 2',
    created: 'user2',
    url: 'event2.jpg',
  },
  {
    $id: '3',
    eventname: 'Event 3',
    description: 'Description for Event 3',
    type: 'Type A',
    audience: 'Audience 3',
    created: 'user3',
    url: 'event3.jpg',
  },

];

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Simulate fetching event data (you would replace this with an API call)
    setTimeout(() => {
      setEvents(mockEventData);
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-5">
      <h1 className="text-3xl font-bold text-center mb-4">My Active Events</h1>
      {loader ? (
        <p className="text-red-700 mx-auto">Loading....</p>
      ) : (
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((item) => (
            <div key={item.$id} className="bg-white p-4 rounded shadow-md">
              <img
                className="w-full h-auto object-cover rounded"
                alt="event"
                src={item.url}
              />
              <h1 className="text-2xl font-medium mt-2">{item.eventname}</h1>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              <div className="flex mt-2">
                <p className="text-gray-700 text-sm pr-4">Type: {item.type}</p>
                <p className="text-gray-700 text-sm">Audience: {item.audience}</p>
              </div>
              <div className="mt-4">
                <button
                  className="bg-[#f02e65] text-white py-2 px-4 rounded mr-2"
                  onClick={() => {
                    // Handle registration
                    console.log(`Register for ${item.eventname}`);
                  }}
                >
                  Register
                </button>
                {item.created === 'user1' && (
                  <div className="mt-2">
                    <button
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded mr-2"
                      onClick={() => {
                        // Handle view registrations
                        console.log(`View registrations for ${item.eventname}`);
                      }}
                    >
                      View Registrations
                    </button>
                    <button
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded"
                      onClick={() => {
                        // Handle delete event
                        console.log(`Delete ${item.eventname}`);
                      }}
                    >
                      Delete Event
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvents;
