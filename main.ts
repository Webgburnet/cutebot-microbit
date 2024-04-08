radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
    	
    } else if (receivedString == "B") {
    	
    } else if (receivedString == "Z") {
    	
    } else if (receivedString == "Rouge") {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else if (receivedString == "Vert") {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    } else if (receivedString == "Bleu") {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    } else if (receivedString == "Jaune") {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    } else if (receivedString == "Avancer") {
        cuteBot.motors(100, 100)
    } else if (receivedString == "Reculer") {
        cuteBot.motors(-100, -100)
    } else if (receivedString == "Gauche") {
    	
    } else if (receivedString == "Droite") {
    	
    }
})
radio.setGroup(255)
basic.forever(function () {
	
})
