namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.setVolume(10)
    info.changeScoreBy(1)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let steve: Sprite = null
scene.setBackgroundColor(11)
effects.starField.startScreenEffect()
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
steve = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . d 9 9 9 d . . . . . . 
. . . . . d 9 9 9 d . . . . . . 
. . . . . d 8 8 8 d . . . . . . 
. . . . . d 8 8 8 d . . . . . . 
. . . . . . 8 . 8 . . . . . . . 
. . . . . . 8 . 8 . . . . . . . 
. . . . . . c . c . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
steve.setPosition(80, 100)
info.setScore(0)
info.setLife(5)
let speed = 40
game.onUpdateInterval(2000, function () {
    speed += 1
})
game.onUpdateInterval(500, function () {
    lane = Math.randomRange(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 1 1 6 6 6 6 6 6 . . 
. . 6 6 6 1 6 1 6 6 6 6 6 6 . . 
. . 6 6 1 6 6 1 1 1 1 1 6 6 . . 
. . 6 1 6 6 6 6 6 6 6 1 6 6 . . 
. . 6 6 1 6 6 1 1 1 1 1 6 6 . . 
. . 6 6 6 1 6 1 6 6 6 6 6 6 . . 
. . 6 6 6 6 1 1 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 1 6 6 6 6 6 . . 
. . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
. . 6 6 6 6 1 6 6 6 1 6 6 6 . . 
. . 6 6 6 1 6 6 6 6 6 1 6 6 . . 
. . 6 6 6 1 1 1 6 1 1 1 6 6 . . 
. . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
. . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
. . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
. . 6 6 6 6 6 1 1 1 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 1 1 1 6 6 6 6 . . 
. . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
. . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
. . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
. . 6 6 6 1 1 1 6 1 1 1 6 6 . . 
. . 6 6 6 1 6 6 6 6 6 1 6 6 . . 
. . 6 6 6 6 1 6 6 6 1 6 6 6 . . 
. . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
. . 6 6 6 6 6 6 1 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 1 1 6 6 6 6 . . 
. . 6 6 6 6 6 6 1 6 1 6 6 6 . . 
. . 6 6 1 1 1 1 1 6 6 1 6 6 . . 
. . 6 6 1 6 6 6 6 6 6 6 1 6 . . 
. . 6 6 1 1 1 1 1 6 6 1 6 6 . . 
. . 6 6 6 6 6 6 1 6 1 6 6 6 . . 
. . 6 6 6 6 6 6 1 1 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
