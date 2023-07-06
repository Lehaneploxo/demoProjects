let worldSizeInput = document.getElementById("worldSize");
let intervalInput = document.getElementById("interval");
let worldOutput = document.getElementById("world");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let world = [];
let intervalId;

// Функция для создания случайного состояния ячейки (0 - смерть, 1 - жизнь)
function getRandomState() {
    return Math.round(Math.random());
}

// Функция для обновления состояния мира
function updateWorld() {
    // Обновляем состояние мира случайным образом
    world = Array.from({ length: parseInt(worldSizeInput.value) }, getRandomState);

    // Выводим обновленное состояние мира
    let output = world.join(" ");
    
    // Проверяем, помещается ли мир в ширину экрана
    if (output.length > window.innerWidth) {
        // Мир не помещается, переносим его вниз
        worldOutput.style.whiteSpace = "pre-wrap";
    } else {
        // Мир помещается, отображаем его в одну строку
        worldOutput.style.whiteSpace = "nowrap";
    }
    
    worldOutput.textContent = output;
}

// Функция для запуска мира
function startWorld() {
    startButton.disabled = true;
    stopButton.disabled = false;

    updateWorld();
    intervalId = setInterval(updateWorld, parseInt(intervalInput.value));
}

// Функция для остановки мира
function stopWorld() {
    startButton.disabled = false;
    stopButton.disabled = true;

    clearInterval(intervalId);
}
