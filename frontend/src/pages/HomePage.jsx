import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get("http://localhost:5001/api/notes");
        console.log(response);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    fetchNotes();
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
