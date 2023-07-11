import React, { useState } from 'react'

const ImpiantoAutomaticoDiSoppressioneDelFuoco = () => {
    const [data, setData] = useState({
        domandaPrincipale: "IMPIANTO AUTOMATICO DI SOPPRESSIONE DEL FUOCO ?",
        responseDomandaPrincipale: null,
        sottoDomanda: "Tipologia",
        responseSottoDomanda: null,
    });
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <div className="text-input-domanda-principale">{data.domandaPrincipale}</div>
                <div className="flex gap-5">
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="si"
                            onClick={(e) => {
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
                {data.responseDomandaPrincipale == "si" && <div className="w-full flex gap-5  ">
                    <div>
                        <div className="text-input-medium mb-2">{data.sottoDomanda}</div>
                        <div className="flex gap-5">
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="sprinkler"
                                    onClick={(e) => {
                                        setData((state) => {
                                            return {
                                                ...state,
                                                responseDomandaPrincipale: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <label className="text-input-small">Sprinkler</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="polvere"
                                    onClick={(e) => {
                                        setData((state) => {
                                            return {
                                                ...state,
                                                responseDomandaPrincipale: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <label className="text-input-small">Polvere</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="co2"
                                    onClick={(e) => {
                                        setData((state) => {
                                            return {
                                                ...state,
                                                responseDomandaPrincipale: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <label className="text-input-small">CO2</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="schiuma"
                                    onClick={(e) => {
                                        setData((state) => {
                                            return {
                                                ...state,
                                                responseDomandaPrincipale: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <label className="text-input-small">Schiuma</label>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ImpiantoAutomaticoDiSoppressioneDelFuoco