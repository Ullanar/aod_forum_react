import React from 'react'
import '../../../App.scss'
import MainLogo from "./mainLogo";
import HeaderMainActions from "./mainActions";
import HeaderSideActions from "./sideActions";
import HeaderSearch from "./search";

export default function Header() {
    return (
        <div className="header">

            <MainLogo/>

            <div className="menu">

                <HeaderMainActions/>
                <HeaderSideActions/>

            </div>

            <HeaderSearch/>

        </div>
    )
}
