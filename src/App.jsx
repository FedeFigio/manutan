import {createContext, useState} from "react";
import "./App.css";
import Dati from "./components/Dati";
import Title from "./components/Title";
import Logo from "./manutan-logo.png"


export const MyContext = createContext();

function App() {
    
    const [initialState, setInitialState] = useState({
        dati: null,
        informazioniSulContainerDaProdurre: null,
    });
    
    
    return (
        <>
            <MyContext.Provider value={{initialState, setInitialState}}>
                <div id="App" className="App flex justify-center">
                    <div className="max-w-5xl w-full p-10 ">
                        <header className="flex justify-between items-center">
                            <img className="w-[150px]" src={Logo} alt=""/>
                            <Title/>
                            <section>
                                <header><span className="text-lg font-bold first-letter:">Contatti</span>
                                </header>
                                <div className="text-sm">
                                    <address><p>Manutan Italia S.p.A.<br/> Via De Amicis
                                        67<br/>20092 Cinisello Balsamo (MI) <br/>P.IVA IT02097170969<br/>Codice
                                        Destinatario: C3UCNRB</p> <p>Tel. 02 66 01 08 23<br/> Fax: 02 66 01 16 16
                                    </p></address>
                                </div>
                            </section>
                        </header>
                        
                        <main className="py-10">
                            <Dati/>
                        </main>
                        
                        <footer>
                            <button>Esporta in PDF</button>
                        </footer>
                    </div>
                </div>
            </MyContext.Provider>
        </>
    );
}

export default App;
