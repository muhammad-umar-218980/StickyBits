import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { ArrowLeftIcon, TrashIcon, SaveIcon } from "lucide-react";
import ColorPalette from "../components/ColorPalette";
import DeleteModal from "../components/DeleteModal";

const ViewNote = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("#feff9c");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const navigate = useNavigate();
  const paramObject = useParams();
  const id = paramObject.id;

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/notes/${id}`);
        setNote(response.data);
        setEditedTitle(response.data.title);
        setEditedContent(response.data.content);
        setSelectedColor(response.data.color || "#feff9c");
      } catch (error) {
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleSave = async () => {
    if (!editedTitle.trim() || !editedContent.trim()) {
      toast.error("Title and content are required");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/notes/${id}`, {
        title: editedTitle,
        content: editedContent,
        color: selectedColor,
      });
      setNote({ ...note, title: editedTitle, content: editedContent, color: selectedColor });
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Note not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="btn btn-ghost mb-6"
          >
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </button>

          <div
            className="card text-white shadow-xl"
            style={{ backgroundColor: "rgb(11, 17, 44)" }}
          >
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-gray-300 font-medium">Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-gray-300 font-medium">Content</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32 w-full text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-gray-300 font-medium">Color</span>
                </label>
                <div className="bg-base-100/10 p-4 rounded-lg backdrop-blur-sm">
                  <ColorPalette
                    selectedColor={selectedColor}
                    onSelect={setSelectedColor}
                  />
                </div>
              </div>

              <div className="card-actions justify-between mt-4">
                <button
                  onClick={handleSave}
                  className="btn btn-primary px-6"
                  disabled={saving}
                >
                  <SaveIcon className="size-4" />
                  {saving ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="btn btn-error px-6"
                >
                  <TrashIcon className="size-4" />
                  Delete Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Note"
        message="Are you sure you want to delete this note? This action cannot be undone."
      />
    </div>
  );
};

export default ViewNote;