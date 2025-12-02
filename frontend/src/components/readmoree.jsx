import React, { useState } from "react";
import "./readmoree.css"

function ResumeAnalyzerText() {
    const [showMore, setShowMore] = useState(false);

    const textStart =
        "CROPIC Prototype is an AI-driven crop image analysis system for PMFBY. Farmers upload crop photos,  ML model";
    const textHidden =
        " detects health, damage, and disaster impact to generate a score, feedback, and insurance eligibility. It streamlines crop loss assessment with faster, transparent, and unbiased results.";

    return (
        <p className="procard313s">
            {textStart}
            {!showMore}
            {showMore && textHidden}
            <span
                onClick={() => setShowMore(!showMore)}
                className="readmore-toggle"
                style={{ cursor: "pointer", marginLeft: "5px" }}
            >
                {showMore ? " Show less" : "..."}
            </span>
        </p>
    );

}

export default ResumeAnalyzerText;
