import AboutUs from './pages/AboutUs'
import Nav from './components/Nav'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import ImageDetails from './pages/ImageDetails'
//Global Styled
import GlobalStyle from './components/GlobalStyle'
//router
import { Switch , Route , useLocation } from 'react-router-dom'
//animation
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer'




function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs  />
          </Route>
          <Route path = "/work" exact>
            <OurWork  />
          </Route>
          <Route path="/work/:id">
            <ImageDetails />
          </Route>
          <Route path ="/contact">
            <ContactUs  /> 
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
      
      
      
    </div>
  );
}

export default App;
