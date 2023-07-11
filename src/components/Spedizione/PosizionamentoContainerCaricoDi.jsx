import React, { useState } from 'react'

const PosizionamentoContainerCaricoDi = () => {
    const [data, setData] = useState({
        domandaPrincipale: "POSIZIONAMENTO CONTAINER A CARICO DI",
        responseDomandaPrincipale: null,
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
                            value="cliente"
                        />
                        <label className="text-input-small">Cliente</label>
                    </div>
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="fornitore"
                        />
                        <label className="text-input-small">Fornitore</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PosizionamentoContainerCaricoDi