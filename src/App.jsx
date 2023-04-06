import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
     
    <header className="container mx-auto px-4">
    <div className="flex justify-between">
    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
      <button>
        luna
      </button>
      </div>
    <form className="mt-8 flex items-center gap-4 container mx-auto py-4 px-4 bg-white overflow-hidden rounded-md">
     <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input className="w-full text-gray-400" type="text" placeholder="create a new todo"></input>
     </form>
     </header>


    <main className="container mx-auto px-4 mt-8">
    <div className="rounded-md bg-white">
    <article className="flex gap-4  border-b border-b-gray-300 py-4 px-4">
        <button className="border-b border-b-gray-30 flex-none inline-block h-5 w-5 rounded-full"></button>
        <p className="grow text-gray-600">complete javascript...</p>
        <button><CrossIcon /></button>
      </article>
     
      <article className="flex gap-4  border-b border-b-gray-300 py-4 px-4">
        <button className="border-b border-b-gray-30 flex-none inline-block h-5 w-5 rounded-full"></button>
        <p className="grow text-gray-600">complete javascript...</p>
        <button><CrossIcon /></button>
      </article>

      <article className="flex gap-4  border-b border-b-gray-300 py-4 px-4">
        <button className="border-b border-b-gray-30 flex-none inline-block h-5 w-5 rounded-full"></button>
        <p className="grow text-gray-600">complete javascript...</p>
        <button><CrossIcon /></button>
      </article>


      <section className="py-4 px-4 flex justify-between">
        <span className="text-gray-400">5 items</span>
        <button className="text-gray-400">clear</button>
      </section> 
    </div>
    </main>


    <section className="container mx-auto px-4">
      <button>all</button>
      <button>active</button>
      <button>complete</button>
    </section>
    <p>Drag and drop to reorder list</p>
   


    </div>
     
  
  );
};

export default App;