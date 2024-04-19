import CarsList from '@/components/ui/cars-list';
import { getCarsList } from '@/graphql/car-list';

export default async function Home() {
  const { carLists } = await getCarsList();

  return (
    <div className="flex flex-col py-24 px-8 justify-center md:flex-row flex-wrap items-center max-w-7xl mx-auto gap-8">
      <CarsList carLists={carLists} />
    </div>
  );
}
