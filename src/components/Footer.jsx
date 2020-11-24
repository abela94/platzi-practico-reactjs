import React from "react";
import '../assets/styles/components/Footer.scss'

let user_terms_text = 'User terms'
let privacy_declaration_text = 'Privacy declaration'
let help_center_text = 'Help center' 

const Footer = () => {
    return (
        <footer className = 'footer'>
            <a href="/" alt = 'User terms'>{user_terms_text}</a>
            <a href="/" alt = 'privacy declaration'>{privacy_declaration_text}</a>
            <a href="/" alt = 'Help center'>{help_center_text}</a>
        </footer>
    )
}

export default Footer