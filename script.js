const samples = {
    kick: new Audio('samples/kick.wav'),
    snare: new Audio('samples/snare.wav'),
    hat: new Audio('samples/hat.wav'),
};

function playSample(sampleName) {
    if (samples[sampleName]) {
        samples[sampleName].currentTime = 0; // 오디오 재생을 처음부터
        samples[sampleName].play();
    }
}
