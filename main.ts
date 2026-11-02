input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let Rock: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let Life = 3
game.setLife(3)
basic.forever(function () {
    basic.pause(500)
    Rock = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        Rock.change(LedSpriteProperty.Y, 1)
    }
    if (player.isTouching(Rock)) {
        game.removeLife(1)
        Life += -1
    }
    if (Life == 0) {
        game.gameOver()
    }
    game.addScore(1)
    Rock.delete()
})
