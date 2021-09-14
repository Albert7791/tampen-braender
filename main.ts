radio.onReceivedString(function (receivedString) {
    if (receivedString == "tampen") {
        styrke = radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128
    }
})
let styrke = 0
styrke = 0
basic.clearScreen()
radio.setTransmitPower(7)
radio.setGroup(167)
basic.forever(function () {
    radio.sendString("ikke tampen")
})
basic.forever(function () {
    led.plotBarGraph(
    styrke,
    86
    )
    basic.pause(500)
})
