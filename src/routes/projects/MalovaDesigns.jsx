import { Top } from '../../components/ProjectComponents/Top';
import { ForWho } from '../../components/ProjectComponents/ForWho';
import { MobileView } from '../../components/ProjectComponents/MobileView';
import { CoolThing } from '../../components/ProjectComponents/CoolThing';
import { TechSide } from '../../components/ProjectComponents/TechSide';

export default function MalovaDesigns() {
  return (
    <>
      <Top
        project={{
          title: 'Malova Designs',
          description: 'An E-Commerce Store for a Small Business.',
        }}
      />
      <ForWho
        info={{
          img: '/malova.png',
          script:
            "This project was my final project for my coding bootcamp. I decided to use Shopify's Hydrogen platform to create a storefront for a small business I run with my mom called Malova Designs. I wanted to create a fun, attractive website for customers to come to and really push our brand and message. The goal was to make it more than just an e-commerce site; I wanted people to feel the connection between the small business owners (my mom and I) and themselves.",
          objective: 'Who is this for?',
        }}
      />
      <MobileView
        info={{
          img1: '/img1.png',
          img2: '/img2.png',
          img3: '/img3.png',
        }}
      />
      <CoolThing
        info={{
          title: 'Custom Product Form',
          desc: "Something I do not see on many e-commerce websites is a form that customers can fill out to request a custom product. As a small business, we have the ability to take in requests like these because of our size, and this is also something that we specialize in. When a customer submits this form, the information is sent straight to our email so we can respond in a timely manner. From there, we communicate one-on-one to address our customer's wants and needs. I thought that this was a very important feature to have because it helps the customer get in direct contact with us.",
          img: '/customform.png',
        }}
      />

      <TechSide
        info={{
          title: 'Tech',
          tech1: 'Hydrogen CMS',
          tech2: 'React Remix',
          tech3: 'GraphQL',
          tech4: 'HTML/CSS',
          tech5: 'Web3Forms',
        }}
      />
    </>
  );
}
