// https://stackoverflow.com/questions/40858456/how-to-display-a-javascript-var-in-html-body
let sectionDefense =
{
    item: [
        {
            Compagny: "Thales Underwater system",
            PositionAndDate: "Signal Processing Embedded (2009-2013)",
            image: "image/defense/underwater - warfare.jpg",
            experience:
                [
                    "C++ development of signal processing algorithms (beamforming)",
                    "Java development of graphical Man-Machine Interfaces",
                    "Software integration: configuration management, build generation and test"
                ]
        },
    ]
}




function renderSection(_item) {

    var section = "<section data-background-image=\"image/defense/underwater - warfare.jpg\" data-background-opacity=\"0.5\"><h1>No Defense</h1></section>";
    document.getElementById("defense").innerHTML = section;
}