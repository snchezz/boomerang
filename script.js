const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('captureButton');

let isRecording = false;

// Access webcam
async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        handleSuccess(stream);
    } catch (e) {
        console.error('Error accessing webcam:', e);
    }
}

// Success callback for getUserMedia
function handleSuccess(stream) {
    video.srcObject = stream;
}

// Capture function
function capture() {
    if (isRecording) {
        isRecording = false;
        captureButton.innerText = 'Capture';
        stopRecording();
    } else {
        isRecording = true;
        captureButton.innerText = 'Stop';
        startRecording();
    }
}

// Start recording
function startRecording() {
    const stream = canvas.captureStream();
    console.log('Start recording');
}

// Stop recording
function stopRecording() {
    console.log('Stop recording');
}

// Event listeners
captureButton.addEventListener('click', capture);

// Initialize
init();
