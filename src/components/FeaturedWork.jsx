// THE DIFFERENCE BETWEEN THIS AND THE PROJECT VIEW IS THAT
// THERE ARE ONLY FOUR PROJECTS DISPLAYED IN THIS VIEW

import ProjectCard from './Project';

export default function FeaturedWork() {
  return (
    <>
      <p className="ft-title">ft. work</p>

      <div className="ft-work-container">
        <ProjectCard
          info={{
            projectname: 'makegvlgreener',
            img: '/makegvlgreener.png',
            title: 'Make GVL Greener',
            desc: 'Nonprofit Website Extension',
          }}
        />

        <ProjectCard
          info={{
            projectname: 'malovadesigns',
            img: '/malova.png',
            title: 'Malova Designs',
            desc: 'E-Commerce Storefront for a small business',
          }}
        />

        <ProjectCard
          info={{
            projectname: 'sheepandwolves',
            img: '/sheep.png',
            title: 'Sheep & Wolves',
            desc: 'An Interactive Story',
          }}
        />

        <ProjectCard
          info={{
            projectname: '',
            img: '/more-img.png',
            title: 'More',
            desc: 'Latest Projects',
          }}
        />
      </div>
    </>
  );
}
