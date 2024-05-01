import ProjectCard from './Project';

export default function FeaturedWork() {
  return (
    <>
      <p className="ft-title">ft. work</p>

      <div className="ft-work-container">
        <ProjectCard
          info={{
            projectname: 'malovadesigns',
            img: './public/malova.png',
            title: 'Malova Designs',
            desc: 'E-Commerce Storefront for a small business',
          }}
        />

        <ProjectCard
          info={{
            projectname: 'sheepandwolves',
            img: './public/sheep.png',
            title: 'Sheep & Wolves',
            desc: 'An Interactive Story',
          }}
        />

        <ProjectCard
          info={{
            projectname: 'nomnomnavigator',
            img: './public/nomnom.png',
            title: 'NomNom Navigator',
            desc: 'WWC Hackathon Project',
          }}
        />

        <ProjectCard
          info={{
            projectname: '',
            img: './public/kitty-logo.png',
            title: 'More',
            desc: 'Latest Projects',
          }}
        />
      </div>
    </>
  );
}
