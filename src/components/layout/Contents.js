import React from "react";

function Contents({children, color}){
    return <main id="main" className={color}>{children}</main>
}

export default Contents;