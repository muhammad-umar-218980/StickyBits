import { useEffect, useState } from "react";
import api from "../lib/axios"
import toast from "react-hot-toast";
import LoadingNotes from "../components/LoadingNotes";
import Navbar from "../components/Navbar/Navbar"
import NoteCard from "../components/NoteCard/NoteCard"
import NoNotesFound from "../components/NoNotesFound";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await api.get("/notes");
        console.log(response);
        setNotes(response.data)
        // toast.success("Notes fetched successfully!");
      } catch (error) {
        console.error("Error fetching notes:", error);
        toast.error("Failed to fetch notes.");
      }finally{
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Navbar />
      {loading && <LoadingNotes/>}

      {
        notes.length === 0 && <NoNotesFound/>
      }

      {notes.length > 0 && (
        // <div>
        //   {notes.map((note)=>(
        //     // <div key={note._id} className="border p-4 m-4 rounded shadow">
        //     //   <h2 className="text-xl font-bold mb-2">{note.title}</h2>  
        //     //   <p className="text-gray-700">{note.content}</p>
        //     // </div>
        //     <NoteCard key = {note._id} note={note} />
        //   ))}
        // </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>

        
      )}
    </div>
  );
};

export default HomePage;
