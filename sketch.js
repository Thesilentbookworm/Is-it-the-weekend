var answer = 'Sadly No'

function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    background('purple')
    textSize(32)
    fill('white')
    text('Is it the weekend? ' + answer, 40, 40)
}

var rightNow = new Date( ).toString( )
var nowArray = rightNow.split(" ")

var weekday = nowArray[0]
var month = nowArray[1]
var dayNumber = nowArray[2]
var year = nowArray[3]
var time = nowArray[4]

if (weekday === 'Sat', 'Sun') {
    console.log('yes')
}
