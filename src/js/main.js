AOS.init();

const eventDate = new Date("Dec 25, 2023 11:00:00");
const timeDate = eventDate.getTime();


const countHours = setInterval(function() {
    const now = new Date();
    const timeDateNow = now.getTime();

    const rangeEvent = timeDate - timeDateNow

    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minutsMs = 1000 * 60;

    const eventDays =  Math.floor(rangeEvent / daysMs);
    const eventHours =  Math.floor((rangeEvent % daysMs) / hoursMs);
    const eventMinuts =  Math.floor((rangeEvent % hoursMs) / minutsMs);
    const eventSeconds =  Math.floor((rangeEvent % minutsMs) / 1000);

    document.getElementById('contador').innerHTML = `${eventDays}d ${eventHours}h ${eventMinuts}m ${eventSeconds}s`;

    if (eventDays < 0) {
        clearInterval(countHours);
        document.getElementById("contador").innerHTML = 'Evento expirado'; 
    }
}, 1000);