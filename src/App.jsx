const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat">
    <header className="container mx-auto px-4">
    <h1 className="uppercase">Todo</h1>
      <button>
        luna
      </button>

    </header>
     <form>
      <input type="text" placeholder="create a new todo"></input>
     </form>
    <main className="container mx-auto px-4">
      <article>
        <span>circulo</span>
        <p>complete javascript...</p>
        <button>x</button>
      </article>
      <article>
        <span>circulo</span>
        <p>complete javascript...</p>
        <button>x</button>
      </article>
      <article>
        <span>circulo</span>
        <p>complete javascript...</p>
        <button>x</button>
      </article>
      <section>
        <span>5 items</span>
        <button>clear</button>
      </section>
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