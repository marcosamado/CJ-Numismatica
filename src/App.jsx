import React, { useState } from "react";

const App = () => {
    const [pregunta1, setPregunta1] = useState(0);

    const handleClickYes = () => {
        setPregunta1(1);
    };

    const handleClickNo = () => {
        setPregunta1(2);
    };

    return (
        <div>
            <header></header>
            <main>
                <h1 className="text-center font-bold text-5xl bg-gradient-to-r from-zinc-800 to-indigo-600 bg-clip-text text-transparent">
                    Moneda de 4 centavos de 1854
                </h1>
                <div className="flex flex-row justify-around mt-10">
                    <div>
                        <h2 className="text-4xl ml-5">Anversos</h2>
                        <ul className="text-xl mt-5 ml-5">
                            <li
                                className={`${
                                    pregunta1 == 2 && "line-through"
                                }`}
                            >
                                A1
                            </li>
                            <li
                                className={`${
                                    pregunta1 == 2 && "line-through"
                                }`}
                            >
                                A2
                            </li>
                            <li
                                className={`${
                                    pregunta1 == 2 && "line-through"
                                }`}
                            >
                                A3
                            </li>
                            <li
                                className={`${
                                    pregunta1 == 2 && "line-through"
                                }`}
                            >
                                A4
                            </li>
                            <li
                                className={`${
                                    pregunta1 == 1 && "line-through"
                                }`}
                            >
                                A5
                            </li>
                            <li
                                className={`${
                                    pregunta1 == 1 && "line-through"
                                }`}
                            >
                                A6
                            </li>
                            <li
                                className={`${
                                    pregunta1 == 2 && "line-through"
                                }`}
                            >
                                A7
                            </li>
                            <li
                                className={`${
                                    pregunta1 == 2 && "line-through"
                                }`}
                            >
                                A8
                            </li>
                            <li
                                className={`${
                                    pregunta1 == 2 && "line-through"
                                }`}
                            >
                                A9
                            </li>
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
            </main>
            <footer></footer>
        </div>
    );
};

export default App;
