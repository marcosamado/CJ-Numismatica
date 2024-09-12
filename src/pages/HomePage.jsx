import React, { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";

const HomePage = () => {
    const [data, setData] = useState();

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
    fetchData();

    return (
        <div className="cointainer">
            <ul className="flex flex-row justify-around flex-wrap">
                {data?.map((element) => (
                    <CoinCard element={element} />
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
