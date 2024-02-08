import { Home } from "./(home)/home/page";

export default async function HomePage({ params }: any) {
  console.log('params', params);
  
  return (
    <main className="p-2">
      <Home />
    </main>
  );
}
