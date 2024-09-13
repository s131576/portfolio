import React, { useState } from 'react';
import ProjectModal from './modals/ProjectModal';
const projects = [
  {
    title: "DashI",
    description: "Gebruikers kunnen hun uitgaven bijhouden, categoriseren en inzicht krijgen in hun bestedingen. COVID - 19 Grafieken, spraak naar PDF. Toekomstige functies: Weerinformatie en een nieuwssectie toe te voegen  voor een uitgebreidere ervaring.",
    websiteLink: "https://rb-managment.vercel.app/",
    imageUrl: "/dashi.png"
  },
  {
    title: "Shop",
    description: "E-commerce platform waar gebruikers orders kunnen plaatsen, betalen en automatisch PDF-facturen genereren. Gebouwd met Next.js, Prisma, MongoDB, TypeScript, NextAuth, Vercel en Zustand.",
    websiteLink: "https://shop-dummy-data.vercel.app/",
    imageUrl: "/urbanbazaar.png"
  },
  {
    title: "Tom Cambre",
    description: "Backend oplossing voor transportbeheer, met gedetailleerd overzicht van transporten en PDF-generatie. Gebouwd met PHP, MySQL, HTML, Javascript en Bootstrap.",
    websiteLink: "https://www.tomcambre.be/",
    imageUrl: "/tomcambre.png"
  },
  {
    title: "Stageblog",
    description: "Blogplatform om mijn stage-ervaringen en projecten te delen, gebouwd met Next.js, Tailwind CSS en Strapi. Documenteert mijn leerproces en projecten.",
    websiteLink: "https://vercel-stage.vercel.app/",
    imageUrl: "/blog.png"
  },
  {
    title: "Darts Training",
    description: "Webapplicatie voor trainingen en aankopen, gericht op dartsspelers. Gebouwd met PHP, MySQL en Bootstrap.",
    websiteLink: "https://www.dartstraining.be/",
    imageUrl: "/dartstraining.png"
  },
  {
    title: "Clubs Info",
    description: "Webpagina voor het opzoeken van voetbalclubs, inclusief clubdetails en statistieken. Gebouwd met Next.js, Strapi, Tailwind CSS en Vercel.",
    websiteLink: "https://project-madrid-4jc13ow2g-rachadbouhjar-hotmailcom.vercel.app/",
    imageUrl: "/clubs.png"
  },
  {
    title: "The Rock Showroom",
    description: "Fanwebsite en showroom van Dwayne 'The Rock' Johnson's beste films. Gebouwd met Gatsby en gehost op Netlify.",
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
        <section key={index} className="projectSection m-10">
          <div
            className="projectCard cursor-pointer border rounded-lg p-4 mg-5 shadow-lg hover:shadow-xl transition-shadow duration-300 "
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
