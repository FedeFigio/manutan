import React, { useState } from 'react'

const TelecameraEsterna = () => {
    const [data, setData] = useState({
        domandaPrincipale: "TELECAMERA ESTERNA ?",
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
                            value="si"
                        />
                        <label className="text-input-small">SI</label>
                    </div>
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domandaPrincipale}
                            value="no"
                        />
                        <label className="text-input-small">NO</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TelecameraEsterna