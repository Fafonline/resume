// https://stackoverflow.com/questions/40858456/how-to-display-a-javascript-var-in-html-body

function renderSection() {
    var sectionDefense =
    {
        item: [
            {
                compagny: "TUS",
                positionAndDate: "Signal Processing (2009-2013)",
                image: "image/defense/underwater-warfare.jpg",
                experience:
                    [
                        "C++ development of signal processing algorithms (beamforming)",
                        "Java development of graphical Man-Machine Interfaces",
                        "Software integration: configuration management, build generation and test"
                    ]
            },
            {
                compagny: "Ineo Defense",
                positionAndDate: "Ground Radar test bench (2018)",
                image: "image/defense/radar.jpg",
                experience:
                    [
                        "Evaluation of Linux Realtime performance and system tuning.Software architecture definition",
                        "System and toolchain definition and implementation"
                    ]
            },
        ]
    }
    if ("content" in document.createElement("template")) {
        sectionDefense.item.forEach(item => {
            //var template = document.querySelector("#section_tmpl");
            //var templateClone = document.importNode(template.content, true);

            //var templateSection = templateClone.getElementById("sectionHeader");
            // templateSection.setAttribute("data-background-image", item.image);
            // templateSection.setAttribute("data-background-opacity", "0.5");

            // var templateCompagnyClone = templateClone.getElementById("compagny");
            // templateCompagnyClone.innerHTML = item.compagny;

            // var templatePositionAndDate = templateClone.getElementById("positionAndDate")
            // templatePositionAndDate.innerHTML = item.positionAndDate;

            // var templateExperienceList = templateClone.getElementById("experienceList");
            // item.experience.forEach(experience => {
            //     let experienceInList = document.createElement("li");
            //     experienceInList.setAttribute("class", "fragment fade-in-then-semi-out-shrinked");
            //     experienceInList.innerHTML = experience;
            //     templateExperienceList.appendChild(experienceInList);
            // });

            // var section = document.getElementById("defense");
            //section.appendChild(templateClone);
            // section.appendChild(sectionCreated);
        });
    }
}