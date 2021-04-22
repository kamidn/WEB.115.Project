/* Student Name:    Duy Nguyen
 * Date:            12/06/2020
 * File:            projectJS.js
 * Purpose:         WEB-115 Final Project.
 */
var fullname, address, city, state, zipcode, phone, email, portfolio, socialMedia;
var skillSet1, skillSet2, skillSet3, skillSet4;
var techSkill1, techSkill2, techSkill3;
var educationBg;
var startDate1, endDate1, detail1;
var startDate2, endDate2, detail2;
var startDate3, endDate3, detail3;
var references;

function isValidEmail(emailAddress) {
    var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(emailAddress);    
}

function validate(emailAddress) {

    if (isValidEmail(emailAddress)) {
        return true;
    } else {
        return false;
    }
}

function getData() {
    //Profile
    fullname = document.getElementById("fullname").value;
    address = document.getElementById("address").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;
    zipcode = document.getElementById("zipcode").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    portfolio = document.getElementById("portfolio").value;
    socialMedia = document.getElementById("socialMedia").value;
    //Skill Sets
    skillSet1 = document.getElementById("skillSet1").value;
    skillSet2 = document.getElementById("skillSet2").value;
    skillSet3 = document.getElementById("skillSet3").value;
    skillSet4 = document.getElementById("skillSet4").value;
    //Technical Skills
    techSkill1 = document.getElementById("techSkill1").value;
    techSkill2 = document.getElementById("techSkill2").value;
    techSkill3 = document.getElementById("techSkill3").value;
    //Education Background
    educationBg = document.getElementById("educationBg").value;
    //Employment
    startDate1 = document.getElementById("startDate1").value;
    endDate1 = document.getElementById("endDate1").value;
    detail1 = document.getElementById("detail1").value;

    startDate2 = document.getElementById("startDate2").value;
    endDate2 = document.getElementById("endDate2").value;
    detail2 = document.getElementById("detail2").value;

    startDate3 = document.getElementById("startDate3").value;
    endDate3 = document.getElementById("endDate3").value;
    detail3 = document.getElementById("detail3").value;
    //Business References
    references = document.getElementById("references").value;

    return true;
}

function generator() {
    getData();

    var retVal = '';
    retVal = ('<html>\n');
    retVal += ('<head>\n');
    retVal += ('\t<title>Resume on the fly</title>\n');
    retVal += ('\t<link rel="stylesheet" type="text/css" href="./css/resume.css" />\n');
    retVal += ('</head>\n');
    retVal += ('<body>\n');
    retVal += ('\t<div id="container">');
    /* Header - Start */
    retVal += ('\t\t<header>');
    retVal += ('<h1>' + fullname + '</h1>');
    retVal += ('<h2>' + address + ', ' + city + ', ' + state + ' ' + zipcode + '</h2>');
    retVal += ('<h2>Phone: ' + phone + ', Email: ' + email + '</h2>');
    retVal += ('<h2>Portfolio: ' + portfolio + ', Social Media:' + socialMedia + '</h2>');
    retVal += ('\t\t</header>');
    /* Header - End */
    /* Main - Start */
    retVal += ('\t\t<main>');
    /* Section - Skills - Start */
    retVal += ('\t\t\t<section>');
    retVal += ('\t\t\t\t<h3>Skills</h3>');
    /* Section - Skill Sets - Start */
    retVal += ('\t\t\t\t<div class="theLeft">');
    retVal += ('\t\t\t\t\t<h4>Skill Sets</h4>');
    retVal += ('\t\t\t\t</div>');
    retVal += ('\t\t\t\t<div class="theRight">');
    retVal += ('\t\t\t\t\t<ul>');
    if (skillSet1 != "")
        retVal += ('\t\t\t\t\t\t<li>' + skillSet1 + '</li>');
    if (skillSet2 != "")
        retVal += ('\t\t\t\t\t\t<li>' + skillSet2 + '</li>');
    if (skillSet3 != "")
        retVal += ('\t\t\t\t\t\t<li>' + skillSet3 + '</li>');
    if (skillSet4 != "")
        retVal += ('\t\t\t\t\t\t<li>' + skillSet4 + '</li>');
    retVal += ('\t\t\t\t\t</ul>');
    retVal += ('\t\t\t\t</div>');
    /* Section - Skill Sets - End */
    retVal += ('\t\t\t\t<div style="clear: both;"></div>');
    /* Section - Tech Skills - Start */
    retVal += ('\t\t\t\t<div class="theLeft">');
    retVal += ('\t\t\t\t\t<h4>Technical Skills</h4>');
    retVal += ('\t\t\t\t</div>');
    retVal += ('\t\t\t\t<div class="theRight">');
    retVal += ('\t\t\t\t\t<ul>');
    if (techSkill1 != "")
        retVal += ('\t\t\t\t\t<li>' + techSkill1 + '</li>');
    if (techSkill2 != "")
        retVal += ('\t\t\t\t\t<li>' + techSkill2 + '</li>');
    if (techSkill3 != "")
        retVal += ('\t\t\t\t\t<li>' + techSkill3 + '</li>');
        retVal += ('\t\t\t\t\t</ul>');
    retVal += ('\t\t\t\t</div>');
    retVal += ('\t\t\t\t<div style="clear: both;"></div>');
    /* Section - Tech Skills - End */
    retVal += ('\t\t\t</section>');
    /* Section - Skills - End */
    /* Section - Educations - Start */
    retVal += ('\t\t\t<section>');
    retVal += ('\t\t\t\t<h3>Educations</h3>');
    if (educationBg != "") {
        retVal += ('\t\t\t\t<p>' + educationBg.replace(/\r?\n/g, 'x<br />') + '</p>');
    } else {
        retVal += ('\t\t\t\t<p>Not Available</p>');
    }
    retVal += ('\t\t\t</section>');
    /* Section - Educations - End */
    /* Section - Work Experiences - Start */
    retVal += ('\t\t\t<section>');
    retVal += ('\t\t\t\t<h3>Work Experiences</h3>');
    
    if (startDate1 != "") {
        /* Section - Work Experiences - Job 1 - Start */
        retVal += ('\t\t\t\t<article>');
        retVal += ('\t\t\t\t\t<div class="theLeft">');
        retVal += ('\t\t\t\t\t\t<h4>' + startDate1 + ' - ' + endDate1 + '</h4>');
        retVal += ('\t\t\t\t\t</div>');
        retVal += ('\t\t\t\t\t<div class="theRight">');
        retVal += ('\t\t\t\t\t\t<p>' + detail1.replace(/\r?\n/g, 'x<br />') + '</p>');
        retVal += ('\t\t\t\t\t</div>');
        retVal += ('\t\t\t\t\t<div style="clear: both;"></div>');
        retVal += ('\t\t\t\t</article>');
        /* Section - Work Experiences - Job 1 - End */
    }

    if (startDate2 != "") {
        /* Section - Work Experiences - Job 2 - Start */
        retVal += ('\t\t\t\t<article>');
        retVal += ('\t\t\t\t\t<div class="theLeft">');
        retVal += ('\t\t\t\t\t\t<h4>' + startDate2 + ' - ' + endDate2 + '</h4>');
        retVal += ('\t\t\t\t\t</div>');
        retVal += ('\t\t\t\t\t<div class="theRight">');
        retVal += ('\t\t\t\t\t\t<p>' + detail2.replace(/\r?\n/g, 'x<br />') + '</p>');
        retVal += ('\t\t\t\t\t</div>');
        retVal += ('\t\t\t\t\t<div style="clear: both;"></div>');
        retVal += ('\t\t\t\t</article>');
        /* Section - Work Experiences - Job 2 - End */
    }

    if (startDate3 != "") {
        /* Section - Work Experiences - Job 3 - Start */
        retVal += ('\t\t\t\t<article>');
        retVal += ('\t\t\t\t\t<div class="theLeft">');
        retVal += ('\t\t\t\t\t\t<h4>' + startDate3 + ' - ' + endDate3 + '</h4>');
        retVal += ('\t\t\t\t\t</div>');
        retVal += ('\t\t\t\t\t<div class="theRight">');
        retVal += ('\t\t\t\t\t\t<p>' + detail3.replace(/\r?\n/g, 'x<br />') + '</p>');
        retVal += ('\t\t\t\t\t</div>');
        retVal += ('\t\t\t\t\t<div style="clear: both;"></div>');
        retVal += ('\t\t\t\t</article>');
        /* Section - Work Experiences - Job 3 - End */
    }
    retVal += ('\t\t\t</section>');
    /* Section - Work Experiences - End */
    /* Section - References - Start */
    retVal += ('\t\t\t<section>');
    retVal += ('\t\t\t\t<h3>Business References</h3>');
    if (references != "") {
        retVal += ('\t\t\t\t<p>' + references.replace(/\r?\n/g, 'x<br />') + '</p>');
    } else {
        retVal += ('\t\t\t\t<p>Not Available</p>');
    }
    retVal += ('\t\t\t</section>');
    /* Section - References - End */
    retVal += ('\t\t</main>');
    /* Main - End */
    retVal += ('\t</div>\n');
    retVal += ('</body>\n');
    retVal += ('</html>');
    return retVal;
}

function createResume() {
    var userEmail = document.getElementById("email").value;

    if (validate(userEmail)) {
        flyWindow = window.open("about:blank", "myResume", "directories=0, titlebar=0, toolbar=0, location=0, status=0, menubar=0, width=900, height=600, left=0, top=0");
        flyWindow.document.write(generator());
    } else {
        alert("Invalid email address");
    }
    return true;
}
