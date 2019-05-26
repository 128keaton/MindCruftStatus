const {getStatus} = require("mc-server-status")

getStatus("eu.mineplex.com").then(response => {
    console.log(response)
})
