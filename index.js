'use strict';

self.BluetoothRemoteGATTCharacteristic.prototype.getFloat32Value = function(byteOffset, littleEndian = true) {
  return this.value.getFloat32(byteOffset, littleEndian);
};

self.BluetoothRemoteGATTCharacteristic.prototype.getFloat64Value = function(byteOffset, littleEndian = true) {
  return this.value.getFloat64(byteOffset, littleEndian);
};

self.BluetoothRemoteGATTCharacteristic.prototype.getInt16Value = function(byteOffset, littleEndian = true) {
  return this.value.getInt16(byteOffset, littleEndian);
};

self.BluetoothRemoteGATTCharacteristic.prototype.getInt32Value = function(byteOffset, littleEndian = true) {
  return this.value.getInt32(byteOffset, littleEndian);
};

self.BluetoothRemoteGATTCharacteristic.prototype.getInt8Value = function(byteOffset) {
  return this.value.getInt8(byteOffset);
};

self.BluetoothRemoteGATTCharacteristic.prototype.getStringValue = function(encoding = 'utf8') {
  let decoder = new TextDecoder(encoding);
  return decoder.decode(this.value);
};

self.BluetoothRemoteGATTCharacteristic.prototype.getUint16Value = function(byteOffset, littleEndian = true) {
  return this.value.getUint16(byteOffset, littleEndian);
};

self.BluetoothRemoteGATTCharacteristic.prototype.getUint32Value = function(byteOffset, littleEndian = true) {
  return this.value.getUint32(byteOffset, littleEndian);
};

self.BluetoothRemoteGATTCharacteristic.prototype.getUint8Value = function(byteOffset) {
  return this.value.getUint8(byteOffset);
};

(function(exports) {
let nativeGetCharacteristics = BluetoothRemoteGATTService.prototype.getCharacteristics;
let getCharacteristics = function(characteristics) {
  if (characteristics instanceof Array) {
    let promises = characteristics.map(characteristic => this.getCharacteristic(characteristic));
    return Promise.all(promises);
  }
  return nativeGetCharacteristics.apply(this, [characteristics]);
}

exports.BluetoothRemoteGATTService.prototype.getCharacteristics = getCharacteristics;
})(self);

self.BluetoothDevice.prototype.getCharacteristicFromPrimaryService = function(serviceUuid, characteristicUuid) {
  return Promise.resolve()
  .then(_ => this.gatt.connect())
  .then(server => server.getPrimaryService(serviceUuid))
  .then(service => service.getCharacteristic(characteristicUuid));
}

self.BluetoothDevice.prototype.readCharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, optionalCallback, optionalArgs) {
  return this.getCharacteristicFromPrimaryService(serviceUuid, characteristicUuid)
  .then(characteristic => {
    return characteristic.readValue()
    .then(value => optionalCallback ? optionalCallback.apply(characteristic, optionalArgs) : value);
  });
};

self.BluetoothDevice.prototype.readFloat32CharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset, littleEndian = true) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getFloat32Value, [byteOffset, littleEndian]);
}

self.BluetoothDevice.prototype.readFloat64CharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset, littleEndian = true) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getFloat64Value, [byteOffset, littleEndian]);
}

self.BluetoothDevice.prototype.readInt16CharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset, littleEndian = true) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getInt16Value, [byteOffset, littleEndian]);
}

self.BluetoothDevice.prototype.readInt32CharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset, littleEndian = true) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getInt32Value, [byteOffset, littleEndian]);
}

self.BluetoothDevice.prototype.readInt8CharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getInt8Value, [byteOffset]);
}

self.BluetoothDevice.prototype.readStringCharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getStringValue);
}

self.BluetoothDevice.prototype.readUint16CharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset, littleEndian = true) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getUint16Value, [byteOffset, littleEndian]);
}

self.BluetoothDevice.prototype.readUint32CharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset, littleEndian = true) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getUint32Value, [byteOffset, littleEndian]);
}

self.BluetoothDevice.prototype.readUint8CharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, byteOffset) {
  return this.readCharacteristicValueFromPrimaryService(characteristicUuid, serviceUuid,
      self.BluetoothRemoteGATTCharacteristic.prototype.getUint8Value, [byteOffset]);
}

self.BluetoothDevice.prototype.writeCharacteristicValueFromPrimaryService = function(serviceUuid, characteristicUuid, data) {
  return this.getCharacteristicFromPrimaryService(serviceUuid, characteristicUuid)
  .then(characteristic => characteristic.writeValue(data));
};

self.BluetoothDevice.prototype.startCharacteristicNotificationsFromPrimaryService = function(serviceUuid, characteristicUuid, listener) {
  return this.getCharacteristicFromPrimaryService(serviceUuid, characteristicUuid)
  .then(characteristic => characteristic.startNotifications())
  .then(characteristic => characteristic.addEventListener('characteristicvaluechanged', listener));
};

self.BluetoothDevice.prototype.stopCharacteristicNotificationsFromPrimaryService = function(serviceUuid, characteristicUuid, listener) {
  return this.getCharacteristicFromPrimaryService(serviceUuid, characteristicUuid)
  .then(characteristic => characteristic.stopNotifications())
  .then(characteristic => characteristic.removeEventListener('characteristicvaluechanged', listener));
};
