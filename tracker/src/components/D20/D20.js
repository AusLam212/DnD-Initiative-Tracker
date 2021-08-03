import React from "react";

function D20() {

    return (
        <span>{Math.floor(Math.random() * 20) + 1}</span>
    )
}

export default D20;