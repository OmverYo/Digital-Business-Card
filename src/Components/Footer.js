import React from "react"
import GitHub from "./../Images/github-mark-white.png"

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/OmverYo?tab=repositories">
                <img className="footer--icons" src={GitHub} alt="social--icon"></img>
            </a>
        </footer>
    )
}