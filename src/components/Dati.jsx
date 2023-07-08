import React, {useContext, useEffect, useState} from "react";
import {MyContext} from "../App";

const Dati = () => {
    const {initialState, setInitialState} = useContext(MyContext);
    
    
    const [data, setdata] = useState({
        domanda:
            "ESISTE UN PAVIMENTO O UNA PIATTAFORMA IN CEMENTO SU CUI FISSARE IL CONTAINER?",
        response: null,
        sottoDomanda: "LA PIATTAFORMA E' IN PIANO?",
        responseSottoDomanda: null,
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
            <div className="title-component">DATI</div>
            <div className="flex gap-4">
                
                <div className="py-3">
                    <h2 className="text-input">Cliente</h2>
                    <input className="inp w-full" name="cliente" type="text"/>
                </div>
                <div className="py-3">
                    <h2 className="text-input">Venditore</h2>
                    <input className="inp w-full" name="venditore" type="text"/>
                </div>
            </div>
            <div className="py-3">
                <h2 className="text-input-large">{data.domanda}</h2>
            </div>
            
            <div className="py-3 flex gap-5">
                <div>
                    <input
                        className="radio"
                        type="radio"
                        name="pavimento/piattaforma"
                        onClick={(e) => {
                            setdata((state) => {
                                return {...state, response: e.target.value};
                            });
                        }}
                        value="si"
                    />
                    <label htmlFor="">SI</label>
                </div>
                
                <div>
                    <input
                        className="radio"
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
                    <div>
                        <div className="py-3">
                            <h3 className="text-input-medium">{data.sottoDomanda}</h3>
                        </div>
                        <div className="py-3 flex gap-5">
                            <div>
                                <input
                                    className="radio"
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
                            
                            <div>
                                <input
                                    className="radio"
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
                                <label htmlFor="">NO</label>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dati;
