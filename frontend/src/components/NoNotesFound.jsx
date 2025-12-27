import { StickyNote } from "lucide-react";
import { Link } from "react-router-dom";

const NoNotesFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <StickyNote className="size-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-bold mb-4">No Notes Yet</h2>
      <p className="text-gray-600 mb-6">Start by creating your first note.</p>
      <Link to="/create" className="btn btn-primary">
        Add Your First Note
      </Link>
    </div>
  );
};

export default NoNotesFound;