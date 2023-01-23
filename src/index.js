const quotes = [
    '"I am not a man who is easily swayed by love, but when I do fall, I fall completely." - Mr. Darcy',
    '"I cannot imagine how I should live without him." - Elizabeth Bennet',
    '"You are the only woman who could ever make me feel this way." - Mr. Darcy',
    '"Your eyes tell me everything your words cannot." - Mr. Darcy',
    '"The truth is, I have no pride. I cannot tolerate being slighted." - Mr. Darcy',
    '"True humility is a very rare quality in any degree, and I rarely encounter it in a woman." - Mr. Darcy',
    '"I cannot live without you, Elizabeth. You are my life, my love, my everything." - Mr. Darcy',
    '"I love you more than words can express, and every day I love you more and more." - Mr. Darcy',
    '"I could not marry a woman without fortune and with such a disrespectable family." - Mr. Darcy',
    '"I cannot allow my reputation and position to be affected by a imprudent marriage." - Mr. Darcy',
    '"You are a woman with a dull mind and a vulgar personality." - Mr. Darcy',
    '"I could not marry a woman like you, even if you asked humbly." - Mr. Darcy',
    '"Your pride is so great, your arrogance so excessive, that I cannot forgive it." - Elizabeth Bennet',
    '"I cannot believe that someone as arrogant and condescending as you could be so little sensitive to the feelings of others." - Elizabeth Bennet',
    '"You are an arrogant, proud, and conceited man, and I cannot stand your company." - Elizabeth Bennet',
    '"You are a man without scruples, who uses your wealth and position to crush others." - Elizabeth Bennet',
    '"You are a cold, calculating, and unfeeling man, and I cannot stand to be near you." - Elizabeth Bennet',
    '"You may offer me the world, but you will never have my love. I could never be with a man as arrogant, proud, and conceited as you, neither now nor ever in my life." - Elizabeth Bennet',
];

const sponQuote = () => {
    const quote = quotes[Math.floor(Math.random()* quotes.length)];
    console.log(`\x1b[34m${quote}\x1b[89m`);
};

module.exports = {
    sponQuote
};
