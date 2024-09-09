import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  websiteLink: string;
  imageUrl: string; 
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white max-w-4xl w-full lg:h-96 rounded-lg shadow-lg overflow-hidden relative flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-gray-900 hover:text-black z-10 transition-colors duration-300 border bg-gray-300 border-indigo-500/100 rounded p-2"
        >
          &times;
        </button>
        <div className="relative w-full md:w-3/5 h-96 md:h-auto">
          <Image
            src={project.imageUrl}
            alt={project.title || 'Project Image'}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="md:w-2/5  flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-600">{project.title}</h2>
            <p className="text-gray-700 mb-8">{project.description}</p>
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Ontdek Meer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
