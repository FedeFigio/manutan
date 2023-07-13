import {createContext, useState} from "react";
import "./App.css";
import Dati from "./components/Dati";
import Title from "./components/Title";
import Logo from "./manutan-logo.png"
import InformazioniSulContainerDaProdurre
    from "./components/InformazioniSulContainerDaProdurre/InformazioniSulContainerDaProdurre";
import Dimensionamento from "./components/Dimensionamento/Dimensionamento";
import Opzioni from "./components/Opzioni/Opzioni";
import Spedizione from "./components/Spedizione/Spedizione";
import MyDocument from "./components/RenderPdf/MyDocument";
import {PDFViewer} from '@react-pdf/renderer';


export const MyContext = createContext();

function App() {
    
    const [initialState, setInitialState] = useState({});
    
    const [anteprima, setAnteprima] = useState(false);
    
    
    return (
        <div className="flex flex-col">
            
            <MyContext.Provider value={{initialState, setInitialState}}>
                
                <div id="App" style={{
                    height: "calc(100vh - 24px)",
                    overflowY: !anteprima && "scroll"
                }} className={`App flex justify-center ${anteprima && "w-screen"}`}>
                    <div style={{display: anteprima && "none"}} className="container py-10 ">
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
                        
                        <main className="py-10 ">
                            <Dati/>
                            <div className="separator"></div>
                            <div className="flex flex-col gap-4">
                                <InformazioniSulContainerDaProdurre/>
                                <div className="separator"></div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Dimensionamento/>
                                <div className="separator"></div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Opzioni/>
                                <div className="separator"></div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Spedizione/>
                            </div>
                        </main>
                        
                        <footer>
                        
                        </footer>
                    </div>
                    
                    
                    {anteprima && <PDFViewer style={{display: !anteprima && "none"}} className="w-full">
                        <MyDocument state={initialState}/>
                    </PDFViewer>}
                
                </div>
            
            
            </MyContext.Provider>
            
            <button className="bg-red-700"
                    onClick={() => setAnteprima(!anteprima)}>{anteprima ? "Torna indietro" : "Visualizza Anteprima"}</button>
        </div>
    );
}

export default App;
