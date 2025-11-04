import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    supabase.from('events').select('*').then(({ data }) => setEvents(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Upcoming Dinners</h1>
      {events.map(e => (
        <div key={e.id} className="border p-4 mb-3 rounded">
          <h2>{e.title}</h2>
          <p>{e.description}</p>
          <p>City: {e.city}</p>
          <p>Capacity: {e.capacity}</p>
        </div>
      ))}
    </div>
  );
}

