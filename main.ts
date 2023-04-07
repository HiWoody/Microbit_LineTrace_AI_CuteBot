PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Tracking)
basic.showIcon(IconNames.House)
basic.forever(function () {
    cuteBot.motors(20, 20)
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.lineDirection(PlanetX_AILens.LineTrend.left)) {
        cuteBot.motors(10, 40)
    } else if (PlanetX_AILens.lineDirection(PlanetX_AILens.LineTrend.right)) {
        cuteBot.motors(40, 10)
    } else {
        cuteBot.motors(20, 20)
    }
})
