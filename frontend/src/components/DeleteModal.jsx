import { AlertTriangle } from "lucide-react";

const DeleteModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="modal-box bg-base-100 shadow-xl border border-base-200 animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center mb-4">
            <AlertTriangle className="size-6 text-error" />
          </div>
          <h3 className="font-bold text-lg mb-2">{title || "Are you sure?"}</h3>
          <p className="py-4 text-base-content/70">
            {message || "This action cannot be undone. Do you want to proceed?"}
          </p>
        </div>
        <div className="modal-action justify-center gap-4 mt-2">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-error" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </div>
  );
};

export default DeleteModal;
