import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'


const IntakeForm = () => {
    const [key, setKey] = useState('page1');
    const [formData, setFormData] = useState({});
    const [consentChecked, setConsentChecked] = useState(false);
   


    const handleSelect = (k) => {
        setKey(k);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!consentChecked) {
            toast('Please review all information entered before you consent to submit the form in the "Submit Intake" tab.');
            return;
        }
        // collect form data using FormData
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        setFormData(data);

        // generate PDF with form data
        const pdfData = generatePDF(data);

        uploadFile(pdfData);
    };

    const uploadFile = async (pdfData) => {
        const formData = new FormData();
        formData.append('file', pdfData);
    
        const apiKey = import.meta.env.VITE_API_KEY;
        console.log(apiKey)
        try {
            const response = await fetch('https://file.io/', {
                method: 'POST',
                body: formData,
                headers: {
                "Authorization": apiKey
                }
            });
            if (!response.ok) {
                throw new Error('Upload failed');
            }
            toast.success('Form submitted successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            toast('Sorry, failed to submit form. Please try again later or email the completed pdf directly to: esc.advocate@gmail.com');
        }
    };

    const generatePDF = (formData) => {
        const doc = new jsPDF();
        let y = 20;

        const sections = [
            { title: 'Basic Demographics', fields: ['firstName', 'middleName', 'lastName', 'alias', 'genderIdentity', 'preferredPronouns', 'ethnicity', 'primaryLanguage', 'preferredLanguage', 'maritalStatus', 'dob', 'countryOfOrigin', 'currentAddress', 'residencyduration', 'pastresidency', 'currentResidency', 'currentResidencyDuration', 'pastShelter', 'safePhone', 'voiceMail', 'safeEmail'] },
            { title: 'Medical/Legal', fields: ['medicalConditions', 'medications', 'healthInsurance', 'pastInjuries', 'pcp', 'legal', 'substance', 'criminal'] },
            { title: 'Children', fields: ['childrenNames', 'childrenDOB', 'childCustody', 'POHparent', 'childHealth', 'school'] },
            { title: 'POH', fields: ['pohName', 'relationship', 'pohDOB', 'pohEmployment', 'pohAddress', 'pohZips', 'pohSubstance', 'pohCriminal', 'pohProperty'] },
            { title: 'History', fields: ['relationshipHistory'] },
            { title: 'Other Info', fields: ['otherInfo'] },
        ];

        sections.forEach((section, index) => {
            if (index > 0) {
                doc.addPage();
                y = 20;
            }

            doc.text(20, y, section.title, { fontSize: 10 });
            y += 10;

            // Iterate over the fields in the section and add them to the PDF
            section.fields.forEach((field) => {
                const value = formData[field];
                if (value !== undefined && value !== null) {
                    if (section.title === 'History' || section.title === 'Other Info') {
                        const lines = doc.splitTextToSize(value, 170); // Adjust width as needed
                        lines.forEach(line => {
                            const lineHeight = doc.getTextDimensions(line).h / doc.internal.scaleFactor;
                            doc.text(20, y, line, { fontSize: 5 });
                            y += lineHeight + 5; // Adjust spacing as needed
                        });
                    } else {
                        const lineHeight = doc.getTextDimensions(value).h / doc.internal.scaleFactor;
                        doc.text(20, y, `${field}: ${value}`, { fontSize: 5 });
                        y += lineHeight + 5; // Adjust spacing as needed
                    }
                }
            });
        });
        const pdfData = doc.output('blob');
        // Save the concatenated PDF
        doc.save("intake_form.pdf");
        return pdfData;
    };

    
    
    
    return (
        <div className="container">
            <hr /> <h4 style={{ textAlign: 'center' }}>[ Intake Form ]</h4> <hr />
            <form onSubmit={handleSubmit}> 
            {/* wrap all tabs in one form */}
            <Tabs activeKey={key} onSelect={handleSelect}>

                <Tab eventKey="page1" title="Basic Demographics">
                        <p>Note: Please ensure all fields are complete and accurate. Type N/A if it does not apply to you.</p> <hr />

                        <h5 style={{ textAlign: 'center' }}>Personal Information:</h5> <hr />

                        <label htmlFor="firstName">First Name:</label>
                        <br />
                        <input type="text" id="firstName" name="firstName" required /> <hr />

                        <label htmlFor="middleName">Middle Name:</label>
                        <br />

                        <input type="text" id="middleName" name="middleName" required /> <hr />

                        <label htmlFor="lastName">Last Name:</label> <br />
                        <input type="text" id="lastName" name="lastName" required /> <hr />

                        <label htmlFor="alias">Aliases/Former Names:</label><br />
                        <input type="text" id="alias" name="alias" required /> <hr />

                        <label htmlFor="genderIdentity">Gender Identity:</label><br />
                        <input type="text" id="genderIdentity" name="genderIdentity" required /> <hr />

                        <label htmlFor="preferredPronouns">Preferred Pronouns:</label><br />
                        <input type="text" id="preferredPronouns" name="preferredPronouns" required /> <hr />

                        <label htmlFor="ethnicity">Ethnicity:</label><br />
                        <input type="text" id="ethnicity" name="ethnicity" required /> <hr />

                        <label htmlFor="primaryLanguage">Primary Language:</label><br />
                        <input type="text" id="primaryLanguage" name="primaryLanguage" required /> <hr />

                        <label htmlFor="preferredLanguage">Preferred Language:</label><br />
                        <input type="text" id="preferredLanguage" name="preferredLanguage" required /> <hr />

                        <label htmlFor="maritalStatus">Marital Status:</label><br />
                        <input type="text" id="maritalStatus" name="maritalStatus" required /> <hr />

                        <label htmlFor="dob">Date of Birth:</label><br />
                        <input type="date" id="dob" name="dob" required /> <hr />

                        <label htmlFor="countryOfOrigin">Country of Origin:</label><br />
                        <input type="text" id="countryOfOrigin" name="countryOfOrigin" required /> <hr />

                        <h5 style={{ textAlign: 'center' }}>Residency Information:</h5> <hr />

                        <label htmlFor="currentAddress">Current Address (Indicate if Living with POH):</label><br />
                        <input type="text" id="currentAddress" name="currentAddress" required /> <hr />

                        <label htmlFor="residencyduration">For how long (Include # of months/years):</label><br />
                        <input type="text" id="residencyduration" name="residencyduration" required /> <hr />

                        <h5 style={{ textAlign: 'center' }}>If You are Currently Experiencing Homelessness:</h5> <hr />

                        <label htmlFor="pastresidency">Past Addresses and Dates (separated by a comma):</label><br />
                        <input type="text" id="pastresidency" name="pastresidency" required /> <hr />

                        <label htmlFor="currentResidency">Where/With Whom are You Living With:</label><br />
                        <input type="text" id="currentResidency" name="currentResidency" required /> <hr />

                        <label htmlFor="currentResidencyDuration">Duration of Tenancy:</label><br />
                        <input type="text" id="currentResidencyDuration" name="currentResidencyDuration" required /> <hr />

                        <label htmlFor="pastShelter">Have You Been in a Shelter Before? <br /> (Indicate Dates and Names of Shelters):</label>
                        <br /><input type="text" id="pastShelter" name="pastShelter" required /> <hr />

                        <h5 style={{ textAlign: 'center' }}>Contact Information:</h5> <hr />

                        <label htmlFor="safePhone">Safe Phone Number:</label><br />
                        <input type="text" id="safePhone" name="safePhone" required /> <hr />

                        <label htmlFor="voiceMail">Safe to Leave a Voicemail? (Y/N):</label><br />
                        <input type="text" id="voiceMail" name="voiceMail" required /> <hr />

                        <label htmlFor="safeEmail">Safe Email Address:</label><br />
                        <input type="text" id="safeEmail" name="safeEmail" required /> <hr />


                        <button onClick={() => setKey('page2')}>Next</button> <br /> <br />
                </Tab>


                <Tab eventKey="page2" title="Medical/Legal">
                        <p>Note: Please ensure all fields are complete and accurate. Type N/A if it does not apply to you.</p> <hr />

                        <h5 style={{ textAlign: 'center' }}>Medical Information:</h5> <hr />

                        <label htmlFor="medicalConditions">Medical Conditions:</label><br />
                        <input type="text" id="medicalConditions" name="medicalConditions" /> <hr /> 

                        <label htmlFor="medications">Medications/Therapy:</label><br />
                        <input type="text" id="medications" name="medications" /> <hr />

                        <label htmlFor="healthInsurance">Health Insurance (if any):</label><br />
                        <input type="text" id="healthInsurance" name="healthInsurance" /> <hr />

                        <label htmlFor="pastInjuries">Past Injuries/Dates (by POH):</label><br />
                        <input type="text" id="pastInjuries" name="pastInjuries" /> <hr />

                        <label htmlFor="pcp">Primary Doctor? (Y/N):</label><br />
                        <input type="text" id="pcp" name="pcp" /> <hr />

                        <h5 style={{ textAlign: 'center' }}>Legal Information: </h5> <hr />

                        <label htmlFor="legal">Current Legal Proceedings/Dates:</label><br />
                        <input type="text" id="legal" name="legal" /> <hr />

                        <label htmlFor="substance">Substance Use/History (if any):</label><br />
                        <input type="text" id="substance" name="substance" /> <hr />

                        <label htmlFor="criminal">Criminal History (if any):</label><br />
                        <input type="text" id="criminal" name="criminal" /> <hr />

                        <button onClick={() => setKey('page3')}>Next</button> <br /> <br />
                </Tab>


                <Tab eventKey="page3" title="Children">

                        <p>Note: Please ensure all fields are complete and accurate. Type N/A if it does not apply to you.</p> <hr />

                        <label htmlFor="childrenNames">Children's Names (separated by commas):</label><br />
                        <input type="text" id="childrenNames" name="childrenNames" /> <hr />

                        <label htmlFor="childrenDOB">Children's DOB (separated by commas):</label><br />
                        <input type="text" id="childrenDOB" name="childrenDOB" /> <hr />

                        <label htmlFor="childCustody">Child Custody Status:</label><br />
                        <input type="text" id="childCustody" name="childCustody" /> <hr />

                        <label htmlFor="POHparent">Is POH other parent of children? (Indicate Names):</label><br />
                        <input type="text" id="POHparent" name="POHparent" /> <hr />

                        <label htmlFor="childHealth">Children's Health/Medical Conditions:</label><br />
                        <input type="text" id="childHealth" name="childHealth" /> <hr />

                        <label htmlFor="school">Children's School/s Attending:</label><br />
                        <input type="text" id="school" name="school" /> <hr />



                        <button onClick={() => setKey('page4')}>Next</button> <br /> <br />
                </Tab>

                <Tab eventKey="page4" title="Person of Harm">

                        <p>Note: Please ensure all fields are complete and accurate. Type N/A if it does not apply to you.</p> <hr />

                        <label htmlFor="pohName">POH's Full Name:</label><br />
                        <input type="text" id="pohName" name="pohName" /> <hr />

                        <label htmlFor="relationship">Relationship to POH:</label><br />
                        <input type="text" id="relationship" name="relationship" /> <hr />

                        <label htmlFor="pohDOB">POH's DOB:</label><br />
                        <input type="date" id="pohDOB" name="pohDOB" /> <hr />

                        <label htmlFor="pohEmployment">Place of Employment:</label><br />
                        <input type="text" id="pohEmployment" name="pohEmployment" /> <hr />

                        <label htmlFor="pohAddress">Current Address:</label><br />
                        <input type="text" id="pohAddress" name="pohAddress" /> <hr />

                        <label htmlFor="pohZips">Zip Codes of POH's Friends/Families:</label><br />
                        <input type="text" id="pohZips" name="pohZips" /> <hr />

                        <label htmlFor="pohSubstance">Substance Abuse History:</label><br />
                        <input type="text" id="pohSubstance" name="pohSubstance" /> <hr />

                        <label htmlFor="pohCriminal">POH's Criminal Records:</label><br />
                        <input type="text" id="pohCriminal" name="pohCriminal" /> <hr />

                        <label htmlFor="pohProperty">Does POH own any of your property? <br />
                            (car, phone, joint bank accounts, etc):</label><br />
                        <input type="text" id="pohProperty" name="pohProperty" /> <hr />


                        <button onClick={() => setKey('page5')}>Next</button> <br /> <br />
                </Tab>

                <Tab eventKey="page5" title="Relationship History">

                        <p>Describe in detail your relationship history and timeline of abuse from your POH. Include dates and locations. Start with the most recent domestic violence incident and if the police were involved. Include any police records/restraining orders established. 
                        <br /><br />Remember that intimate partner violence (IPV) or domestic violence (DV) not only includes physical violence but also emotional, psychological, financial, emotional. The main goal of IPV is exertion of power and control on an individual that may include their family/children.</p> <hr />

                        <label htmlFor="relationshipHistory">Relationship/DV History:</label> <br /> <br />
                        <textarea id="relationshipHistory" name="relationshipHistory" rows="20" style={{ width: '100%' }} placeholder='For example:
Duration of Relationship - 03/2013 to 09/2023

DV Incidents (Starting with Most Recent):
Date/Time - What happened, where it happened, who was present during incident
.
.
.
.
First Incident of DV with POH
'></textarea> <br /> <br />

                        <button onClick={() => setKey('page6')}>Next</button> <br /> <br />
                </Tab>

                <Tab eventKey="page6" title="Other Info">


                        <label htmlFor="otherInfo">Other Information:</label> <br /> <br />
                        <textarea id="otherInfo" name="otherInfo" rows="10" style={{ width: '100%' }} 
                        placeholder='Any other relevant information you would like to share about the experiences you encountered with your POH as well as your current needs, challenges/obstacles, and responsibilities.'></textarea> <br /> <br />
                        <button onClick={() => setKey('page7')}>Next</button>
                </Tab>

                <Tab eventKey="page7" title="Submit Intake">
                        <input
                            type="checkbox"
                            id="consent"
                            checked={consentChecked}
                            onChange={() => setConsentChecked(!consentChecked)} />

                        <p>By checking this box, I attest that everything on this form is true
                            and correct. I also consent to submitting this form to the respective
                            advocate who will disseminate my intake form to DV shelters and
                            safehouses outside of my danger zones indicated by the locations
                            I have shared on this form. I understand that this form will
                            also be saved as a pdf onto my local device for my reference.
                            I will ensure to store it in a safe location.
                        </p> <hr />


                        <button onClick={() => setKey('page7')}>SUBMIT INTAKE</button>
                  
                </Tab>

                
            </Tabs>  
            </form>
        </div>


    );

};
export default IntakeForm;
