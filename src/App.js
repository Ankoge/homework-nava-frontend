import './App.css';
import PictureTable from "./component/PictureTable";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Picture from "./component/Picture";
import Update from "./component/Update";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PictureTable/>}/>
                <Route path="/picture/:id" element={<Picture/>}/>
                <Route path="/picture/:id/update" element={<Update/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
