import React, { useState } from "react";
import "./readmore.css"

function ResumeAnalyzerText() {
    const [showMore, setShowMore] = useState(false);

    const textStart =
        "ATS Resume Analyzer is a smart tool that scans resumes for ATS compatibility, highlighting formatting issues and ";
    const textHidden =
        " keyword gaps Users can also upload resumes to get matched job listings from top portals, ranked by relevance score—making job discovery faster, smarter, and easier.";


    return (
        <p className="procard313">
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
