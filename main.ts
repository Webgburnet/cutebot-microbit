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
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    }
    if (name == "y") {
        y = value
    }
})
let y = 0
let x = 0
let radio2 = 255
radio.setGroup(radio2)
basic.showNumber(radio2)
basic.forever(function () {
    cuteBot.motors(y + x, y - x)
})
