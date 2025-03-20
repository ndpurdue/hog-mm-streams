// Function to fetch and display today's March Madness game schedule
window.onload = () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    // Simulated game schedule (Replace with API call if available)
    const schedule = [
        { time: '12:00 PM ET', teams: 'Team A vs Team B', link: 'https://www.ncaa.com/march-madness-live' },
        { time: '2:00 PM ET', teams: 'Team C vs Team D', link: 'https://www.cbssports.com/' },
        { time: '4:00 PM ET', teams: 'Team E vs Team F', link: 'https://tv.youtube.com/welcome/' },
        { time: '6:00 PM ET', teams: 'Team G vs Team H', link: 'https://www.hulu.com/live-tv' }
    ];

    const scheduleList = document.getElementById('schedule-list');
    schedule.forEach(game => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${game.time}</strong>: ${game.teams} <a href="${game.link}" target="_blank">Watch</a>`;
        scheduleList.appendChild(listItem);
    });
};
