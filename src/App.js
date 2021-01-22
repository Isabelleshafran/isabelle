import Navbar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Projects from "./components/projects";
import Splash from "./components/splash";


const App = () => (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path ="/projects" component = {Projects}/>
      </Switch>
      {/* <Footer /> */}
    </div>
  );

export default App;
