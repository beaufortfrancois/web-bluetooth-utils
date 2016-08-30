# web-bluetooth-utils

> Convenience functions for Web Bluetooth


## Install

```
$ npm install --save web-bluetooth-utils
```


## Usage

```js
navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
.then(device => device.gatt.connect())
.then(server => server.getPrimaryService('battery_service'))
.then(service => service.getCharacteristic('battery_level'))
.then(characteristic => {
  return characteristic.readValue()
    .then(value => {
       // Before..
       console.log('Battery percentage is ' + value.getUint8(0));
       // Now...
       console.log('Battery percentage is ' + characteristic.getUint8Value(0));
    })
})
```


## API

### BluetoothRemoteGATTCharacteristic.getFloat32Value (byteOffset, littleEndian = true)

Returns the cached value of the characteristic as a signed 32-bit float (float) at the specified byte offset.

### BluetoothRemoteGATTCharacteristic.getFloat64Value (byteOffset, littleEndian = true)

Returns the cached value of the characteristic as a signed 64-bit float (double) at the specified byte offset.

### BluetoothRemoteGATTCharacteristic.getInt16Value (byteOffset, littleEndian = true)

Returns the cached value of the characteristic as a signed 16-bit integer (short) at the specified byte offset.

### BluetoothRemoteGATTCharacteristic.getInt32Value (byteOffset, littleEndian = true)

Returns the cached value of the characteristic as a signed 32-bit integer (long) at the specified byte offset.

### BluetoothRemoteGATTCharacteristic.getInt8Value (byteOffset)

Returns the cached value of the characteristic as a signed 8-bit integer (byte) at the specified byte offset.

### BluetoothRemoteGATTCharacteristic.getStringValue (encoding = 'utf8')

Returns the cached value of the characteristic as a string containing the text decoded with the decoding algorithm.

### BluetoothRemoteGATTCharacteristic.getUint16Value (byteOffset, littleEndian = true)

Returns the cached value of the characteristic as an unsigned 16-bit integer (unsigned short) at the specified byte offset.

### BluetoothRemoteGATTCharacteristic.getUint32Value (byteOffset, littleEndian = true)

Returns the cached value of the characteristic as an unsigned 32-bit integer (unsigned long) at the specified byte offset.

### BluetoothRemoteGATTCharacteristic.getUint8Value (byteOffset)

Returns the cached value of the characteristic as an unsigned 8-bit integer (unsigned byte) at the specified byte offset.

### BluetoothRemoteGATTService.getCharacteristics (characteristics)

If `characteristics` is an Array, returns all service's characteristics matching all characteristics UUIDs.
If `characteristics` is a String, returns all service's characteristics matching the unique UUID.
