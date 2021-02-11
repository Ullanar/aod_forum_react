import {TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";

export default function OurTeam() {
    return (
        <div className="our_team">

            <div className="our_team_header">
                <TeamOutlined/> НАША КОМАНДА
            </div>

            <br/>

            <div className="our_team_titles">
                <div className="team_title">

                    <div className="admin_avatar">
                        <Avatar size={50} icon={<UserOutlined/>}/>
                    </div>

                    <div className="admin_name">
                        Администрация
                    </div>

                </div>
                <div className="team_title">
                    <div className="admin_avatar">
                        <Avatar size={50} icon={<UserOutlined/>}/>
                    </div>
                    <div className="admin_name">
                        Младший RP куратор
                    </div>
                </div>
                <div className="team_title">
                    <div className="admin_avatar">
                        <Avatar size={50} icon={<UserOutlined/>}/>
                    </div>
                    <div className="admin_name">
                        Младший RP куратор
                    </div>
                </div>
                <div className="team_title">
                    <div className="admin_avatar">
                        <Avatar size={50} icon={<UserOutlined/>}/>
                    </div>
                    <div className="admin_name">
                        Младший RP куратор
                    </div>
                </div>
            </div>

        </div>

    )
}
