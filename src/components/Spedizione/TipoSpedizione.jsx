import React, { useState } from 'react'

const TipoSpedizione = () => {
    const [data, setData] = useState({
        domandaPrincipale: "TIPO SPEDIZIONE",
        responseDomandaPrincipale: null,
        sottoDomanda: "Data richiesta di spedizione o approntamento",
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
                            value="porto/franco"
                        />
                        <label className="text-input-small">Porto franco</label>
                    </div>
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="porto/assegnato"
                        />
                        <label className="text-input-small">Porto assegnato</label>
                    </div>
                </div>
                <div className="w-full flex gap-5  ">
                    <div>
                        <div className="text-input-medium mb-2">{data.sottoDomanda}</div>
                        <input className="inp" name={data.sottoDomanda} type="date" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TipoSpedizione