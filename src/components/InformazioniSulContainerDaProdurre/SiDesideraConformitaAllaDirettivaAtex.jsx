import React, { useState } from 'react'

const SiDesideraConformitaAllaDirettivaAtex = () => {
    const [data, setData] = useState({
        domandaPrincipale: "SI DESIDERA CONFORMITA' ALLA DIRETTIVA ATEX ?",
        responseDomandaPrincipale: null,
        sottoDomanda: "Il container sarà collocato in zona ATEX ?",
        responseSottoDomanda: null,
        sottoDomanda2: "Si desidera che le apparecchiature esterne siano conformi alla direttiva ATEX ?",
        responseSottoDomanda2: null,



    });
    return (
        // SI DESIDERA CONFORMITA ALLA DIRETTIVA ATEX?
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
                                console.log(e);
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
                                console.log(e);
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
            </div>
            {/* IL CONTAINER SARA COLLOCATO IN ZONA ATEX? */}
            {data.responseDomandaPrincipale == "si" && <div>
                <div className='flex flex-col gap-2'>
                    <div className="text-input-medium">{data.sottoDomanda}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="collocazione/atex"
                                value="si"
                                onClick={(e) => {
                                    console.log(e);
                                    setData((state) => {
                                        return {
                                            ...state,
                                            responseSottoDomanda: e.target.value,
                                        };
                                    });
                                }}
                            />
                            <label className="text-input-small">SI</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="collocazione/atex"
                                value="no"
                                onClick={(e) => {
                                    console.log(e);
                                    setData((state) => {
                                        return {
                                            ...state,
                                            responseSottoDomanda: e.target.value,
                                        };
                                    });
                                }}
                            />
                            <label className="text-input-small">NO</label>
                        </div>
                    </div>
                </div>
            </div>}
            {/* SI DESIDERA CHE LE APPARECCHIATURE ESTERNE SIANO CONFORMI ALLA DIRETTIVA ATEX? */}
            {data.responseDomandaPrincipale == "no" && <div>
                <div className='flex flex-col gap-2'>
                    <div className="text-input-medium">{data.sottoDomanda2}</div>
                    <div className="flex gap-5">
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="direttiva/atex"
                                value="si"
                            />
                            <label className="text-input-small">SI</label>
                        </div>
                        <div className="wrap-input-radio">
                            <input
                                type="radio"
                                name="direttiva/atex"
                                value="no"
                            />
                            <label className="text-input-small">NO</label>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SiDesideraConformitaAllaDirettivaAtex