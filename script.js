const content = {
    valentine: ["Valentine's Day", ""], // Text not needed here as it redirects
    anniversary: ["Our Anniversary", "Every year with you is my new favorite year. Here's to us and our beautiful forever."],
    birthday: ["Happy Birthday", "The world got a lot brighter today. Celebrate big, because you deserve the universe."]
};

function openMsg(key) {
    if (key === 'valentine') {
        // This line redirects you to the new page
        window.location.href = 'valentine.html'; 
    } else {
        document.getElementById('msg-header').innerText = content[key][0];
        document.getElementById('msg-body').innerText = content[key][1];
        document.getElementById('overlay').style.display = 'flex';
    }
}