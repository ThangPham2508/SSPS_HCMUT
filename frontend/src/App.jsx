import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App;