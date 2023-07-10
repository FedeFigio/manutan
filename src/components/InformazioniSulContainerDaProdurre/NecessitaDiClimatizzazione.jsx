import React, { useEffect, useState } from 'react'

const NecessitaDiClimatizzazione = () => {
    const [data, setData] = useState({
        domandaPrincipale: "NECESSITA' DI CLIMATIZZAZIONE ?",
        response: null,
    })




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
                                        response: e.target.value,
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
                                        response: e.target.value,
                                    };
                                });
                            }}
                        />
                        <label className="text-input-small">NO</label>
                    </div>

                </div>
                {data.response == "si" &&<div>
                    <div className="w-full flex gap-5  ">
                        <div>
                            <h2 className="text-input-medium mb-2">Voltaggio elettrico</h2>
                            <input className="inp" name="cliente" type="number" />
                        </div>
                    </div>
                    <div className="w-full flex gap-5  ">
                        <div>
                            <h2 className="text-input-medium mb-2">Temperatura MIN interna °C</h2>
                            <input className="inp" name="cliente" type="number" />
                        </div>
                        <div>
                            <h2 className="text-input-medium mb-2">Tolleranza +°C</h2>
                            <input className="inp" name="cliente" type="number" />
                        </div>
                        <div>
                            <h2 className="text-input-medium mb-2">Tolleranza -°C</h2>
                            <input className="inp" name="cliente" type="number" />
                        </div>
                    </div>
                    <div className="w-full flex gap-5  ">
                        <div>
                            <h2 className="text-input-medium mb-2">Temperatura MAX interna °C</h2>
                            <input className="inp" name="cliente" type="number" />
                        </div>
                        <div>
                            <h2 className="text-input-medium mb-2">Tolleranza +°C</h2>
                            <input className="inp" name="cliente" type="number" />
                        </div>
                        <div>
                            <h2 className="text-input-medium mb-2">Tolleranza -°C</h2>
                            <input className="inp" name="cliente" type="number" />
                        </div>
                    </div>

                </div>}
            </div>
        </div>
    )
}

export default NecessitaDiClimatizzazione