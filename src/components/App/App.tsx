import Footer from '../Footer';
import Header from '../Header';
import Search from '../Search';

function App() {
  return (
    <section className='flex flex-col justify-between min-h-screen overflow-hidden container p-6 mx-auto md:px-10 md:pt-14 lg:max-2xl:max-w-[736px] xl:container'>
      <Header />
      <Search className='flex-grow' />
      <Footer />
    </section>
  );
}

export default App;
