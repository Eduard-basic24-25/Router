import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
  } from 'react-router-dom';
import { Link } from 'react-router-dom';


  import Contacts from './components/AboutUs'
  import AboutUs from './components/Contacts'
  import Team from './components/Team'
  import Error from './components/Error'


function Dashboard () {

  return (
    <section><h1>Home page</h1> 
      <Link to='/aboutUs' >About Us</Link>
      <Link to='/contacts' >Contacts</Link>
      <Link to='/team'>Team</Link>
      <Outlet/>
    </section>  
  )
}





function Home() {
  
  return (
    <Router>
         <Routes>
             <Route path="/" element={<Dashboard/>}>
              <Route path="contacts" element={<Contacts/>}></Route>
              <Route path="team/*" element={<Team/>}>
                
              </Route>
              <Route path="aboutUs" element={<AboutUs/>}></Route>
             </Route>
             
             <Route path="*" element={<Error/>} />
         </Routes>
    </Router>
   
  );
}

export default Home;
