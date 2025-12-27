import { Link } from 'react-router-dom';
import { PenSquare, Trash2 } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="block group"
    >
      <div
        className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 hover:border-base-content/20 overflow-hidden h-56 flex flex-col"
        style={{ backgroundColor: note.color || '#feff9c' }}
      >
        <div className="card-body p-6 flex-1 flex flex-col">
          {/* Title */}
          <h2 className="card-title text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-200">
            {note.title}
          </h2>

          {/* Content */}
          <p className="text-gray-800 font-semibold leading-relaxed mb-4 overflow-hidden">
            {note.content}
          </p>

          {/* Footer pushed to the bottom */}
          <div className="mt-auto pt-4">
            {/* Created At */}
            <div className="text-sm font-bold text-gray-800 mb-4">
              {formatDate(note.createdAt)}
            </div>

            {/* Action Icons */}
            <div className="flex items-center justify-end gap-2">
              <button
                className="btn btn-ghost btn-sm text-gray-800 hover:text-primary hover:bg-primary/10"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle view/edit action
                  console.log('View/Edit note:', note._id);
                }}
              >
                <PenSquare size={16} />
              </button>
              <button
                className="btn btn-ghost btn-sm text-gray-800 hover:text-error hover:bg-error/10"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle delete action
                  console.log('Delete note:', note._id);
                }}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
