document.getElementById('translateButton').addEventListener('click', function () {
    const videoFile = document.getElementById('videoFile').files[0];
    
    if (!videoFile) {
        alert('Please select a video file.');
        return;
    }
    
    const formData = new FormData();
    formData.append('video', videoFile);
    
    fetch('/translate-audio', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('translationResult').textContent = `Translated Audio: ${data.translatedText}`;
    })
    .catch(error => console.error('Error:', error));
});
