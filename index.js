const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-Your own key',
    name: 'Wattary'
});

// Error Handler
bot.on('error', err => console.log(err))

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('house_of_cards_fans', 'Hello , what can i do for you ?', params);
})

function MessageParser(str) {
    const fullText = str.split(" ")
    fullText.splice(0, 1)
    let stri = fullText.toString()
    let TEXT = stri.replace(/,/g, " ")
    return TEXT
}