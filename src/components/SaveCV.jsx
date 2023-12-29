import React from 'react';
import JsPDF from 'jspdf';

export default function SaveCV() {
    const generatePDF = () => {
        const element = document.getElementsByClassName("resume-container")[0];
        JsPDF()
            .from(element)
            .save();
    };

    return (
        <div>
            <button onClick={generatePDF}>Télécharger le CV au format PDF</button>
        </div>
    )
}