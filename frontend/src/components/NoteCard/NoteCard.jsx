import { Link } from 'react-router-dom';
import { PenSquare, Trash2 } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';
import toast from 'react-hot-toast';
import api from '../../lib/axios';
import { useState } from 'react';
import DeleteModal from '../DeleteModal';

const NoteCard = ({ note, setNotes }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const isDark = note.color === "#1e293b";
  const textColor = isDark ? "text-white" : "text-gray-800";
  const btnColor = isDark ? "text-white hover:text-primary" : "text-gray-800 hover:text-primary";
  const btnDeleteColor = isDark ? "text-white hover:text-error" : "text-gray-800 hover:text-error";

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${note._id}`);
      toast.success("Note deleted successfully!");
      setNotes((prevNotes) => prevNotes.filter((n) => n._id !== note._id));
    } catch (error) {
      toast.error("Failed to delete note");
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <>
      <Link
        to={`/note/${note._id}`}
        className="block group"
      >
        <div
          className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 hover:border-base-content/20 overflow-hidden h-56 flex flex-col"
          style={{ backgroundColor: note.color || '#feff9c' }}
        >
          <div className="card-body p-6 flex-1 flex flex-col">
            <h2 className={`card-title text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200 ${textColor}`}>
              {note.title}
            </h2>

            <p className={`font-semibold leading-relaxed mb-4 overflow-hidden ${textColor}`}>
              {note.content}
            </p>

            <div className="mt-auto pt-4">
              <div className={`text-sm font-bold mb-4 ${textColor}`}>
                {formatDate(note.createdAt)}
              </div>

              <div className="flex items-center justify-end gap-2">
                <button
                  className={`btn btn-ghost btn-sm hover:bg-primary/10 ${btnColor}`}
                >
                  <PenSquare size={16} />
                </button>
                <button
                  className={`btn btn-ghost btn-sm hover:bg-error/10 ${btnDeleteColor}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDeleteModalOpen(true);
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Note"
        message="Are you sure you want to delete this note? This action cannot be undone."
      />
    </>
  );
};

export default NoteCard;
