const world = [];
let birthInterval;
let maxCitizens;
let nextBotId = 1;
let iterationCount = 0;
let intervalId;

function getRandomPower() {
    return Math.floor(Math.random() * 100);
}

function createBot() {
    const bot = {
        id: nextBotId++,
        power: getRandomPower()
    };
    world.push(bot);
    if (world.length > maxCitizens) {
        world.sort((firstObj, secondObj) => firstObj.power - secondObj.power).shift();
    }
    updateWorldContainer();
}

function updateWorldContainer() {
    const worldContainer = document.getElementById('worldContainer');
    worldContainer.innerHTML = '';
    for (const bot of world) {
        const botElement = document.createElement('p');
        botElement.className = 'bot';
        botElement.innerHTML = `<font color="green">ID: ${bot.id}, Сила: ${bot.power}</font>`;
        worldContainer.appendChild(botElement);
    }
}

function updateIterationCount() {
    iterationCount++;
    const iterationCountElement = document.getElementById('iterationCount');
    iterationCountElement.textContent = iterationCount;
}

function start() {
    const interval = parseInt(document.getElementById('birthInterval').value);
    maxCitizens = parseInt(document.getElementById('maxCitizens').value);

    if (interval <= 0 || isNaN(interval) || isNaN(maxCitizens)) {
        return;
    }

    birthInterval = setInterval(createBot, interval);
    intervalId = setInterval(updateIterationCount, interval);
}

function stop() {
    clearInterval(birthInterval);
    clearInterval(intervalId);
}

function reset() {
    clearInterval(birthInterval);
    clearInterval(intervalId);
    world.length = 0;
    nextBotId = 1;
    iterationCount = 0;
    updateWorldContainer();
    updateIterationCount();
}
