import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingNotes from "../components/LoadingNotes";
import Navbar from "../components/Navbar/Navbar"

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get("http://localhost:5001/api/notes");
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
    <div>
      <Navbar />
      {loading && <LoadingNotes/>}

      {notes.length > 0 && (
        <div>
          {notes.map((note)=>(
            <div key={note._id} className="border p-4 m-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">{note.title}</h2>  
              <p className="text-gray-700">{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
