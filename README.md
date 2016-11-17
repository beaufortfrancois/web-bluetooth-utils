# web-bluetooth-utils

> Convenience functions for Web Bluetooth

## Install

```shell
npm install --save web-bluetooth-utils
```

## Example usage

```js
navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
.then(device => device.readUint8CharacteristicValueFromPrimaryService('battery_service', 'battery_level', 0 /* offset */))
.then(value => {
  console.log('Battery percentage is ' + value));
 });
```

## API

### Characteristic.getFloat32Value

```js
BluetoothRemoteGATTCharacteristic.getFloat32Value(byteOffset, littleEndian = true)
```

Returns the cached value of the characteristic as a signed 32-bit float (float) at the specified byte offset.

### Characteristic.getFloat64Value

```js
BluetoothRemoteGATTCharacteristic.getFloat64Value(byteOffset, littleEndian = true)
```

Returns the cached value of the characteristic as a signed 64-bit float (double) at the specified byte offset.

### Characteristic.getInt16Value

```js
BluetoothRemoteGATTCharacteristic.getInt16Value(byteOffset, littleEndian = true)
```

Returns the cached value of the characteristic as a signed 16-bit integer (short) at the specified byte offset.

### Characteristic.getInt32Value

```js
BluetoothRemoteGATTCharacteristic.getInt32Value(byteOffset, littleEndian = true)
```

Returns the cached value of the characteristic as a signed 32-bit integer (long) at the specified byte offset.

### Characteristic.getInt8Value

```js
BluetoothRemoteGATTCharacteristic.getInt8Value(byteOffset)
```

Returns the cached value of the characteristic as a signed 8-bit integer (byte) at the specified byte offset.

### Characteristic.getStringValue

```js
BluetoothRemoteGATTCharacteristic.getStringValue(encoding = 'utf8')
```

Returns the cached value of the characteristic as a string containing the text decoded with the decoding algorithm.

### Characteristic.getUint16Value

```js
BluetoothRemoteGATTCharacteristic.getUint16Value(byteOffset, littleEndian = true)
```

Returns the cached value of the characteristic as an unsigned 16-bit integer (unsigned short) at the specified byte offset.

### Characteristic.getUint32Value

```js
BluetoothRemoteGATTCharacteristic.getUint32Value(byteOffset, littleEndian = true)
```

Returns the cached value of the characteristic as an unsigned 32-bit integer (unsigned long) at the specified byte offset.

### Characteristic.getUint8Value

```js
BluetoothRemoteGATTCharacteristic.getUint8Value(byteOffset)
```

Returns the cached value of the characteristic as an unsigned 8-bit integer (unsigned byte) at the specified byte offset.

### Service.getCharacteristics

```js
BluetoothRemoteGATTService.getCharacteristics(characteristics)
```

If `characteristics` is an Array, returns all service's characteristics matching all characteristics UUIDs.
If `characteristics` is a String, returns all service's characteristics matching the unique UUID.

### Device.getCharacteristicFromPrimaryService

```js
BluetoothDevice.getCharacteristicFromPrimaryService(serviceUuid, characteristicUuid)
```

Returns the characteristic from a primary service.

### Device.readCharacteristicValueFromPrimaryService

```js
BluetoothDevice.readCharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, optionalCallback, optionalArgs)
```

Reads the value of a characteristic from a primary service as a `DataView` object.
If `optionalCallback` is passed, it will be called with the characteristic value and `optionalArgs` arguments.

### Device.readFloat32CharacteristicValueFromPrimaryService

```js
BluetoothDevice.readFloat32CharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, byteOffset, littleEndian = true)
```

Reads the value of the characteristic from a primary service as a signed 32-bit float (float) at the specified byte offset.

### Device.readFloat64CharacteristicValueFromPrimaryService

```js
BluetoothDevice.readFloat64CharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, byteOffset, littleEndian = true)
```

Reads the value of the characteristic from a primary service as a signed 64-bit float (double) at the specified byte offset.

### Device.readInt16CharacteristicValueFromPrimaryService

```js
BluetoothDevice.readInt16CharacteristicValueFromPrimaryService
```

Reads the value of the characteristic from a primary service as a signed 16-bit integer (short) at the specified byte offset.

### Device.readInt32CharacteristicValueFromPrimaryService

```js
BluetoothDevice.readInt32CharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, byteOffset, littleEndian = true)
```

Reads the value of the characteristic from a primary service as a signed 32-bit integer (long) at the specified byte offset.

### Device.readInt8CharacteristicValueFromPrimaryService

```js
BluetoothDevice.readInt8CharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, byteOffset)
```

Reads the value of the characteristic from a primary service as a signed 8-bit integer (byte) at the specified byte offset.

### Device.readStringCharacteristicValueFromPrimaryService

```js
BluetoothDevice.readStringCharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, byteOffset)
```

Reads the value of the characteristic from a primary service as a string containing the text decoded with the decoding algorithm.

### Device.readUint16CharacteristicValueFromPrimaryService

```js
BluetoothDevice.readUint16CharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, byteOffset, littleEndian = true)
```

Reads the value of the characteristic from a primary service as an unsigned 16-bit integer (unsigned short) at the specified byte offset.

### Device.readUint32CharacteristicValueFromPrimaryService

```js
BluetoothDevice.readUint32CharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, byteOffset, littleEndian = true)
```

Reads the value of the characteristic from a primary service as an unsigned 32-bit integer (unsigned long) at the specified byte offset.

### Device.readUint8CharacteristicValueFromPrimaryService

```js
BluetoothDevice.readUint8CharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, byteOffset)
```

Reads the value of the characteristic from a primary service as an unsigned 8-bit integer (unsigned byte) at the specified byte offset.

### Device.writeCharacteristicValueFromPrimaryService

```js
BluetoothDevice.writeCharacteristicValueFromPrimaryService(serviceUuid, characteristicUuid, data)
```

Writes data to a characteristic from a primary service.

### Device.startCharacteristicNotificationsFromPrimaryService

```js
BluetoothDevice.startCharacteristicNotificationsFromPrimaryService(serviceUuid, characteristicUuid, listener)
```

Start notifications from a characteristic from a primary service and attach an event listener.

### Device.stopCharacteristicNotificationsFromPrimaryService

```js
BluetoothDevice.stopCharacteristicNotificationsFromPrimaryService(serviceUuid, characteristicUuid, listener)
```

Stop notifications from a characteristic from a primary service and remove an event listener.
