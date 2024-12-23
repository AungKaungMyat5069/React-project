import "./App.css";
import GreetingComponents from "./components/GreetingComponents";
import PersonComponent from "./components/PersonComponent";
import Profile from "./assets/myprofile.svg";
import { CounterComponent } from "./components/CounterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderComponent from "./components/RenderComponent";
import FriutComponent from "./components/FriutComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import AddFruitComponent from "./components/AddFruitComponent";
import UseEffectCleanUp from "./components/UseEffectCleanUp";
import FetchMultiplePost from "./components/FetchMultiplePost";
function App() {
  return (
    <>
      {/* <GreetingComponents name="Asami" />
      <GreetingComponents name="Akito" />
      <PersonComponent name="Izumi">
        <h6>I am react Developer</h6>
        <img src={Profile} alt="my Profile" width={100} height={100} />
      </PersonComponent> */}
      {/* <CounterComponent /> */}
      {/* <RenderComponent /> */}
      {/* <FriutComponent /> */}
      {/* <EmployeeComponent /> */}
      {/* <AddFruitComponent /> */}
      {/* <UseEffectCleanUp /> */}
      <FetchMultiplePost />
    </>
  );
}

export default App;
