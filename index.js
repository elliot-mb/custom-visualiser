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
