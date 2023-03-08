import React from "react";
import s from './Second.module.css'

const Second = () => {
    return (
        <div className={s.second}>
            <div className={s.secondContainer}>
                <div className={s.secondHeading}>FEATURE</div>
                <div className={s.secondText}>Dobbs v Jackson: impact on access to fertility care among newly diagnosed adolescents and young adults with cancer in the USA</div>
                <a href="#" className={s.secondLink}>Read more<svg id="hero_arrow" xmlns="http://www.w3.org/2000/svg" height="128" version="1.1" viewBox="0 0 54 128" width="54"><rect fill="none" height="128" width="54"></rect><path d="m1 99l38-38-38-38 7-7 45 45-45 45z"></path></svg></a>
            </div>
        </div>
    )
}



export default Second;