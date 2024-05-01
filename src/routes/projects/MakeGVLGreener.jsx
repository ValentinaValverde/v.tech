import { TopWithButton } from '../../components/ProjectComponents/Top';
import { ForWho } from '../../components/ProjectComponents/ForWho';
import { CoolThing } from '../../components/ProjectComponents/CoolThing';
import { TechSide } from '../../components/ProjectComponents/TechSide';
import GalleryCard from '../../components/ProjectComponents/GalleryCard';

export default function MakeGvlGreener() {
  return (
    <>
      <TopWithButton
        project={{
          title: 'Make GVL Greener',
          description: 'Nonprofit Website Extension',
          buttontext: 'Visit Site',
          buttonlink: 'https://makegvlgreener.vercel.app/programs',
        }}
      />
      <ForWho
        info={{
          img: '/makegvlgreener.png',
          script:
            'This was for a nonprofit organization called Make GVL Greener. The owner wanted a page to display companies that support the cause. She also wanted to implement a sign up feature for new businesses and companies could see their name on the page. The site consists of a main page, separate company pages, a navbar and footer, and a sign up form component.',
          objective: 'Who is this for?',
        }}
      />
      <CoolThing
        info={{
          title: 'Sign Up Form',
          desc: 'This form was something I worked really hard on. My challenges regarding this included using useState to make it a modal, and including form validation. Form validation was implemented using Formik and Yup, and I worked to make the form match a similar form that was on the original website.',
          img: '/gvlsignup.png',
        }}
      />

      <div className="gallery">
        <p className="upper gallery-title"> gallery</p>
        <div className="gallery-card-container">
          <GalleryCard
            info={{
              img: '/searchfeature.png',
              cpt: 'Search Feature',
              alt: 'Search Feature Image',
            }}
          />
          <GalleryCard
            info={{
              img: '/formikyup.png',
              cpt: 'Formik / Yup Implementation',
              alt: 'Formik / Yup Image',
            }}
          />
          <GalleryCard
            info={{
              img: '/oldform.png',
              cpt: 'Original Website Form',
              alt: 'Original Website Form Image',
            }}
          />
          <GalleryCard
            info={{
              img: '/bottomhalf.png',
              cpt: 'Footer View',
              alt: 'Footer Image',
            }}
          />
          <GalleryCard
            info={{
              img: '/mobilecompanyview.png',
              cpt: 'Company Mobile View',
              alt: 'Company Mobile View Image',
            }}
          />
          <GalleryCard
            info={{
              img: '/companyview.png',
              cpt: 'Company View',
              alt: 'Company View Image',
            }}
          />
        </div>
      </div>

      <TechSide
        info={{
          title: 'Tech',
          tech1: 'Next.js',
          tech2: 'Notion DB',
          tech3: 'Amazon S3',
          tech4: 'Fuse.js',
          tech5: 'Formik & Yup',
        }}
      />
    </>
  );
}
