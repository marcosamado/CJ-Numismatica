import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CoinPage = () => {
    const { data } = useLoaderData();
    let { id } = useParams();

    id = id - 1;
    if (!data || typeof data !== "object") {
        console.error("La respuesta no es válida:", data);
        return <div>Error al cargar los datos.</div>;
    }

    class Element {
        constructor(name, loe) {
            this.name = name;
            this.loe = loe; // [No, Sí] o null si es un nodo hoja
        }
    }

    const A1 = new Element("A1", null);
    const A2 = new Element("A2", null);
    const A3 = new Element("A3", null);
    const A4 = new Element("A4", null);
    const A5 = new Element("A5", null);
    const A6 = new Element("A6", null);
    const A7 = new Element("A7", null);
    const A8 = new Element("A8", null);
    const A9 = new Element("A9", null);

    const P8 = new Element("P8: idéntica a A4 excepto por 4 rayos seguidos", [
        A4,
        A7,
    ]);
    const P7 = new Element(
        "P7: Comienzo de la segunda N de Argentina alineada con Rayo",
        [P8, A1]
    );
    const P6 = new Element("P6: Rayo Grueso Desp de la C", [A2, A3]);
    const P5 = new Element("P5: N Alineada con Rayo", [P6, P7]);
    const P4 = new Element("P4: Largo-corto-Largo en toda la moneda", [A8, A9]);
    const P3 = new Element("P3: 3 Largo-corto-Largo seguidos", [P5, P4]);
    const P2 = new Element("P2: 8 Alineado con Rayo", [A6, A5]);
    const P1 = new Element("P1: Tiene Puntos alrededor de la fecha", [P2, P3]);
    const [stateP, setStateP] = useState(P1);

    const handleClickYes = () => {
        setStateP(stateP.loe[1]);
    };

    const handleClickNo = () => {
        setStateP(stateP.loe[0]);
    };
    return (
        <div className="max-w-3xl ml-auto mr-auto">
            <h1 className="mt-10 font-bold text-3xl bg-gradient-to-r from-zinc-800 to-indigo-600 bg-clip-text text-transparent">
                {data[id].nombre}
            </h1>
            <div className="flex flex-row justify-around mt-10">
                <div>
                    <h2 className="text-4xl ">Anversos</h2>
                    <ul className="text-xl mt-5 ">
                        {data[id].anverso.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <button className="text-3xl border border-red-700 p-3 bg-slate-500 text-white hover:">
                        Qué variante de moneda tengo
                    </button>
                    <div className="flex flex-row text-center mt-5 gap-3">
                        <p className="font-semibold text-xl self-center">
                            {stateP.name}
                        </p>
                        {/* <div className="w-36 h-10">
                            <img
                                className="w-full h-full"
                                src="images/A3.jpg"
                                alt=""
                            />
                        </div> */}

                        <button
                            onClick={handleClickYes}
                            className="border rounded-lg border-blue-600 w-10"
                        >
                            SI
                        </button>
                        <button
                            onClick={handleClickNo}
                            className="border rounded-lg border-red-600 w-10"
                        >
                            NO
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className="w-24 h-24 mt-5">
                        <img
                            className="w-full h-full"
                            src="/public/images/A1.jpg"
                        />
                    </div> */}
            {/* <div className="w-24 h-24 mt-5">
                        <img
                            className="w-full h-full"
                            src="/public/images/A1.jpg"
                        />
                    </div>
                    <div className="w-24 h-24 mt-5">
                        <img
                            className="w-full h-full"
                            src="/public/images/A1.jpg"
                        />
                    </div>
                    <div className="w-24 h-24 mt-5">
                        <img
                            className="w-full h-full"
                            src="/public/images/A1.jpg"
                        />
                    </div> */}
        </div>
    );
};

export default CoinPage;

export const loaderPost = async () => {
    const res = await fetch(`json/monedas.json`);

    if (!res.ok)
        throw {
            status: res.status,
            statusText: "No Encontrado",
        };

    const data = await res.json();

    return { data };
};
