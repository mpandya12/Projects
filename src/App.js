
// import Form1 from './Componets/Form1';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Header from "./Header";
import MyForm from "./Componets/MyForm";
import Index from "./Calculater/Index";


import Toindex from "./To-do-list/ToIndex";
import Todolist from "./To-do-list/Todolist";
import ReactImageCrop from "./Image_cropeer/ReactImageCrop"
import Tags from "./React_tags/Tags";
//import Todolist from "./To-Do-App/Todolist";


function App() {
  return (
    <div className="App">
     <Header/>
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/form" element={<MyForm/>}/>
        <Route path="/calculater" element={<Index/>}/>
        <Route path="/ToDoList" element={<Todolist/>}/>
        <Route path="/Cropper" element={<ReactImageCrop/>}/>
        <Route path="/Tag" element={<Tags/>}/>

          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
