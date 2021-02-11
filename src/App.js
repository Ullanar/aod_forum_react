import './App.scss';
import Header from "./components/alwaysDisplayed/header/header";
import MainPage from "./components/mainPage/mainPage";
import Footer from "./components/alwaysDisplayed/footer";


function App() {
    return (
        <div className="App">
            <div className="wrapper">

                <Header/>

                <MainPage/>

                <Footer/>

            </div>
        </div>
    );
}

export default App;
