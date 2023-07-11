import React, { useState } from 'react'

const Colore = () => {
    const [data, setData] = useState({
        domandaPrincipale: "COLORE",
        responseDomandaPrincipale: null,
        sottoDomanda: "Specificare RAL",
        responseSottoDomanda: null,
    });
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <div className="text-input-domanda-principale">{data.domandaPrincipale}</div>
                <div className="flex gap-5">
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="bianco"
                            onClick={(e) => {
                                setData((state) => {
                                    return {
                                        ...state,
                                        responseDomandaPrincipale: e.target.value,
                                    };
                                });
                            }}
                        />
                        <label className="text-input-small">Bianco</label>
                    </div>
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="blu"
                            onClick={(e) => {
                                setData((state) => {
                                    return {
                                        ...state,
                                        responseDomandaPrincipale: e.target.value,
                                    };
                                });
                            }}
                        />
                        <label className="text-input-small">Blu</label>
                    </div>
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="altro"
                            onClick={(e) => {
                                setData((state) => {
                                    return {
                                        ...state,
                                        responseDomandaPrincipale: e.target.value,
                                    };
                                });
                            }}
                        />
                        <label className="text-input-small">Altro</label>
                    </div>
                </div>
            </div>
            {data.responseDomandaPrincipale == "altro" && <div className="w-full flex gap-5  ">
                <div>
                    <div className="text-input-medium mb-2">{data.sottoDomanda}</div>
                    <input className="inp" name={data.sottoDomanda} type="text" />
                </div>
            </div>}
        </div>
    )
}

export default Colore