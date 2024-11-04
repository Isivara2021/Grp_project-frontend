import React from 'react';
import '../styles/BloodEducation.css';
import RBCsImage from '../images/RBCs.jpeg';
import PlateletsImage from '../images/Platelets.jpg';
import PlasmaImage from '../images/Plasma.jpg';
import WBCsImage from '../images/WBCs.jpg';
import BloodCompositionChartImage from '../images/BloodCompositionChart.png';

const BloodEducation = () => {
  return (
    <div className="blood-education">
      <h1>Blood Education</h1>
      <p className="intro">
        Many people have undergone blood tests or donated blood, but hematology - the study of blood - encompasses much more than this. Doctors who specialize in hematology (hematologists) are leading the many advances being made in the treatment and prevention of blood diseases.
      </p>
      
      <div className="blood-components">
        <div className="component red-blood-cells">
          <h2>Red Blood Cells (RBCs)</h2>
          <div className="component-content">
          <img src={RBCsImage} alt="Red Blood Cells" />
            <div className="text-content">
              <p><strong>Function:</strong> Transport oxygen from the lungs to the rest of the body and return carbon dioxide from the body to the lungs for exhalation.
              <br/><br/>
              <strong>Characteristics:</strong> Red blood cells are biconcave, lack a nucleus, and contain hemoglobin to transport oxygen efficiently through the body.</p>
            </div>
          </div>
        </div>
        
        <div className="component platelets">
          <h2>Platelets</h2>
          <div className="component-content">
            <img src={PlateletsImage} alt="Platelets" />
            <div className="text-content">
              <p><strong>Function:</strong> Acts as the liquid medium for blood cells and is responsible for transporting nutrients, hormones, and waste products throughout the body.
              <br/><br/>
              <strong>Characteristics:</strong> Mostly water (about 90%), with proteins, glucose, electrolytes, hormones, carbon dioxide, and waste products.</p>
            </div>
          </div>
        </div>
        
        <div className="component plasma">
          <h2>Plasma</h2>
          <div className="component-content">
            <img src={PlasmaImage} alt="Plasma" />
            <div className="text-content">
              <p><strong>Function:</strong> Acts as the liquid medium for blood cells and is responsible for transporting nutrients, hormones, and waste products throughout the body.
              <br/><br/>
              <strong>Characteristics:</strong> Mostly water (about 90%), with proteins, glucose, electrolytes, hormones, carbon dioxide, and waste products.</p>
            </div>
          </div>
        </div>
        
        <div className="component white-blood-cells">
          <h2>White Blood Cells (WBCs)</h2>
          <div className="component-content">
            <img src={WBCsImage} alt="White Blood Cells" />
            <div className="text-content">
              <p><strong>Function:</strong> White blood cells are part of the immune system; they help defend the body against infection, disease, and foreign invaders.
              <br/><br/>
              <strong>Characteristics:</strong> Several types, including neutrophils, lymphocytes, monocytes, eosinophils, and basophils, each with specific roles in immune response.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="blood-composition">
        <img src={BloodCompositionChartImage} alt="Blood Composition Chart" />
      </div>
    </div>
  );
};

export default BloodEducation;
