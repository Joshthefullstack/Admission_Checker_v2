//DECLARATION OF BUTTONS
let preDivBtn = document.getElementById("predivbutton");
let btn = document.getElementById("button");
let prevButton = document.getElementById("prev_button")
let secondButton = document.getElementById("second_button");
let prevAdmissionBtn = document.getElementById("prev_admission_button");
let thirdButton = document.getElementById("third_button");
let prevoLevelButton = document.getElementById("third_prev_button");
let refreshForm = document.getElementById("start_again");

//DECLARATION OF ARRAYS OF DROPDOWN
let gender = ["Male", "Female"];
let olevelGrade = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9"];
let olevelSubject = [
    "Physics",
    "Chemistry",
    "Government",
    "Economics",
    "Commerce",
    "Accounting",
    "Literature-In-English",
    "Biology",
    "Agricultural Science",
    "Christian Religious Knowledge",
];
let sOGArray = [
    "Abia",
    "Adamawa",
    "Akwa-Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross-River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
];
let catchmentState = [
    "Lagos",
    "Edo",
    "Kogi",
    "Ogun",
    "Osun",
    "Ekiti",
    "Oyo",
    "Ondo",
];


// DIV TO SPECIFY EACH STAGE
let preAdmission = document.getElementById("pre-admission");
let personalInfoDiv = document.getElementById("firstContainer");
let preversityQualificationDiv = document.getElementById("secondContainer");
let oLevelQualificationDiv = document.getElementById("thirdContainer");
let eligibilityCheckerDiv = document.getElementById("fourthContainer");


// PREVIOUS BUTTON TO GO BACK TO PREVIOUS DIV
preDivBtn.addEventListener("click", () => {
    preAdmission.style.display = "none";
    personalInfoDiv.style.display = "block";
});

prevButton.addEventListener('click', () => {
    personalInfoDiv.style.display = "none"
    preAdmission.style.display = "block"  
    admissionChecker.error.style.backgroundColor = "transparent"
    admissionChecker.error.innerHTML = "";  
});

prevAdmissionBtn.addEventListener('click', () => {
    preversityQualificationDiv.style.display = "none"
    personalInfoDiv.style.display = "block";
    admissionChecker.error.style.backgroundColor = "transparent" 
    admissionChecker.error.innerHTML = "";
});

prevoLevelButton.addEventListener('click', () => {
    oLevelQualificationDiv.style.display = "none"
    preversityQualificationDiv.style.display = "block"
    admissionChecker.error.style.backgroundColor = "transparent" 
    admissionChecker.error.innerHTML = "";
});

refreshForm.addEventListener("click", () => {
    eligibilityCheckerDiv.style.display = "none"
    preAdmission.style.display = "block"
})


//OBJECT TO CHECK ADMISSION
let admissionChecker = {
    //ERROR MESSAGE DECLARATION
    error: document.getElementById("error_message"),
    // PERSONAL INFORMATION VERIFICATION
    personalInfo: {
        firstName: "",
        secondName: "",
        email: "",
        dateOfBirth: "",
        mobileNumber: "",
        yearOfBirth: "",
        currentYear: "",
        age: "",
        genderId: 0,
        stateOfOriginId: 0,
        stateOfOrigin: "",
        isValid: btn.addEventListener("click", function () {
            firstName = document.getElementById("first_name").value;
            if (firstName === "" || firstName.length < 2) {
                admissionChecker.error.innerHTML =
                    "Please check if you input a valid first name";
                admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            secondName = document.getElementById("second_name").value;
            if (secondName === "" || secondName.length < 2) {
                admissionChecker.error.innerHTML =
                    "Please check if you input a valid last name";
                return false;
            }
            email = document.getElementById("email").value;
            if (
                email === "" ||
                email.length < 2 ||
                !email.includes("@") ||
                email.slice(-4) !== ".com"
            ) {
                admissionChecker.error.innerHTML =
                    "Please check if you input a valid email input";
                return false;
            }
            dateOfBirth = document.getElementById("date").value;
            if (dateOfBirth === "") {
                admissionChecker.error.innerHTML =
                    "Please check if you input a valid date of birth";
                admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            yearOfBirth = dateOfBirth.slice(0, 4);
            currentYear = new Date().getFullYear();
            ageOfCandidate = currentYear - yearOfBirth;
            if (ageOfCandidate < 16) {
                admissionChecker.error.innerHTML =
                    "You aren't up to the required age for admission";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            genderId = selectGender.value;
            if (genderId === "0") {
                admissionChecker.error.innerHTML =
                    "Pleace check if you input a valid gender";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            }

            stateOfOriginId = selectState.value;
            if (stateOfOriginId === "0") {
                admissionChecker.error.innerHTML =
                    "Pleace check if you input a valid state input";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            mobileNumber = document.getElementById("mobile_number").value;
            if (
                mobileNumber === "" ||
                mobileNumber.length !== 11 ||
                /[a-zA-z]/.test(mobileNumber) ||
                /[=,-,/,<,>,?,|,:,;,",',{,},[,+,=,),(,!,@,#,$,%,^,&,*]/.test(
                    mobileNumber
                )
            ) {
                admissionChecker.error.innerHTML =
                    "Please check if you input a valid phone number input";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            } 
            else {
                admissionChecker.error.innerHTML = "";
                admissionChecker.error.style.backgroundColor = "transparent"
                personalInfoDiv.style.display = "none";
                preversityQualificationDiv.style.display = "block";
            }
        })
    },
    // PREVERSITY QUALIFICATION VERIFICATION
    preversityQualification: {
        jambScore: 0,
        pUtmeScore: 0,
        totalScore: 0,
        calculatedJambScore: 0,
        isValid: secondButton.addEventListener("click", function () {
            this.jambScore = document.getElementById("jamb_score").value;
            jambScore = Number(this.jambScore);
            if (jambScore <= 0) {
                admissionChecker.error.innerHTML =
                    "Please input a valid jamb score in order for you to gain admission";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            if (jambScore > 400) {
                admissionChecker.error.innerHTML =
                    "Your jamb score exceeds the limit, please change it";
                    admissionChecker.error.style.backgroundColor = "red"; 
                return false;
                
            }
            if (jambScore < 180) {
                admissionChecker.error.innerHTML =
                    "I'm sorry, you didn't reach the cutoff mark for JAMB, you can't be given admission";
                    admissionChecker.error.style.backgroundColor = "red";
                return false;
            }

            this.pUtmeScore = document.getElementById("post_utme_score").value;
            pUtmeScore = Number(this.pUtmeScore);
            if (pUtmeScore <= 0) {
                admissionChecker.error.innerHTML =
                    "You need to input a valid post utme score for you to be considered for admission";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            if (pUtmeScore > 20) {
                admissionChecker.error.innerHTML =
                    "Your post utme score exceeds the limit, please change it.";
                    admissionChecker.error.style.backgroundColor = "red";
                return false;
            }
            if (pUtmeScore < 12) {
                admissionChecker.error.innerHTML =
                    "I'm sorry, you didn't reach the cutoff mark for Post UTME, you won't be given admission";
                    admissionChecker.error.style.backgroundColor = "red";
                return false;
            } else {
                admissionChecker.error.innerHTML = "";
                admissionChecker.error.style.backgroundColor = "transparent"
                preversityQualificationDiv.style.display = "none";
                oLevelQualificationDiv.style.display = "block";
            }
            calculatedJambScore = Math.round(jambScore / 8);
            totalScore = calculatedJambScore + pUtmeScore;
        })
    },
    //OLEVEL RESULTS
    oLevelResult: {
        oneSitting: 0,
        oLevelEnglishGradeId: 0,
        oLevelMathsGradeId: 0,
        oLevelSubject1: "",
        oLevelSubject1Text: "",
        oLevelSubject1GradeId: 0,
        oLevelSubject2: "",
        oLevelSubject2Text: "",
        oLevelSubject2GradeId: 0,
        oLevelSubject3: "",
        oLevelSubject3Text: "",
        oLevelSubject3GradeId: 0,
        totalOlevel: 0,
        isValid: thirdButton.addEventListener("click", function () {
            //CHECK FOR ONE SITTING TOO
            oneSitting = Number(document.getElementById("one_sitting").value);
            if(oneSitting === 0){
                admissionChecker.error.innerHTML =
                "Please check your input of one sitting.";
                admissionChecker.error.style.backgroundColor = "red"
            return false;
            }
            if (oneSitting > 1) {
                admissionChecker.error.innerHTML =
                    "You have written Olevel more than once, you can't gain admission here.";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            oLevelEnglishGradeId = Number(firstolevelSubjectGrade.value);
            oLevelMathsGradeId = Number(secondolevelSubjectGrade.value);
            if (oLevelEnglishGradeId === 0) {
                admissionChecker.error.innerHTML = "Please input a valid English Grade";
                admissionChecker.error.style.backgroundColor = "red"
                return false;
                
            }
            if (oLevelMathsGradeId === 0) {
                admissionChecker.error.innerHTML = "Please input a valid Maths Grade";
            }
            oLevelSubject1 = firstolevelSubject.value;
            oLevelSubject1Text = firstolevelSubject.options[firstolevelSubject.selectedIndex].text
            oLevelSubject1GradeId = Number(thirdolevelSubjectGrade.value);
            oLevelSubject2 = secondolevelSubject.value;
            oLevelSubject2Text = secondolevelSubject.options[secondolevelSubject.selectedIndex].text
            oLevelSubject2GradeId = Number(fourtholevelSubjectGrade.value);          
            oLevelSubject3 = thirdolevelSubject.value;
            oLevelSubject3Text = thirdolevelSubject.options[thirdolevelSubject.selectedIndex].text
            oLevelSubject3GradeId = Number(fiftholevelSubjectGrade.value);
            if (
                oLevelSubject1 === "0" ||
                oLevelSubject2 === "0" ||
                oLevelSubject3 === "0"
            ) {
                admissionChecker.error.innerHTML =
                    "Please input a valid OLevel Subject";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            if (
                oLevelSubject1GradeId === 0 ||
                oLevelSubject2GradeId === 0 ||
                oLevelSubject3GradeId === 0
            ) {
                admissionChecker.error.innerHTML = "Please input a valid Grade";
                admissionChecker.error.style.backgroundColor = "red"
                return false;
            }
            if (
                oLevelEnglishGradeId < 4 ||
                oLevelMathsGradeId < 4 ||
                oLevelSubject1GradeId < 4 ||
                oLevelSubject2GradeId < 4 ||
                oLevelSubject3GradeId < 4
            ) {
                admissionChecker.error.innerHTML =
                    "One of your OLevel Grade, wasn't up to the cutoff, you won't be considered for admission";
                    admissionChecker.error.style.backgroundColor = "red"
                return false;
            } 
            if(oLevelSubject1Text === oLevelSubject2Text || oLevelSubject1Text === oLevelSubject3Text || oLevelSubject2Text === oLevelSubject1Text || oLevelSubject2Text === oLevelSubject3Text || oLevelSubject3Text === oLevelSubject1Text || oLevelSubject3Text === oLevelSubject2Text){
                admissionChecker.error.innerHTML = "Kindly check your OLevel Subject Input, you may have put the same subjects";
                admissionChecker.error.style.backgroundColor = "red";
                return false;
            }
            else {
                admissionChecker.error.innerHTML = "";
                admissionChecker.error.style.backgroundColor = "transparent";
                oLevelQualificationDiv.style.display = "none";
                eligibilityCheckerDiv.style.display = "block";
            }
            totalOlevel = Math.round(
                ((oLevelEnglishGradeId +
                    oLevelMathsGradeId +
                    oLevelSubject1GradeId +
                    oLevelSubject2GradeId +
                    oLevelSubject3GradeId) *
                    30) /
                50
            );
        })
    },
    //ELIGIBILITY CHECKER TO CHECK IF YOU GAINED ADMISSION
    eligibiltiyChecker: {
        finalResult: document.getElementById("finalResult"),
        finalScore: 0,
        toggleState: false,
        displayEligibilty: thirdButton.addEventListener("click", function () {
            stateOfOrigin = selectState.options[selectState.selectedIndex].text;
            catchmentState.forEach((items) => {
                if (stateOfOrigin === items) {
                    admissionChecker.eligibiltiyChecker.toggleState = true;
                }
            });
            finalScore = totalOlevel + totalScore;
            if (finalScore >= 80 && finalScore <= 100) {
                finalResult.innerHTML = `Your total score is ${finalScore}, you gained admission on merit list`;
                return true;
            } else if (finalScore >= 75 && finalScore <= 79) {
                finalResult.innerHTML = `Your total score is ${finalScore}, you gained admission on consceccionary`;
                return true;
            } else if (finalScore >= 70 && finalScore <= 74 && admissionChecker.eligibiltiyChecker.toggleState === true) {
                finalResult.innerHTML = `Your total score is ${finalScore} and you fall within the catchment states, you have been provided admission on catchment`;
                return true;
            } else if (finalScore >= 70 && finalScore <= 74 && admissionChecker.eligibiltiyChecker.toggleState === false) {
                finalResult.innerHTML = `Your total score is ${finalScore} and you aren't within the catchment states, but you have still been provided admission.`;
                return true;
            } else if (finalScore >= 60 && finalScore <= 69) {
                finalResult.innerHTML = `You are one of the selected few who gained admission on the VC list.`;
                return true;
            } else if(finalScore < 60){
                    finalResult.innerHTML =
                    "I'm sorry, you weren't given admission in this presitigious university, try again next year.";
            }
        })
    },
};

// DECLARING GENDER DROPDOWN
let selectGender = document.getElementById("dropDownGender");
selectGender.innerHTML = `<option value="0">-- Select Your Gender --</option>`;

// DECLARING GRADE DROPDOWN
let firstolevelSubjectGrade =
    document.getElementsByClassName("ddlOlevelGrade")[0];
let secondolevelSubjectGrade =
    document.getElementsByClassName("ddlOlevelGrade")[1];
let thirdolevelSubjectGrade =
    document.getElementsByClassName("ddlOlevelGrade")[2];
let fourtholevelSubjectGrade =
    document.getElementsByClassName("ddlOlevelGrade")[3];
let fiftholevelSubjectGrade =
    document.getElementsByClassName("ddlOlevelGrade")[4];

firstolevelSubjectGrade.innerHTML = `<option value="0">-- Select Your Grade --</option>`;
secondolevelSubjectGrade.innerHTML = `<option value="0">-- Select Your Grade --</option>`;
thirdolevelSubjectGrade.innerHTML = `<option value="0">-- Select Your Grade --</option>`;
fourtholevelSubjectGrade.innerHTML = `<option value="0">-- Select Your Grade --</option>`;
fiftholevelSubjectGrade.innerHTML = `<option value="0">-- Select Your Grade --</option>`;

//DECLARING SUBJECT DROPDOWN
let firstolevelSubject = document.getElementsByClassName("ddlOlevelSubject")[0];
let secondolevelSubject =
    document.getElementsByClassName("ddlOlevelSubject")[1];
let thirdolevelSubject = document.getElementsByClassName("ddlOlevelSubject")[2];

firstolevelSubject.innerHTML = `<option value="0">-- Select Your OLevel Subject --</option>`;
secondolevelSubject.innerHTML = `<option value="0">-- Select Your OLevel Subject --</option>`;
thirdolevelSubject.innerHTML = `<option value="0">-- Select Your OLevel Subject --</option>`;

//DECLARING STATE OF ORGIN DROP DOWN
let selectState = document.getElementById("dropDownsOG");
selectState.innerHTML = `<option value="0">-- Select State Of Origin --</option>`;

// DROPDOWNS ARE CREATED WHEN DOM IS LOADED
window.addEventListener("load", () => {
    gender.forEach((item, index) => {
        selectGender.innerHTML += `<option value="${index + 1
            }" >${item}</option>`;
    });
    sOGArray.forEach((item, index) => {
        selectState.innerHTML += `<option value="${index + 1
            }">${item}</option>`;
    });
    olevelGrade.forEach((item, index) => {
        firstolevelSubjectGrade.innerHTML += `<option value="${10 - index
            }">${item}</option>`;
    });

    olevelGrade.forEach((item, index) => {
        secondolevelSubjectGrade.innerHTML += `<option value="${10 - index
            }">${item}</option>`;
    });
    olevelGrade.forEach((item, index) => {
        thirdolevelSubjectGrade.innerHTML += `<option value="${10 - index
            }">${item}</option>`;
    });
    olevelGrade.forEach((item, index) => {
        fourtholevelSubjectGrade.innerHTML += `<option value="${10 - index
            }">${item}</option>`;
    });
    olevelGrade.forEach((item, index) => {
        fiftholevelSubjectGrade.innerHTML += `<option value="${10 - index
            }">${item}</option>`;
    });

    olevelSubject.forEach((item, index) => {
        firstolevelSubject.innerHTML += `<option value="${index + 1
            }">${item}</option>`;
    });
    olevelSubject.forEach((item, index) => {
        secondolevelSubject.innerHTML += `<option value="${index + 1
            }">${item}</option>`;
    });
    olevelSubject.forEach((item, index) => {
        thirdolevelSubject.innerHTML += `<option value="${index + 1
            }">${item}</option>`;
    });
});
