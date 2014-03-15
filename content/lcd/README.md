# LCD Screen

## Circuit

![LCD](http://i.imgur.com/zJOxkWw.png)

## Code

``` js
var five  = require('johnny-five'),
    board = new five.Board(),
    lcd;

board.on('ready', function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    bitMode: 4,
    dots: '16x2'
  });

  lcd.on('ready', function() {
    // Tell the LCD you will use the heart character
    lcd.useChar('check');
    lcd.useChar('heart');
    lcd.useChar('duck');

    lcd.clear().print('JSConf UY!');
    lcd.cursor(1, 0);

    lcd.print('We :heart: johnny-five');

    setTimeout(function() {
      lcd.clear().cursor(0, 0).print('I :check::heart: 2 :duck: :)');
    }, 3000);
  });

  this.repl.inject({
    lcd: lcd
  });

});
```

## Run

```
$ node lcd.js
```

### [Go to Next Lesson >>](../rgb/)
