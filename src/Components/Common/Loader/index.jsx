import React from "react";
import style from "./style.module.css";
export default function Loader() {
    return (
        <div className=" w-full flex items-center justify-center ">
            <span className={style.loader}></span>
        </div>
    );
}
