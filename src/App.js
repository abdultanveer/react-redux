import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import DocTitleOne from "./hooks/DocTitleOne";
import DocTitleTwo from "./hooks/DocTitleTwo";
//npm i react-redux
function App() {
  return (
    // <Provider store={store}>
      <div className="App">
      <DocTitleOne/>
      <DocTitleTwo/>
        {/* <CakeContainer />
        <HooksCakeContainer /> */}
      </div>
    // </Provider>
  );
}

export default App;
