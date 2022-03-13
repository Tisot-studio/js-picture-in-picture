const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Создаем запрос для видео, помещаем его в HTML элемент и проигрываем
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play()
        }
    } catch (err) {
        console.log(err)
    }
}

// Получем экран, который будет закреплен поверх всех окон компьютера
button.addEventListener('click', async () => {
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    button.disabled = false;
  });

// On load
selectMediaStream();