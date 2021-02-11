import React from 'react'
import '../../App.scss'
import MainPageForums from "./mainPageForums";
import OurTeam from "./ourTeam";
import OnlineUsers from "./onlineUsers";
import LastThemes from "./lastThemes";
import MainPageStatistic from "./statistic";

export default function MainPage() {
    return (
        <div className="content">

            <MainPageForums/>

            <div className="side_content">

                <OurTeam/>


                <OnlineUsers/>

                <LastThemes/>

                <MainPageStatistic/>

            </div>

        </div>
    )
}
