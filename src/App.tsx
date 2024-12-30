import { DessertsGrid } from "./components/DessertsGrid";
import { Resume } from "./components/Resume";

function App() {
  return (
    <main className="grid gap-8 px-6 py-5 md:grid-cols-3">
      <section className="md:col-span-2 space-y-7">
        <h2 className="font-bold text-4xl text-rose-900">Desserts</h2>
        <DessertsGrid />
      </section>
      <section className="md:col-span-1">
        <Resume />
      </section>
    </main>
  );
}

export default App;
