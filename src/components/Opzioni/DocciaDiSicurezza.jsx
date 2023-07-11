import React, { useState } from 'react'

const DocciaDiSicurezza = () => {
    const [data, setData] = useState({
        domandaPrincipale: "DOCCIA DI SICUREZZA ?",
        responseDomandaPrincipale: null,
        sottoDomanda: "Tipologia",
        responseSottoDomanda: null,
        posizionamento: "Lato installazione",
        responsePosizionamento: null
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
                                    value="interna"
                                />
                                <label className="text-input-small">Interna</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.sottoDomanda}
                                    value="esterna"
                                />
                                <label className="text-input-small">Esterna</label>
                            </div>
                        </div>
                    </div>
                </div>}
                {data.responseDomandaPrincipale == "si" && <div className="w-full flex gap-5  ">
                    <div>
                        <div className="text-input-medium mb-2">{data.posizionamento}</div>
                        <div className="flex gap-5">
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.posizionamento}
                                    value="installata/dx"
                                />
                                <label className="text-input-small">Installata a DX</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    type="radio"
                                    name={data.posizionamento}
                                    value="installata/sx"
                                />
                                <label className="text-input-small">Installata a SX</label>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default DocciaDiSicurezza