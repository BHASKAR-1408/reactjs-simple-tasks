import {Route, BrowserRouter as Router} from 'react-router-dom'
import Nb from './NavgationBar/Nb'
import Home from './NavgationBar/Home'
import Course from './NavgationBar/Course';
import Final from './NavgationBar/Final'
import Project from './NavgationBar/Project'
import About from './NavgationBar/About'


import HigherO from './components/HigherO';
import HoverCounter from './components/HoverCounter';


function App() {
  return (
      <div>
        <Router>
          <Route path="/" component={Nb} exact/>
          <Route path="/Homepage" component={Home} />
          <Route path="/course" component={Course} />
          <Route path="/final" component={Final} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
        </Router>
        {/* <HigherO name="bhaskar" />
        <HoverCounter /> */}
      </div>
  );
}

export default App;


// import RenderProp from './RenderProp/RenderProp';
// import HoverConterProp from './RenderProp/HoverConterProp';
// import User from './RenderProp/User';
// import ComponentC from './Contex/ComponentC';
// import {UserProvider} from './Contex/UserContext'
// import Axios1 from './HttpLib/Axios1';
// import Axios2 from './HttpLib/Axios2';
// import Table from './TestTask/Table';
// import JustForm from './HttpLib/JustForm';
// {/* <RenderProp />
// <HoverConterProp />
// <User name={(isLoggedIn)=>isLoggedIn?"bhaskar":"guest"} /> */}
// {/* <Axios1 />    */}
// {/* <Axios2 /> */}
// {/* <Table /> */}
// {/* <Router>
//     <Route path="/Axios2" component={Axios2} />
//     <Route path="/justform" exact component={JustForm} />
// </Router> */}
