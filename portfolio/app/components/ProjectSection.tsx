import React, { useState } from 'react';
import ProjectModal from './modals/ProjectModal';
const projects = [
  {
    title: "Shop Dummy Data",
    description: "Dit was een eigen project voor een shop, waar we gebruik maken van Next.js, Prisma, MongoDB, TypeScript, NextAuth, Vercel en Zustand. Gebruikers kunnen orders plaatsen, betalen en PDF's genereren voor al hun orders.",
    websiteLink: "https://shop-dummy-data.vercel.app/",
    imageUrl: "/urbanbazaar.png"
  },  
  {
    title: "Stageblog",
    description: "Ontwikkelde een blogwebsite met Next.js, Tailwind CSS en Strapi als onderdeel van mijn stage. Bevatte verschillende blogposts en projectupdates om mijn leerproces en bijdragen aan het project te documenteren.",
    websiteLink: "https://vercel-stage.vercel.app/",
    imageUrl: "/blog.png"
  },
  {
    title: "Tom Cambre",
    description: "Voor deze website moest ik in de backend structuur zorgen dat de klant een overzicht van alle transporten had, inclusief details over welk waar werd getransporteerd en hoeveel. Klanten konden ook PDF's genereren van die data. Gebouwd met PHP, MySQL, HTML, jQuery, en Bootstrap.",
    websiteLink: "https://www.tomcambre.be/",
    imageUrl: "/tomcambre.png"
  },
  {
    title: "Darts Training",
    description: "Voor deze klantwebsite heb ik een applicatie ontwikkeld met PHP, MySQL, HTML, jQuery en Bootstrap. De applicatie biedt spellen en cursussen aan, en stelt gebruikers in staat om aankopen te doen.",
    websiteLink: "https://www.dartstraining.be/",
    imageUrl: "/dartstraining.png"
  },
  {
    title: "Clubs Info",
    description: "Ontwikkelde een website met Next.js, Strapi en Vercel. Op deze webpagina kunnen gebruikers een overzicht verkrijgen van verschillende voetbalclubs, waarbij de nadruk ligt op informatieve blogposts, informatie over de clubs en individuele spelers. Dankzij de kracht van Next.js bieden we een gestroomlijnde en boeiende gebruikerservaring, die gebruikers in staat stelt gemakkelijk door de informatie te navigeren.",
    websiteLink: "https://project-madrid-4jc13ow2g-rachadbouhjar-hotmailcom.vercel.app/",
    imageUrl: "/clubs.png"
  },
  {
    title: "The Rock Showroom",
    description: "Ontwikkelde een website met Gatsby als eerbetoon aan de acteur The Rock en een showroom van zijn beste films naar mijn keuze. Bouwde een interactieve website met behulp van Gatsby om een showroom te creëren voor de beste films van de acteur The Rock. Implementeerde functionaliteiten zoals filmoverzichten, om bezoekers een overzicht te geven van zijn indrukwekkende filmcarrière.",
    websiteLink: "https://bouhjar-rachad-website.netlify.app/",
    imageUrl: "/dwayne.png"
  },
];


const ProjectCarousel: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <section key={index} className="projectSection">
          <div
            className="projectCard cursor-pointer border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.imageUrl} alt={project.title} />
            <h2 className="text-xl font-semibold mb-2 p-5">{project.title}</h2>
          </div>
        </section>
      ))}
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProjectCarousel;
