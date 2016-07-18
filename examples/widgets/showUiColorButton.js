
var libui = require('../../index');

libui.Ui.init();
var win = new libui.UiWindow('UiColorButton example', 320, 60, true);
win.margined = true;

var widget = new libui.UiColorButton();
widget.text = 'sample text';
win.setChild(widget);

win.onClosing(function () {
	win.close();
	libui.Ui.quit();
});

win.show();

libui.Ui.main();

