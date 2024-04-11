document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
        style:`
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
});
// Проверяем, поддерживается ли Device Orientation API в данном браузере.
if ('DeviceOrientationEvent' in window) {
    window.addEventListener('deviceorientation', handleOrientation, false);
  } else {
    console.log("Device Orientation API не поддерживается в данном браузере.");
  }

// Функция, которая обрабатывает данные ориентации устройства.
function handleOrientation(event) {
    // Угол наклона (tilt) в градусах от -90 до 90.
    var tilt = event.beta;
    
    // Угол крена (roll) в градусах от -180 до 180.
    var roll = event.gamma;
    
    // Делайте что-то с полученными значениями, например, обновляйте интерфейс или выполняйте другие действия.
    console.log("Угол наклона (tilt): " + tilt);
    console.log("Угол крена (roll): " + roll);
    
    window.addEventListener('deviceorientation', (e) => {
        Object.assign(document.documentElement, {
            style:`
                --move-x: ${(tilt - window.innerWidth / 2) * -0.005}deg;
                --move-y: ${(roll - window.innerHeight / 2) * -0.01}deg;
            `
        })
    })
}