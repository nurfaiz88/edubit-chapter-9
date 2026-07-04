basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        edubitMotors.setServoPosition(ServoChannel.S1, 20)
    } else if (input.buttonIsPressed(Button.B)) {
        edubitMotors.setServoPosition(ServoChannel.S1, 160)
    } else {
        edubitMotors.setServoPosition(ServoChannel.S1, 90)
    }
})
