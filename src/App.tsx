import "./App.css";
import { Background } from "./component/Background";
import { Footer } from "./component/Footer";

import { Form } from "./component/Form";

function App() {
    return (
        <div className="App">
            <Background />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
