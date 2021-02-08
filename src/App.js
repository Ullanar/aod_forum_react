import './App.scss';
import {
    ReadOutlined,
    WarningOutlined,
    ContainerOutlined,
    DollarOutlined,
    YoutubeOutlined,
    InstagramOutlined,
    FacebookOutlined,
    CopyrightOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Avatar} from 'antd';


import logoAoD from './assets/logo.png'


function App() {
    return (
        <div className="App">
            <div className="wrapper">

                <div className="header">

                    <div className="logo">
                        <img src={logoAoD} className="logo_aod"/>
                    </div>

                    <div className="menu">

                        <div className="main_actions">

                            <div className="menu_item">
                                <ContainerOutlined/> ФОРУМ
                            </div>
                            <div className="menu_item">
                                <WarningOutlined/> КАК НАЧАТЬ ИГРАТЬ
                            </div>
                            <div className="menu_item">
                                <ReadOutlined/> ЛОР
                            </div>
                            <div className="menu_item">
                                <DollarOutlined/> ПОЖЕРТВОВАНИЯ
                            </div>
                        </div>

                        <div className="side_actions">

                            <div className="side_item">
                                Зарегистрироваться
                            </div>

                            <div className="side_item">
                                Войти
                            </div>

                        </div>

                    </div>

                    <div className="search">
                        <div className="search_container">
                            <div className="search_item">НОВЫЕ СООБЩЕНИЯ</div>
                            <div className="search_item">ПОИСК ПО ФОРУМУ</div>
                        </div>


                    </div>

                </div>

                <div className="content">

                    <div className="main_content">
                        Ебейшая куча постов
                    </div>

                    <div className="side_content">

                        <div className="our_team">

                            <div className="our_team_header">
                                НАША КОМАНДА
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

                        <div className="online_users">
                            Пользователи онлайн
                        </div>

                        <div className="last_themes">
                            Последние темы
                        </div>

                        <div className="statistic">
                            Статистика форума
                        </div>

                    </div>

                </div>

                <div className="footer">

                    <div className="footer_container">

                        <div className="footer_actions">

                            <div className="menu_item">
                                <ContainerOutlined/> ФОРУМ
                            </div>

                            <div className="menu_item">
                                <WarningOutlined/> КАК НАЧАТЬ ИГРАТЬ
                            </div>

                            <div className="menu_item">
                                <ReadOutlined/> ЛОР
                            </div>

                            <div className="menu_item">
                                <DollarOutlined/> ПОЖЕРТВОВАНИЯ
                            </div>

                        </div>

                        <div className="social">

                            <div className="social_text">
                                МЫ В СОЦИАЛЬНЫХ СЕТЯХ
                            </div>

                            <div className="icons">
                                <div className="social_icon">
                                    <YoutubeOutlined/>
                                </div>

                                <div className="social_icon">
                                    <InstagramOutlined/>
                                </div>

                                <div className="social_icon">
                                    <FacebookOutlined/>
                                </div>
                            </div>

                        </div>

                        <div className="copyright">
                            <CopyrightOutlined/> S.T.A.L.K.E.R. AREA OF DECAY 2021
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default App;
