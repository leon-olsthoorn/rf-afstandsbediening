radio.onReceivedNumber(function (receivedNumber) {
    recnum = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    let rgroep = 0
    while (recnum == 0 && recstring == "") {
        for (let rgroep = 0; rgroep <= 255; rgroep++) {
            for (let freq = 0; freq <= 79; freq++) {
                freq += 1
                radio.setFrequencyBand(freq)
                basic.pause(100)
            }
            freq = 0
            radio.setFrequencyBand(freq)
            rgroep += 1
            radio.setGroup(rgroep)
            scry = Math.trunc(rgroep / 50)
            srcx = Math.trunc((rgroep + 1 - scry * 50) / 10 - 1)
            led.plot(srcx, scry)
        }
        basic.showIcon(IconNames.No)
    }
    basic.showString("freq")
    basic.showNumber(freq)
    basic.pause(1000)
    basic.showString("rgroep")
    basic.showNumber(rgroep)
    basic.pause(1000)
    basic.showString("recnum")
    basic.showNumber(recnum)
    basic.showString("recstring")
    basic.showString(recstring)
})
radio.onReceivedString(function (receivedString) {
    recstring = receivedString
})
let srcx = 0
let scry = 0
let freq = 0
let recstring = ""
let recnum = 0
radio.setGroup(0)
radio.setFrequencyBand(0)
basic.showIcon(IconNames.Yes)
