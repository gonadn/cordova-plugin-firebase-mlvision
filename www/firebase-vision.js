var exec = require('cordova/exec');

exports.onDeviceTextRecognizer = function (image, success, error) {
    exec(success, error,'FirebaseVisionPlugin', 'onDeviceTextRecognizer', [image])
}

exports.cloudTextRecognizer = function (image, success, error) {
    exec(success, error,'FirebaseVisionPlugin', 'cloudTextRecognizer', [image])
}

exports.barcodeDetector = function (image, success, error) {
    exec(success, error,'FirebaseVisionPlugin', 'barcodeDetector', [image])
}
