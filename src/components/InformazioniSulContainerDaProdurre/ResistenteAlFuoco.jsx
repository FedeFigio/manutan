import React, {useState} from 'react';

function ResistenteAlFuoco(props) {
    
    const [data, setData] = useState({
        domandaPrincipale: "RESISTENTE AL FUOCO ?",
        responseDomandaPrincipale: null,
        domandaConformeStandard: "Conforme a standard",
        responseConformeStandard: null,
        richiestaCertificazioneEnteEsterno: "Richiesta certificazione ente esterno (ex. RINA)",
        responseRichiestaCertificazioneEnteEsterno: null,
        latoDiProtezioneDalFuoco: "Lato di protezione dal fuoco",
        responseLatoDiProtezioneDalFuoco: null,
        minutiDiResistenzaAlFuoco: "Minuti di resistenza al fuoco",
        responseMinutiDiResistenzaAlFuoco: null,
        specificareMinutiRichiesti: "Specificare minuti richiesti",
        responseSpecificareMinutiRichiesti: null,
    });
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="text-input-domanda-principale">{data.domandaPrincipale}</div>
                <div className="flex gap-5">
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="si"
                            onClick={(e) => {
                                console.log(e);
                                setData((state) => {
                                    return {
                                        ...state,
                                        responseDomandaPrincipale: e.target.value,
                                    };
                                });
                            }}
                        />
                        <label className="text-input-small">SI</label>
                    </div>
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="no"
                            onClick={(e) => {
                                console.log(e);
                                setData((state) => {
                                    return {
                                        ...state,
                                        responseDomandaPrincipale: e.target.value,
                                    };
                                });
                            }}
                        />
                        <label className="text-input-small">NO</label>
                    </div>
                </div>
            </div>
            
            {/*#######################################*/}
            {data.responseDomandaPrincipale == "si" && <>
                <div className="flex flex-col gap-2">
                    <div className="text-input-medium">{data.domandaConformeStandard}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.domandaConformeStandard}
                                value="en"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">EN</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.domandaConformeStandard}
                                value="fm"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">FM</label>
                        </div>
                    </div>
                </div>
                
                {/*#######################################*/}
                <div className="flex flex-col gap-2">
                    <div className="text-input-medium">{data.richiestaCertificazioneEnteEsterno}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.richiestaCertificazioneEnteEsterno}
                                value="si"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">SI</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.richiestaCertificazioneEnteEsterno}
                                value="no"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">NO</label>
                        </div>
                    </div>
                </div>
                {/*#######################################*/}
                <div className="flex flex-col gap-2">
                    <div className="text-input-medium">{data.latoDiProtezioneDalFuoco}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.latoDiProtezioneDalFuoco}
                                value="interno"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">Interno</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.latoDiProtezioneDalFuoco}
                                value="esterno"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">Esterno</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.latoDiProtezioneDalFuoco}
                                value="internoEsterno"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">Interno / Esterno</label>
                        </div>
                    </div>
                </div>
                {/*#######################################*/}
                <div className="flex flex-col gap-2">
                    <div className="text-input-medium">{data.minutiDiResistenzaAlFuoco}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.minutiDiResistenzaAlFuoco}
                                value="30"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">30</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.minutiDiResistenzaAlFuoco}
                                value="60"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">60</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.minutiDiResistenzaAlFuoco}
                                value="90"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">90</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.minutiDiResistenzaAlFuoco}
                                value="120"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">120</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.minutiDiResistenzaAlFuoco}
                                value="180"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">180</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.minutiDiResistenzaAlFuoco}
                                value="240"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">240</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.minutiDiResistenzaAlFuoco}
                                value="libero (suggerito dal fornitore)"
                                // onClick={(e) => {
                                //     console.log(e);
                                //     setdata((state) => {
                                //         return {
                                //             ...state,
                                //             responseDomandaRilievo: e.target.value,
                                //         };
                                //     });
                                // }}
                            />
                            <label className="text-input-small">libero (suggerito dal fornitore)</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name={data.minutiDiResistenzaAlFuoco}
                                value="altro"
                                onClick={(e) => {
                                    console.log(e);
                                    setData((state) => {
                                        return {
                                            ...state,
                                            responseMinutiDiResistenzaAlFuoco: e.target.value,
                                        };
                                    });
                                }}
                            />
                            <label className="text-input-small">Altro</label>
                        </div>
                    </div>
                    {data.responseMinutiDiResistenzaAlFuoco == "altro" && <div className="flex flex-col gap-2">
                        <div className="text-input-medium">{data.specificareMinutiRichiesti}</div>
                        <div className="flex gap-5">
                            <div className="wrap-input-radio">
                                <input
                                    type="number"
                                    className="inp"
                                    name={data.specificareMinutiRichiesti}
                                    // onClick={(e) => {
                                    //     console.log(e);
                                    //     setdata((state) => {
                                    //         return {
                                    //             ...state,
                                    //             responseDomandaRilievo: e.target.value,
                                    //         };
                                    //     });
                                    // }}
                                />
                            </div>
                        
                        </div>
                    </div>}
                </div>
            
            
            </>}
        
        </div>
    );
}

export default ResistenteAlFuoco;