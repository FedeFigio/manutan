import React, { useState } from 'react'

const CicloMarino = () => {
    const [data, setData] = useState({
        domandaPrincipale: "CICLO MARINO",
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
                            name="ciclo/marino"
                            value="si"
                        />
                        <label className="text-input-small">SI</label>
                    </div>
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name="ciclo/marino"
                            value="no"
                        />
                        <label className="text-input-small">NO</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CicloMarino