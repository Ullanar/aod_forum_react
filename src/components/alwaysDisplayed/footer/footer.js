import React from 'react'
import '../../../App.scss'
import FooterActions from "./footerActions";
import FooterSocial from "./footerSocialCredentials";
import FooterCopyright from "./footerCopyright";

export default function Footer() {
    return (
        <div className="footer">

            <div className="footer_container">

                <FooterActions/>

                <FooterSocial/>

                <FooterCopyright/>

            </div>

        </div>
    )
}
