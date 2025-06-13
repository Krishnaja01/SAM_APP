const greetingsList=[
    'Hello World',
    'Bonjour Monde',
    'Hallo Welt',
    'नमस्ते दुनिया',
    'こんにちは世界',
];

function changeGreeting() {
    const randomIndex=Math.floor(Math.random() * greetingsList.length)
    const randomGreeting=greetingsList[randomIndex]
    document.getElementById('greetingTxt').textContent=randomGreeting.toString();
}

function getCount() {
    const randomIndex=Math.floor(Math.random() * 1000);
    document.getElementById('visitorCountTxt'). 
    textContent="Visitor Count: "+ randomIndex.toString();
    console.log(randomIndex);
}