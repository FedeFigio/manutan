import React, { useState } from 'react'

const NecessitaDiVentilazione = () => {
    const [data, setData] = useState({
        domanda: "NECESSITA' DI VENTILAZIONE ?",
        response: null,
        sottoDomanda: "Tipologia",
        responseSottodomanda: null,
        sottoDomanda2: "Posizione ventilatore",
        responseSottodomanda2: null,
        tipologiaDiChiusura: "Tipologia di chiusura",
        responseTipologiaDiChiusura: null,
        posizioneQuadroElettrico: "Posizione quadro elettrico",
        responsePosizioneQuadroElettrico: null,
    });
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex flex-col gap-4">
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
                {/* TIPOLOGIA */}
                {data.response=="si"&&<div className="flex flex-col gap-2">
                    <div className="text-input-medium">{data.sottoDomanda}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="naturale/forzata"
                                value="naturale"
                            onClick={(e) => {
                                setData((state) => {
                                    return {
                                        ...state,
                                        responseSottodomanda2: e.target.value,
                                    };
                                });
                            }}
                            />
                            <label className="text-input-small">Naturale</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="naturale/forzata"
                                value="forzata"
                            onClick={(e) => {
                                setData((state) => {
                                    return {
                                        ...state,
                                        responseSottodomanda2: e.target.value,
                                    };
                                });
                            }}
                            />
                            <label className="text-input-small">Forzata</label>
                        </div>
                    </div>
                </div>}
                {/* POSIZIONE VENTILATORE */}
                {data.responseSottodomanda2=="forzata"&&<div className="flex flex-col gap-2">
                    <div className="text-input-medium">{data.sottoDomanda2}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="destra/sinistra"
                                value="destra"
                            />
                            <label className="text-input-small">Destra</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="destra/sinistra"
                                value="sinistra"
                            />
                            <label className="text-input-small">Sinistra</label>
                        </div>
                    </div>
                </div>}
                {/* TIPOLOGIA DI CHIUSURA */}
                <div className="flex flex-col gap-2">
                    <div className="text-input-medium">{data.tipologiaDiChiusura}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="chiusura"
                                value="serrandaConTelecomando"
                            />
                            <label className="text-input-small">Serranda con telecomando</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="chiusura"
                                value="porteScorrevoli"
                            />
                            <label className="text-input-small">Porte scorrevoli</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="chiusura"
                                value="porteBattente"
                            />
                            <label className="text-input-small">Porte a battente</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="chiusura"
                                value="telo"
                            />
                            <label className="text-input-small">Telo</label>
                        </div>
                    </div>
                </div>
                {/* POSIZIONE QUADRO ELETTRICO */}
                <div className="flex flex-col gap-2">
                    <div className="text-input-medium">{data.posizioneQuadroElettrico}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="posizione/quadro/elettrico"
                                value="destra"
                            />
                            <label className="text-input-small">Destra</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="posizione/quadro/elettrico"
                                value="sinistra"
                            />
                            <label className="text-input-small">Sinistra</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NecessitaDiVentilazione