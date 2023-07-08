import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";

const Dati = () => {
    const { initialState, setInitialState } = useContext(MyContext);


    const [data, setdata] = useState({
        domanda:
            "ESISTE UN PAVIMENTO O UNA PIATTAFORMA IN CEMENTO SU CUI FISSARE IL CONTAINER ?",
        response: null,
        sottoDomanda: "La piattaforma è in piano ?",
        responseSottoDomanda: null,
        dataApprontamento: "Data di apportamento della piattaforma",
        responseDataApportamento: null,
        domandaRilievo: "Chi si occupa del rilievo ?",
        responseDomandaRilievo: null,
    });

    useEffect(() => {
        setInitialState((state) => {
            return {
                ...state,
                dati: data
            }
        })
    }, [data])


    return (
        <div>
            <div className="bg-yellow-300 rounded-lg p-5">
                <div className="title-component">DATI</div>
                <div className="w-full flex gap-5  ">
                    <div className="py-3 ">
                        <h2 className="text-input">Cliente</h2>
                        <input className="inp" name="cliente" type="text" />
                    </div>
                    <div className="py-3">
                        <h2 className="text-input">Venditore</h2>
                        <input className="inp w-full" name="venditore" type="text" />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-input-large">{data.domanda}</h2>
                </div>
                <div className="flex gap-5">
                    <div className="flex items-center">
                        <input
                            className="input-radio"
                            type="radio"
                            name="pavimento/piattaforma"
                            onClick={(e) => {
                                setdata((state) => {
                                    return { ...state, response: e.target.value };
                                });
                            }}
                            value="si"
                        />
                        <label htmlFor="">SI</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            className="input-radio"
                            type="radio"
                            name="pavimento/piattaforma"
                            value="no"
                            onClick={(e) => {
                                console.log(e);
                                setdata((state) => {
                                    return {
                                        ...state,
                                        response: e.target.value,
                                        responseSottoDomanda: null,
                                    };
                                });
                            }}
                        />
                        <label htmlFor="">NO</label>
                    </div>
                </div>
                <div>
                    {data.response == "si" && (
                        <div className="flex gap-20">
                            <div>
                                <div className="py-3">
                                    <h3 className="text-input-medium">{data.sottoDomanda}</h3>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex items-center">
                                        <input
                                            className="input-radio"
                                            type="radio"
                                            name="pavimento/piattaforma/sottoDomanda"
                                            onClick={(e) => {
                                                setdata((state) => {
                                                    return {
                                                        ...state,
                                                        responseSottoDomanda: e.target.value,
                                                    };
                                                });
                                            }}
                                            value="si"
                                        />
                                        <label htmlFor="">SI</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            className="input-radio"
                                            type="radio"
                                            name="pavimento/piattaforma/sottoDomanda"
                                            value="no"
                                            onClick={(e) => {
                                                console.log(e);
                                                setdata((state) => {
                                                    return {
                                                        ...state,
                                                         responseDomandaRilievo: e.target.value,
                                                    };
                                                });
                                            }}
                                        />
                                        <label htmlFor="">NO</label>
                                    </div>
                                </div>
                            </div>





                            <div>
                                <div className="py-3">
                                    <h3 className="text-input-medium">{data.dataApprontamento}</h3>
                                </div>
                                <div className="flex gap-5">
                                    
                                    <div className="flex items-center">
                                        <input
                                            className="inp-date"
                                            type="date"
                                            name="data/apportamento"
                                            value="date"
                                            onClick={(e) => {
                                                console.log(e);
                                                setdata((state) => {
                                                    return {
                                                        ...state,
                                                        responseSottoDomanda: e.target.value,
                                                    };
                                                });
                                            }}
                                        />
                                        
                                    </div>
                                </div>

                            </div>



                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dati;
