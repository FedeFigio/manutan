import React, { useEffect, useState } from 'react'

const NecessitaDiClimatizzazione = () => {
    const [data, setData] = useState({
        domandaPrincipale: "NECESSITA' DI CLIMATIZZAZIONE ?",
        response: null,
        domanda2: "LUOGO DI INSTALLAZIONE",
        response2: null,
    })

    return (
        <div className="flex flex-col gap-4">
            {/* NECESSITA' DI CLIMATIZZAZIONE */}
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
                {data.response == "si" && <div className='flex flex-col gap-4'>
                    <div className="w-full flex gap-5  ">
                        <div>
                            <h2 className="text-input-medium mb-2">Voltaggio elettrico</h2>
                            <input className="inp" name="voltaggioElettrico" type="number" placeholder='Inserire valore in V' />
                        </div>
                    </div>
                    <div className="w-full flex gap-5  ">
                        <div>
                            <h2 className="text-input-medium mb-2">Temperatura interna MIN °C</h2>
                            <input className="inp" name="TemperaturaMinInterna" type="number" placeholder='Temperatura MIN °C' />
                        </div>
                        <div>
                            <h2 className="text-input-medium mb-2">Tolleranza +°C</h2>
                            <input className="inp" name="Tolleranza+" type="number" placeholder='Tolleranza +' />
                        </div>
                        <div>
                            <h2 className="text-input-medium mb-2">Tolleranza -°C</h2>
                            <input className="inp" name="Tolleranza-" type="number" placeholder='Tolleranza -' />
                        </div>
                    </div>
                    <div className="w-full flex gap-5  ">
                        <div>
                            <h2 className="text-input-medium mb-2">Temperatura interna MAX °C</h2>
                            <input className="inp" name="TemperaturaMaxInterna" type="number" placeholder='Temperatura MAX °C' />
                        </div>
                        <div>
                            <h2 className="text-input-medium mb-2">Tolleranza +°C</h2>
                            <input className="inp" name="Tolleranza+" type="number" placeholder='Tolleranza +' />
                        </div>
                        <div>
                            <h2 className="text-input-medium mb-2">Tolleranza -°C</h2>
                            <input className="inp" name="Tolleranza-" type="number" placeholder='Tolleranza -' />
                        </div>
                    </div>
                    {/* LUOGO DI INSTALLAZIONE */}
                    <div className="flex flex-col gap-2">
                        <div>
                            <h2 className="text-input-domanda-principale">{data.domanda2}</h2>
                        </div>
                        <div className="flex gap-5">
                            <div className="wrap-input-radio">
                                <input
                                    className=""
                                    type="radio"
                                    name="luogoInstallazione"
                                    onClick={(e) => {
                                        setData((state) => {
                                            return { ...state, response2: e.target.value };
                                        });
                                    }}
                                    value="interno"
                                />
                                <label className="text-input-small">Interno</label>
                            </div>
                            <div className="wrap-input-radio">
                                <input
                                    className=""
                                    type="radio"
                                    name="luogoInstallazione"
                                    value="esterno"
                                    onClick={(e) => {

                                        setData((state) => {
                                            return {
                                                ...state,
                                                response2: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <label className="text-input-small">Esterno</label>
                            </div>
                        </div>
                        {/* INTERNO */}
                        {data.response2 == "interno" && <div className='flex flex-col gap-4'>
                            <div className="w-full flex gap-5  ">
                                <div>
                                    <h2 className="text-input-medium mb-2">Temperatura MIN °C</h2>
                                    <input className="inp" name="temperaturaMinInterna" type="number" placeholder='Temperatura MIN °C' />
                                </div>
                                <div>
                                    <h2 className="text-input-medium mb-2">Temperatura MAX °C</h2>
                                    <input className="inp w-full" name="temperaturaMaxInterna" type="number" placeholder='Temperatura MAX °C' />
                                </div>
                            </div>
                            <div className="w-full flex gap-5  ">
                                <div>
                                    <h2 className="text-input-medium mb-2">Temp. ambiente MIN °C</h2>
                                    <input className="inp" name="temperaturaAmbienteMinInterna" type="number" placeholder='Temp. ambiente MIN °C' />
                                </div>
                                <div>
                                    <h2 className="text-input-medium mb-2">Temp. ambiente MAX °C</h2>
                                    <input className="inp w-full" name="temperaturaAmbienteMaxInterna" type="number" placeholder='Temp. ambiente MAX °C' />
                                </div>
                            </div>
                        </div>}
                        {/* ESTERNO */}
                        {data.response2 == "esterno" && <div>
                            <div className="flex gap-5">
                                <div>
                                    <h2 className="text-input-medium mb-2">Indirizzo</h2>
                                    <input className="inp" name="indirizzo" type="text" placeholder='Inserire indirizzo' />
                                </div>
                                <div className="flex flex-col gap-2 w-[300px]">
                                    <div className="text-input-medium">Esposizione delle porte</div>
                                    <div className="flex gap-5">
                                        <div className="wrap-input-radio">
                                            <input
                                                type="radio"
                                                name="esposizione/porte"
                                                value="nord"
                                            />
                                            <label className="text-input-small">Nord</label>
                                        </div>
                                        <div className="wrap-input-radio">
                                            <input
                                                type="radio"
                                                name="esposizione/porte"
                                                value="sud"
                                            />
                                            <label className="text-input-small">Sud</label>
                                        </div>
                                        <div className="wrap-input-radio">
                                            <input
                                                type="radio"
                                                name="esposizione/porte"
                                                value="est"
                                            />
                                            <label className="text-input-small">Est</label>
                                        </div>
                                        <div className="wrap-input-radio">
                                            <input
                                                type="radio"
                                                name="esposizione/porte"
                                                value="ovest"
                                            />
                                            <label className="text-input-small">Ovest</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-[300px]">
                                    <div className="text-input-medium">E' installato con schiena a muro ?</div>
                                    <div className="flex gap-5">
                                        <div className="wrap-input-radio">
                                            <input
                                                type="radio"
                                                name="schiena/muro"
                                                value="si"
                                            />
                                            <label className="text-input-small">SI</label>
                                        </div>
                                        <div className="wrap-input-radio">
                                            <input
                                                type="radio"
                                                name="schiena/muro"
                                                value="no"
                                            />
                                            <label className="text-input-small">NO</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="text-input-medium">Posizione macchina esterna</div>
                                    <div className="flex gap-5">
                                        <div className="wrap-input-radio">
                                            <input
                                                type="radio"
                                                name="macchina/esterna"
                                                value="destra"
                                            />
                                            <label className="text-input-small">Destra</label>
                                        </div>
                                        <div className="wrap-input-radio">
                                            <input
                                                type="radio"
                                                name="macchina/esterna"
                                                value="sinistra"
                                            />
                                            <label className="text-input-small">Sinistra</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>}
            </div>


        </div>
    )
}

export default NecessitaDiClimatizzazione