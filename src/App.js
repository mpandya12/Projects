
// import Form1 from './Componets/Form1';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Header from "./Header";
import MyForm from "./Componets/MyForm";
import Index from "./Calculater/Index";


import Toindex from "./To-do-list/ToIndex";


function App() {
  return (
    <div className="App">
     <Header/>
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/form" element={<MyForm/>}/>
        <Route path="/calculater" element={<Index/>}/>
        <Route path="/ToDoList" element={<Toindex/>}/>

          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
