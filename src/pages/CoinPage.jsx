import { list } from "postcss";
import React, { useEffect, useState } from "react";

const CoinPage = () => {
    const [data, setData] = useState();
    const [pregunta1, setPregunta1] = useState(0);

    async function fetchData() {
        try {
            let response = await fetch("src/json/monedas.json");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            let data = await response.json();
            setData(data);
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClickYes = () => {
        setPregunta1(1);
    };

    const handleClickNo = () => {
        setPregunta1(2);
    };
    return (
        <div className="max-w-3xl ml-auto mr-auto">
            <h1 className="mt-10 font-bold text-3xl bg-gradient-to-r from-zinc-800 to-indigo-600 bg-clip-text text-transparent">
                Moneda de 4 centavos de 1854
            </h1>
            <div className="flex flex-row justify-around mt-10">
                <div>
                    <h2 className="text-4xl ">Anversos</h2>
                    <ul className="text-xl mt-5 ">
                        {/* {data?.map((element) => console.log(element.anverso.map((item) => item)))
                )} */}
                        {data?.map((element) =>
                            element.anverso.map((item) => <li>{item}</li>)
                        )}
                    </ul>
                </div>

                <div>
                    <button className="text-3xl border border-red-700 p-3 bg-slate-500 text-white hover:">
                        Qué variante de moneda tengo
                    </button>
                    <div className="flex flex-row text-center mt-5 gap-3">
                        <p className="font-semibold text-xl self-center">
                            Hay puntos a los lados de la fecha?
                        </p>
                        <div className="w-36 h-10">
                            <img
                                className="w-full h-full"
                                src="images/A3.jpg"
                                alt=""
                            />
                        </div>

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
