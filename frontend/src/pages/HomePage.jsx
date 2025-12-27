import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingNotes from "../components/LoadingNotes";

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
      {loading && <LoadingNotes/>}
    </div>
  );
};

export default HomePage;
