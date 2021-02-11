import {TeamOutlined} from "@ant-design/icons";
import '../../App.scss'
import OnlineUsersList from "./onlineUsersList";

export default function OnlineUsers(){
    return(
        <div className="online_users">

            <div className="online_users_header">
                <TeamOutlined/> ПОЛЬЗОВАТЕЛИ ОНЛАЙН
            </div>
            <div className="online_users_titles">
                <OnlineUsersList/>
            </div>
            <br/>
            <div className="user_statistic">
                Всего: 72 (пользователей: 40, гостей 32)
            </div>

        </div>
    )
}
