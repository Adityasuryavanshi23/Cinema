import "./App.css";
import { Header, Footer } from "./components/index";
import { Allroutes } from "./routes/Allroutes";

function App() {
  return (
    <div className="dark:bg-slate-900">
      <Header />
      <Allroutes></Allroutes>
      <Footer />
    </div>
  );
}

export default App;
