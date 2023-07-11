import React, { useState } from 'react'

const EstintoreManuale = () => {
    const [data, setData] = useState({
        domandaPrincipale: "ESTINTORE MANUALE ?",
        responseDomandaPrincipale: null,
        sottoDomanda: "Tipologia",
        responseSottoDomanda: null,
        latoEsposizione: "Lato installazione"
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
                                    value="idrico"
                                />
                                <label className="text-input-small">Idrico</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="polvere"
                                />
                                <label className="text-input-small">Polvere</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="schiuma"
                                />
                                <label className="text-input-small">Schiuma</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="co2"
                                />
                                <label className="text-input-small">CO2</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="halon"
                                />
                                <label className="text-input-small">Halon</label>
                            </div>
                        </div>
                    </div>
                </div>}
                {data.responseDomandaPrincipale == "si" && <div className="w-full flex gap-5  ">
                    <div>
                        <div className="text-input-medium mb-2">{data.latoEsposizione}</div>
                        <div className="flex gap-5">
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.latoEsposizione}
                                    value="installato/xd"
                                />
                                <label className="text-input-small">Installato a DX</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.latoEsposizione}
                                    value="installato/sx"
                                />
                                <label className="text-input-small">Installato a SX</label>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default EstintoreManuale