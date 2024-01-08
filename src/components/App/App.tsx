import Header from '../Header';
import Search from '../Search';

function App() {
  return (
    <section className='min-h-screen bg-primary container px-6 pt-6 mx-auto md:p-9 md:pt-14 lg:max-2xl:max-w-[736px] xl:container '>
      <Header />
      <Search />
    </section>
  );
}

export default App;
