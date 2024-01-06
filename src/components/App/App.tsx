import Header from '../Header';
import Search from '../Search';
import ThemeProvider from '../ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <section className='container mx-auto'>
        <Header />
        <Search />
      </section>
    </ThemeProvider>
  );
}

export default App;
