import { TopWithButton } from '../../components/ProjectComponents/Top';

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
    </>
  );
}
