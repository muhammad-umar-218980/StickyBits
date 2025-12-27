import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingNotes = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="animate-spin text-primary mb-4" size={48} />
      <p className="text-lg font-medium text-base-content">Loading Notes...</p>
    </div>
  );
};

export default LoadingNotes;