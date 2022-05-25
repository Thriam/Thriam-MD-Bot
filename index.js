const venom = require('venom-bot');
const axios = require("axios");
venom
  .create({
    session: 'session-name',
    multidevice: true
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

const list = [
    {
      title: "Menu",
      rows: [
        {
          title: ".hai",
          description: "Owner details",
        }
      ]
    },
    {
      title: "MENU",
      rows: [
        {
          title: "Menu",
          description: "Displays all commands",
        },
        {
          title: ".attp",
          description: "Text to picture",
        },
	{
          title: ".owner",
          description: "Owner details",
        }
      ]
    }
  ];

const buttons = [
  {
    "buttonText": {
      "displayText": "OWNER"
      }
    },
  {
    "buttonText": {
      "displayText": "CONTACT"
      }
    }
  ]

function start(client) {
  client.onMessage((message) => {
    if (message.body.includes('.hai')) {
      client
        .sendText(message.from, 'Hai I am Thriam, created by Thriam bakesvar B')
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    }

    if (message.body.includes('.menu'))
    {
	client.sendListMenu(message.from, 'Hai, click to see the options', 'subTitle', 'This bot was created by Thriam bakesvar B', 'menu', list)
        client.sendButtons(message.from, 'Hai, click to see the options', buttons, 'This bot was created by Thriam bakesvar B')
	client.sendVoice(message.from, './Botdevoloper/audio.mp3')
	.then((result) => {
          console.log('Result: ', result);
        })
	.catch((erro) => {
          console.error('Error when sending: ', erro);
	});
    }

if (message.body.includes('.owner'))
    {
	client.sendContactVcard(message.from,'919345588267@c.us', 'Owner\nThriam bakesvar B')
	.catch((erro) => {
          console.error('Error when sending: ', erro);
	});
    }
if (message.body.includes('owner'))
    {
	client.sendContactVcard(message.from,'919345588267@c.us', 'Owner\nThriam bakesvar B')
	.catch((erro) => {
          console.error('Error when sending: ', erro);
	});
    }
if (message.body.includes('Owner'))
    {
	client.sendContactVcard(message.from,'919345588267@c.us', 'Owner\nThriam bakesvar B')
	.catch((erro) => {
          console.error('Error when sending: ', erro);
	});
    }
if (message.body.includes('OWNER'))
    {
	client.sendContactVcard(message.from,'919345588267@c.us', 'Owner\nThriam bakesvar B')
	.catch((erro) => {
          console.error('Error when sending: ', erro);
	});
    }

if (message.body.includes('.alive')) {
      client
        .sendText(message.from, 'Hai I am Thriam, the bot is alive')
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    }

if (message.body.includes('.attp')){
    var attp=message.body.replace('.attp','');
      client
        .sendText(message.from, attp)
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    }

if (message.body.includes('.quote')){
      client
        .sendText(message.from, 'World is beautiful go make it more beautiful')
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    }

if(message.body.includes('Hai, Thriam'))
    {
      client
        .sendText(message.from, 'Hai, nice to meet you')
	.catch((erro) => {
          console.error('Error when sending: ', erro);
	});
    }
if(message.body.includes('Hai'))
{
      client.sendText(message.from, 'Hai, nice to meet you')
	.catch((erro) => {
          console.error('Error when sending: ', erro);
	});
}

if (message.body.includes('.alive'))
    {
	client.sendListMenu(message.from, 'Hai, click to see the options', 'subTitle', 'This bot was created by Thriam bakesvar B', 'menu', list)
        client.sendButtons(message.from, 'Hai, click to see the options', buttons, 'This bot was created by Thriam bakesvar B')
	client.sendVoice(message.from, './Botdevoloper/audio.mp3')
	.then((result) => {
          console.log('Result: ', result);
        })
	.catch((erro) => {
          console.error('Error when sending: ', erro);
	});
    }

});
}