const video = document.getElementById('cameraFeed');
    const canvas = document.getElementById('canvas');
    const photoPreview = document.getElementById('photoPreview');
    const downloadLink = document.getElementById('downloadLink');
    const captureBtn = document.getElementById('captureBtn');

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(error => {
        console.error('Erreur d\'accès à la caméra :', error);
      });

    captureBtn.addEventListener('click', () => {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL('image/png');
      photoPreview.src = dataURL;
      downloadLink.href = dataURL;
    })