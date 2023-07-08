import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import APropos from './views/APropos/APropos';
import Acceuil from './views/Acceuil/Acceuil';
import Services from './views/Services/Services';

function App() {
  return (
    <div className="container">
		<Navbar/>

		<Acceuil/>

        {/* <Services/> */}

        {/* <APropos/> */}

		<Footer/>
    </div>
  );
}

export default App;
