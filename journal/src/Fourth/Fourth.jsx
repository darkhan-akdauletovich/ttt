import React from "react";
import s from './Fourth.module.css'

const Fourth = () => {
    return (
        <div className={s.fourthContainer}>
            <div className={s.fourthHeader}>Current issue</div>
            <div className={s.fourth_injection}>
                <a href="#" className={s.fourthInjectionImage}><img src=""/></a>
                <div className={s.fourthInjectionTitle}>October 2022</div>
                <div className={s.fourthInjectionSubtitle}>Volume 23, Issue 10</div>
                <div className={s.fourthInjectionTable}><a href="" className={s.fourthInjectionTableLink}>Table of Contents</a></div>
                <div className={s.fourthInjectionArchive}><a href="#" className={s.fourthInjectionArchiveLink}>S View archive</a></div>
            </div>
            <div className={s.fourthFlex}>Name
                <div className={s.fourthColumn}>
                    <a href="" className={s.fourthColumnImage}><img/></a>
                    <div className={s.fourthColumnDescr}>
                        <div className={s.fourthColumnTitle}>ARTICLES</div>
                        <div className={s.fourthColumnText}><a className={s.fourthLink} href="#">Rezvilutamide versus bicalutamide in combination with androgen-deprivation therapy in patients with high-volume, metastatic, hormone-sensitive prostate cancer (CHART): a randomised, open-label, phase 3 trial</a></div>
                    </div>
                    
                </div>
                <div className={s.fourthColumn}>
                    <a href="" className={s.fourthColumnImage}><img/></a>
                    <div className={s.fourthColumnDescr}>
                        <div className={s.fourthColumnTitle}>ARTICLES</div>
                        <div className={s.fourthColumnText}><a href="#">Pembrolizumab versus placebo as adjuvant therapy for completely resected stage IB–IIIA non-small-cell lung cancer (PEARLS/KEYNOTE-091): an interim analysis of a randomised, triple-blind, phase 3 trial</a></div>
                    </div>
                </div>
                <div className={s.fourthColumn}>
                    <a href="" className={s.fourthColumnImage}><img/></a>
                    <div class={s.fourthColumnDescr}>
                        <div className={s.fourthColumnTitle}>REVIEW</div>
                        <div className={s.fourthColumnText}><a href="#">Clinical advances and ongoing trials of mRNA vaccines for cancer treatment</a></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}



export default Fourth;