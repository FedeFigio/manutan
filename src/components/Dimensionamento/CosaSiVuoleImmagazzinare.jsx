import React, { useState } from 'react'

const CosaSiVuoleImmagazzinare = () => {
    const [data, setData] = useState({
        domandaPrincipale: "COSA SI VUOLE IMMAGAZZINARE ?",
        responseDomandaPrincipale: null,
        sottoDomanda: "Specificare",
        responseSottodomanda: null,
        totaleNumeroPostiPallet:"Totale numero posti pallet",
        responseTotaleNumeroPostiPallet:null,
        numeroPiani:"Numero piani",
        responseNumeroPiani:null,


    });
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <div className="text-input-domanda-principale">{data.domandaPrincipale}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="tipologia/merce"
                                value="pallet"
                                onClick={(e) => {
                                    setData((state) => {
                                        return {
                                            ...state,
                                            responseDomandaPrincipale: e.target.value,
                                        };
                                    });
                                }}
                            />
                            <label className="text-input-small">Pallet</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="tipologia/merce"
                                value="cisternette(IBC)"
                                onClick={(e) => {
                                    setData((state) => {
                                        return {
                                            ...state,
                                            responseDomandaPrincipale: e.target.value,
                                        };
                                    });
                                }}
                            />
                            <label className="text-input-small">Cisternette (IBC)</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="tipologia/merce"
                                value="fusti"
                                onClick={(e) => {
                                    setData((state) => {
                                        return {
                                            ...state,
                                            responseDomandaPrincipale: e.target.value,
                                        };
                                    });
                                }}
                            />
                            <label className="text-input-small">Fusti</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="tipologia/merce"
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
                {data.responseDomandaPrincipale=="altro"&&<div className="w-full flex gap-5  ">
                    <div>
                        <div className="text-input-medium mb-2">{data.sottoDomanda}</div>
                        <input className="inp" name="temperaturaMinInterna" type="text" />
                    </div>
                </div>}
                <div className="w-full flex gap-5  ">
                    <div>
                        <div className="text-input-medium mb-2">{data.totaleNumeroPostiPallet}</div>
                        <input className="inp" name="temperaturaMinInterna" type="number" />
                    </div>
                </div>
                <div className="w-full flex gap-5  ">
                    <div>
                        <div className="text-input-medium mb-2">{data.numeroPiani}</div>
                        <input className="inp" name="temperaturaMinInterna" type="number" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CosaSiVuoleImmagazzinare