import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

export default function FooterSocial(){
    return (
        <div className="social">

            <div className="social_text">МЫ В СОЦИАЛЬНЫХ СЕТЯХ
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
    )
}
