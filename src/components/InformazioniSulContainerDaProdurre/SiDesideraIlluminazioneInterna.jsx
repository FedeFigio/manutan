import React, { useState } from 'react'

const SiDesideraIlluminazioneInterna = () => {
    const [data, setData] = useState({
        domanda: "SI DESIDERA L'ILLUMINAZIONE INTERNA ?",
        response: null,
        sottoDomanda: "Quanti punti luce ?",
        responseSottoDomanda: null,

    });
    return (
        // SI DESIDERA L'ILLUMINAZIONE INTERNA
        <div className='flex flex-col gap-4'>
            <div className="flex flex-col gap-2">
                <div className="text-input-domanda-principale">{data.domanda}</div>
                <div className="flex gap-5">
                    <div className="wrap-input-radio">
                        <input
                            type="radio"
                            name={data.domanda}
                            value="si"
                            onClick={(e) => {
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
                            name={data.domanda}
                            value="no"
                            onClick={(e) => {
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
            </div>
            {/* QUANTI PUNTI LUCE */}
            {data.response == "si" && <div>
                <div className="text-input-medium">{data.sottoDomanda}</div>
                <div className="text-input-medium mb-2">{data.temperaturaAmbienteMin}</div>
                <input className="inp" name="puntiLuce" type="number" />
            </div>}
        </div>

    )
}

export default SiDesideraIlluminazioneInterna