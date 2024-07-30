import React from 'react';

import { AiOutlineDownload } from 'react-icons/ai';

const DownloadButton: React.FC = () => {
  return (
    <a
      href="/path/to/your.pdf"
      download
      className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
    >
      <AiOutlineDownload size={24} className="mr-2" />
      Download CV
    </a>
  );
};
export default DownloadButton;
