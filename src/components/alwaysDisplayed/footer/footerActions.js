import {ContainerOutlined, DollarOutlined, ReadOutlined, WarningOutlined} from "@ant-design/icons";

export default function FooterActions() {
    return (
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
    )
}
