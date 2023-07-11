import React, { useState } from 'react'

const VengonoStoccateSostanzeCorrosiveAcciaio = () => {
    const [data, setData] = useState({
        domandaPrincipale: "VENGONO STOCCATE SOSTANZE CORROSIVE DELL'ACCIAIO ?",
        responseDomandaPrincipale: null,
        sottoDomanda: "Specificare la sostanza più corrosiva da stoccare",
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
                        <input className="inp" name="temperaturaMinInterna" type="text" />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default VengonoStoccateSostanzeCorrosiveAcciaio