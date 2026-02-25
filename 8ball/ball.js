const ball = document.getElementById('ball');
const roll = document.getElementById('rollin');
const win = document.getElementById('win');
const haha = document.getElementById('haha');
roll.volume = 0.5;
win.volume = 0.2;
let lock = false;
let num = -1;
let prevNum = -1;

function spinBall() {
    if (!lock) {
        ball.classList.remove('hiddenball');
        lock = true;
        roll.play();
        document.getElementById('balltext').classList.remove('active')
        while (num === prevNum) {
            num = Math.floor(Math.random() * skibi.length);
            console.log('Reroll');
        }
        document.getElementById('balltextp').innerHTML = skibi[num];
        prevNum = num;
        ball.src = 'ballspin.gif';
        setTimeout(() => {
            ball.classList.add('hiddenball');
            win.play();
            if (num === skibi.length - 1) {
                haha.play();
            }
        }, 2285);
        setTimeout(() => {
            document.getElementById('balltext').classList.add('active');
        }, 2400);
        setTimeout(() => {lock=false;}, 3200);
    }
}

document.getElementById('funtimes').addEventListener('click', spinBall);

const skibi = [
    'YES',
    'SURE BRO',
    'YEAH',
    'UH HUH',
    'YUP',
    'YES SIR',
    'OF COURSE',
    'AFFIRMATIVE',
    "I GUESS SO",
    "YEAH, THAT WORKS",
    "YEAH, LIKE MAYBE",
    "SURE?",
    "OKAY?",
    "ARE YOU SURE?",
    "ARE YOU SURE YOU'RE SURE?",
    'NO',
    'NOT IN A MILLION YEARS',
    'NOT IN A BILLION YEARS',
    'NOT IN A MILLION BILLION YEARS',
    "MAYBE IN A BILLION YEARS",
    "NO WAY JOSÉ",
    "NO CAN DO",
    "UM... NO",
    "ERM",
    "EW",
    "UGH",
    'NOPE',
    'NAH',
    'NUH UH',
    "YEAH WHEN PIGS FLY",
    "IT'S POSSIBLE BUT I WOULDN'T DO IT THAT WAY",
    "STOP ASKING ME THAT",
    "ASK AGAIN IN LIKE FIVE HOURS",
    "THAT'S WHAT I WOULDA DID",
    'UHHHHHHHHH HHHHHHHHHH HHHHHHHHHH HHHHHHHHHH HHHHHHHHHH',
    'UM',
    'NAHHHHHHHH HHHHHHHHHH HHHHHHHHHH HHHHHHHHHH HHHHHHHHHH',
    "TIME TO FULFILL MY WORM DESTINY",
    'WHERE AM I',
    'HELP ME',
    'LOOK BEHIND YOU',
    'CHECK YOUR FRONT DOOR',
    'SHUT THE FRONT DOOR',
    "I'M SO UPSET RN",
    'I FORGOT TO WIND THE MUSIC BOX',
    'BUY BUY BUY',
    'SELL SELL SELL',
    "ALSO TRY 'NUCLEAR THRONE'",
    'HEY MAN CAN YOU TURN THE WIFI ON AND OFF I CANT GET A GOOD SIGNAL',
    'YOU JUST LOST THE GAME',
    'CURED? WHO SAID THERE WAS ANYTHING WRONG WITH YOU?',
    '#JUSTIN BIEBER 2014 VIRAL CHALLENGE',
    'なんでもは知らないわよ、知ってることだけ',
    'ASK ME ONE MORE TIME',
    'ASK ME TWO MORE TIMES',
    'ASK ME THREE MORE TIMES',
    'IGNORE MY NEXT RESPONSE',
    'THIS STATEMENT IS FALSE',
    'IGNORE MY LAST RESPONSE',
    'GONNA HAVE TO AGREE WITH WHAT I SAID BEFORE',
    'WHAT DO I LOOK LIKE? A MAGIC 8 BALL?',
    'TRY GETTING A JOB',
    'HI TWIN <3',
    'THE FLESH IS UNWILLING',
    'I LOVE THE WEATHER CHANNEL',
    "ALSO TRY 'SPIN A BADDIE'",
    "QUIT BEING SUCH A JERK AND MAYBE I'LL ANSWER",
    "LET'S MAKE SOUP TOGETHER",
    "DUDE IF YOU KEEP SPINNING ME I'M GONNA THROW UP",
    "IS THERE SOMETHING WRONG WITH YOU",
    "SIGN MY PETITION TO KILL ALL 8 BALL USERS",
    "HA HA",
]

const testArray = [
    '1',
]