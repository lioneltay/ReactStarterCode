'use strict';

var _dec, _class2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var decor = function decor(text) {
	return function (c) {
		return function () {
			function _class() {
				_classCallCheck(this, _class);
			}

			_createClass(_class, [{
				key: 'log',
				value: function log() {
					var x = new c();
					x.log();
					console.log(text);
				}
			}]);

			return _class;
		}();
	};
};

var DecorateMe = (_dec = decor('THIS IS THE DECORATOR'), _dec(_class2 = function () {
	function DecorateMe() {
		_classCallCheck(this, DecorateMe);
	}

	_createClass(DecorateMe, [{
		key: 'log',
		value: function log() {
			console.log('DECORATE ME');
		}
	}]);

	return DecorateMe;
}()) || _class2);


var test = new DecorateMe();

test.log();

var DecorateMe2 = function () {
	function DecorateMe2() {
		_classCallCheck(this, DecorateMe2);
	}

	_createClass(DecorateMe2, [{
		key: 'log',
		value: function log() {
			console.log('DECORATE ME');
		}
	}]);

	return DecorateMe2;
}();

DecorateMe2 = decor('SameTHing')(DecorateMe2);

var test2 = new DecorateMe2();
test2.log();
