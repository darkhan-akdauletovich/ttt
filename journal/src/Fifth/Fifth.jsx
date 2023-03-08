import React from "react";
import s from './Fifth.module.css'

const Fifth = () => {
    return (
        <div className={s.fifth}>
            <div className={s.fifthContainer}>
            <div className={s.fifthHeader}>Online First</div>
            <div className={s.fifthFlex}>
                <div className={s.fifthColumn}>
                    <div className={s.fifthColumnDescr}>
                        <div className={s.fifthColumnText}><a
                        className="fifthLinks" href="#">Pembrolizumab versus placebo as adjuvant therapy in resected stage IIB or IIC melanoma (KEYNOTE-716): distant metastasis-free survival results of a multicentre, double-blind, randomised, phase 3 trial</a></div>
                        <div className={s.fifthColumnTitle}>Published: October 17, 2022</div>
                    </div>   
                </div>
                <div className={s.fifthColumn}>
                    <div className={s.fifthColumnDescr}>
                        <div className={s.fifthColumnText}><a className="fifthLinks" href="#">Continuous enzalutamide after progression of metastatic castration-resistant prostate cancer treated with docetaxel (PRESIDE): an international, randomised, phase 3b study</a></div>
                        <div className={s.fifthColumnTitle}>Published: October 17, 2022</div>
                    </div>   
                </div>
                <div className={s.fifthColumn}>
                    <div className={s.fifthColumnDescr}>
                        <div className={s.fifthColumnText}><a className="fifthLinks" href="#">Association of the interaction between mosaic chromosomal alterations and polygenic risk score with the risk of lung cancer: an array-based case-control association and prospective cohort study</a></div>
                        <div className={s.fifthColumnTitle}>Published: October 17, 2022</div>
                    </div>   
                </div>
                <div className={s.fifthColumn}>
                    <div className={s.fifthColumnDescr}>
                            <div className={s.fifthColumnText}><a className="fifthLinks" href="#">PSMA and FDG-PET as predictive and prognostic biomarkers in patients given [177Lu]Lu-PSMA-617 versus cabazitaxel for metastatic castration-resistant prostate cancer (TheraP): a biomarker analysis from a randomised, open-label, phase 2 trial</a></div>
                            <div className={s.fifthColumnTitle}>Published: October 17, 2022</div>
                    </div>   
                </div>
            </div>
            <div className={s.fifthLink}>
                <a href="#" className={s.fifthLinkImg}><svg id="fifth" xmlns="http://www.w3.org/2000/svg" fill=""red height="128" version="1.1" viewBox="0 0 54 128" width="54"><rect fill="none" height="128" width="54"></rect><path d="m1 99l38-38-38-38 7-7 45 45-45 45z"></path></svg></a>
                <a href="" className={s.fifthLinkView}>View more</a>
            </div>
            
            </div>
        </div>
    )
}



export default Fifth;