import React from "react";

const CoinCard = ({ element }) => {
    return (
        <div>
            <h2 className="text-3xl text-center">{element.nombre}</h2>
            <div className="w-96 h-96">
                <img
                    className="w-full h-full"
                    src={element.imgUrl}
                    alt="Coin Img"
                />
            </div>
        </div>
    );
};

export default CoinCard;
