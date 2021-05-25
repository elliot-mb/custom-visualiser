function handleSubmit(){

    const smoothing = document.getElementById('smooth').value;
    const bins = document.getElementById('bins').value;
    const amplitude = document.getElementById('amp').value;
    const bars = document.getElementById('bars').value;
    const factor = document.getElementById('fact').value;
    const radius = document.getElementById('radius').value;
    const exponent = document.getElementById('exp').value;
    const strokeWeight = document.getElementById('stroke').value;
    const affinity = document.getElementById('affinity').value;
    const colour = document.getElementById('colour').value;

    localStorage.setItem("SMOOTHING", smoothing);
    localStorage.setItem("BINS", bins);
    localStorage.setItem("AMPLITUDE", amplitude);
    localStorage.setItem("BARS", bars);
    localStorage.setItem("FACTOR", factor);
    localStorage.setItem("RADIUS", radius);
    localStorage.setItem("EXPONENT", exponent);
    localStorage.setItem("STROKEWEIGHT", strokeWeight);
    localStorage.setItem("AFFINITY", affinity);
    localStorage.setItem("COLOUR", colour);

    if(smoothing && bins && amplitude && bars && factor && radius && exponent && strokeWeight && affinity && colour){location.href = "visualiser.html";}
    else{
        console.log("one or more fields empty");
    }

    return;
}

function EDM(){

    document.getElementById('smooth').value = 0.5;
    document.getElementById('bins').value = 11;
    document.getElementById('amp').value = 0.4;
    document.getElementById('bars').value = 75;
    document.getElementById('fact').value = 500;
    document.getElementById('radius').value = 150;
    document.getElementById('exp').value = 5;
    document.getElementById('stroke').value = 5;
    document.getElementById('affinity').value = 1;
    document.getElementById('colour').value = "#ee44ee";

}

function classical(){

    document.getElementById('smooth').value = 0.65;
    document.getElementById('bins').value = 11;
    document.getElementById('amp').value = 0.5;
    document.getElementById('bars').value = 125;
    document.getElementById('fact').value = 200;
    document.getElementById('radius').value = 150;
    document.getElementById('exp').value = 2.5;
    document.getElementById('stroke').value = 3;
    document.getElementById('affinity').value = 0.1;
    document.getElementById('colour').value = "#3344ff";

}

function rhythmic(){

    document.getElementById('smooth').value = 0.7;
    document.getElementById('bins').value = 10;
    document.getElementById('amp').value = 0.35;
    document.getElementById('bars').value = 250;
    document.getElementById('fact').value = 300;
    document.getElementById('radius').value = 200;
    document.getElementById('exp').value = 1.5;
    document.getElementById('stroke').value = 1.5;
    document.getElementById('affinity').value = 0.1;
    document.getElementById('colour').value = "#ff3300";

}