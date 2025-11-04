import { useState } from 'react';
import supabase from '../lib/supabaseClient';

export default function CreateEvent() {
  const [form, setForm] = useState({ title: '', description: '', city: '', capacity: 0 });

  const createEvent = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('events').insert([{ 
      host_id: user.id, ...form, status: 'open'
    }]);
    alert('Event created!');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
      <input placeholder="City" onChange={e => setForm({...form, city: e.target.value})} />
      <textarea placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} />
      <input type="number" placeholder="Capacity" onChange={e => setForm({...form, capacity: e.target.value})} />
      <button onClick={createEvent}>Create</button>
    </div>
  );
}

