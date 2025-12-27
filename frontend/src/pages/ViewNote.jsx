import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { ArrowLeftIcon, TrashIcon, SaveIcon } from "lucide-react";

const ViewNote = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 });

  const parseRgb = (rgbString) => {
    const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match) {
      return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
    }
    return { r: 255, g: 255, b: 255 };
  };

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
        setColor(parseRgb(response.data.color || "rgb(255,255,255)"));
      } catch (error) {
        console.log("Error in fetching the note", error);
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
        color: `rgb(${color.r},${color.g},${color.b})`,
      });
      setNote({ ...note, title: editedTitle, content: editedContent, color: `rgb(${color.r},${color.g},${color.b})` });
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error updating note", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error deleting note", error);
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
            className="card text-white"
            style={{ backgroundColor: "rgb(11, 17, 44)" }}
          >
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Color</span>
                </label>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex-1">
                    <label className="text-sm">Red: {color.r}</label>
                    <input
                      type="range"
                      min="1"
                      max="255"
                      value={color.r}
                      onChange={(e) => setColor({ ...color, r: parseInt(e.target.value) })}
                      className="range range-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm">Green: {color.g}</label>
                    <input
                      type="range"
                      min="1"
                      max="255"
                      value={color.g}
                      onChange={(e) => setColor({ ...color, g: parseInt(e.target.value) })}
                      className="range range-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm">Blue: {color.b}</label>
                    <input
                      type="range"
                      min="1"
                      max="255"
                      value={color.b}
                      onChange={(e) => setColor({ ...color, b: parseInt(e.target.value) })}
                      className="range range-primary"
                    />
                  </div>
                </div>
                <div
                  className="w-full h-8 rounded border"
                  style={{ backgroundColor: `rgb(${color.r},${color.g},${color.b})` }}
                ></div>
              </div>

              <div className="card-actions justify-between">
                <button
                  onClick={handleSave}
                  className="btn btn-primary"
                  disabled={saving}
                >
                  <SaveIcon className="size-4" />
                  {saving ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={handleDelete}
                  className="btn btn-error"
                >
                  <TrashIcon className="size-4" />
                  Delete Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;