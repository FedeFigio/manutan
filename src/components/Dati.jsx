import React, {useContext, useEffect, useState} from "react";
import {MyContext} from "../App";

const Dati = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const {initialState, setInitialState} = useContext(MyContext);
    
    
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
        responseDataApprontamento: null
    });
    
    useEffect(() => {
        setInitialState((state) => {
            return {
                ...initialState,
                dati: data,
            }
        })
    }, [data])
    
    
    return (
        <div>
            <div className=" rounded-lg flex flex-col gap-4">
                <div className="titolo-sezione">DATI</div>
                <div className="w-full flex gap-5  ">
                    <div>
                        <h2 className="text-input-medium mb-2">Cliente</h2>
                        <input className="inp" name="cliente" type="text"/>
                    </div>
                    <div>
                        <h2 className="text-input-medium mb-2">Venditore</h2>
                        <input className="inp w-full" name="venditore" type="text"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <h2 className="text-input-domanda-principale">{data.domanda}</h2>
                    </div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                className=""
                                type="radio"
                                name="pavimento/piattaforma"
                                onClick={(e) => {
                                    setdata((state) => {
                                        return {...state, response: e.target.value};
                                    });
                                }}
                                value="si"
                            />
                            <label className="text-input-small">SI</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                className=""
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
                            <label className="text-input-small">NO</label>
                        </div>
                    </div>
                </div>
                <div>
                    {data.response == "si" && (
                        <div className="flex gap-20">
                            <div>
                                <div className="mb-2">
                                    <h3 className="text-input-medium">{data.sottoDomanda}</h3>
                                </div>
                                <div className="flex gap-5">
                                    <div className="wrap-input-radio">
                                        <input
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
                                        <label className="text-input-small">SI</label>
                                    </div>
                                    <div className="wrap-input-radio">
                                        <input
                                            type="radio"
                                            name="pavimento/piattaforma/sottoDomanda"
                                            value="no"
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
                                        <label className="text-input-small">NO</label>
                                    </div>
                                </div>
                            </div>
                            
                            {/*DOMANDA RILIEVO*/}
                            {data.responseSottoDomanda == "no" && <div>
                                <div className="mb-2">
                                    <h3 className="text-input-medium">{data.domandaRilievo}</h3>
                                </div>
                                <div className="flex gap-5">
                                    <div className="wrap-input-radio">
                                        <input
                                            type="radio"
                                            name="pavimento/piattaforma/domandaRilievo"
                                            onClick={(e) => {
                                                setdata((state) => {
                                                    return {
                                                        ...state,
                                                        responseDomandaRilievo: e.target.value,
                                                    };
                                                });
                                            }}
                                            value="Cliente"
                                        />
                                        <label className="text-input-small">Cliente</label>
                                    </div>
                                    <div className="wrap-input-radio">
                                        <input
                                            type="radio"
                                            name="pavimento/piattaforma/domandaRilievo"
                                            value="Justrite Italia"
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
                                        <label className="text-input-small">Justrite Italia</label>
                                    </div>
                                </div>
                            </div>}
                            
                            
                            <div>
                                <div className="mb-2">
                                    <h3 className="text-input-medium">{data.dataApprontamento}</h3>
                                </div>
                                <div>
                                    
                                    <div className="flex items-center">
                                        <input
                                            className="inp"
                                            type="date"
                                            name="data/apportamento"
                                            onChange={(e) => {
                                                setdata((state) => {
                                                    return {
                                                        ...state,
                                                        responseDataApprontamento: e.target.value
                                                    }
                                                })
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
