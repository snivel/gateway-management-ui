var Constants = {
  DEVICE_LIST_UPDATED: 'DEVICE_LIST_UPDATED',
  RULES_LIST_UPDATED: 'RULES_LIST_UPDATED',
  DEVICE_JOINED: 'DEVICE_JOINED',
  DEVICE_LEFT: 'DEVICE_LEFT',
  DEVICE_UPDATE: 'DEVICE_UPDATE',
  SERVER_SETTINGS: 'SERVER_SETTINGS',
  GATEWAY_SETTINGS: 'GATEWAY_SETTINGS',
  OTA_AVAILABLE_FILES: 'OTA_AVAILABLE_FILES',
  SERVER_LOG: 'SERVER_LOG',
  GATEWAY_LOG: 'GATEWAY_LOG',
  TRAFFIC_TEST_LOG: 'TRAFFIC_TEST_LOG',
  TRAFFIC_TEST_RESULTS: 'TRAFFIC_TEST_RESULTS',
  HEARTBEAT: 'HEARTBEAT',
  SERVER_LOG_STREAM: 'SERVER_LOG_STREAM',
  GATEWAY_LOG_STREAM: 'GATEWAY_LOG_STREAM',

  // Device Constants
  DEVICE_ID_ON_OFF_SWITCH: 0x0000,
  DEVICE_ID_LEVEL_CONTROL_SWITCH: 0x0001,
  DEVICE_ID_COLOR_DIMMER_SWITCH: 0x0105,
  DEVICE_ID_ON_OFF_LIGHT: 0x0100,
  DEVICE_ID_DIMMABLE_LIGHT: 0x0101,
  DEVICE_ID_COLOR_DIMMABLE_LIGHT: 0x0102,
  DEVICE_ID_HA_ON_OFF_LIGHT: 0x0103,
  DEVICE_ID_EXTENDED_COLOR_LIGHT: 0x0210,
  DEVICE_ID_COLOR_TEMPERATURE_LIGHT: 0x0220,
  DEVICE_TYPE_SENSOR: 0x0302,
  DEVICE_TYPE_CONTACT_SENSOR: 0x0402,
  DEVICE_TYPE_SMART_PLUG: 0x0051,
  DEVICE_TYPE_OCCUPANCY_SENSOR: 0x0107,
  
  // ZigBee Bootloader Cluster
  BOOTLOADER_CLUSTER: 0x0019,
  FIRMWARE_VERSION_ATTRIBUTE: 0x0002,
  IMAGE_TYPE_ATTRIBUTE: 0x0008,
  MANUFACTURER_ID_ATTRIBUTE: 0x0007,

  // ZigBee IAS Zone Cluster
  IAS_ZONE_CLUSTER: 0x0500,
  ZONESTATUS_VAL_ATTRIBUTE: 0x0002,

  // ZigBee Temperature Cluster
  TEMPERATURE_CLUSTER: 0x0402,
  TEMPERATURE_VAL_ATTRIBUTE: 0x0000,
  TEMPERATURE_ATT_TYPE: 0x0000,

  // Simple Metering Cluster
  SIMPLE_METERING_CLUSTER: 0x0702,
  SUMMATION_VAL_ATTRIBUTE: 0x0000,
  SUMMATION_ATT_TYPE: 0x0000,
  UNIT_OF_MEASURE_ATTRIBUTE: 0x0300,
  MULTIPLIER_ATTRIBUTE: 0x0301,
  DIVISOR_ATTRIBUTE: 0x0302,
  SUMMATION_FORMATTING_ATTRIBUTE: 0x0303,

  // Illuminance Cluster
  ILLUMINANCE_CLUSTER: 0x0400,
  ILLUMINANCE_VAL_ATTRIBUTE: 0x0000,
  ILLUMINANCE_MINVAL_ATTRIBUTE: 0x0001,
  ILLUMINANCE_MAXVAL_ATTRIBUTE: 0x0002,

  // Humidity Cluster
  HUMIDITY_CLUSTER: 0x0405,
  HUMIDITY_VAL_ATTRIBUTE: 0x0000,
  HUMIDITY_MINVAL_ATTRIBUTE: 0x0001,
  HUMIDITY_MAXVAL_ATTRIBUTE: 0x0002,

  // Occupancy Sensing Cluster
  OCCUPANCY_CLUSTER: 0x0406,
  OCCUPANCY_VAL_ATTRIBUTE: 0x0000,
  OCCUPANCY_SENSOR_TYPE_ATTRIBUTE: 0x0001,

  // Electrical Measurement Cluster
  ELECTRICAL_CLUSTER: 0x0B04,
  RMS_VOLTAGE_VAL_ATTRIBUTE: 0x0505,
  RMS_VOLTAGE_TYPE: 0x21,
  RMS_CURRENT_VAL_ATTRIBUTE: 0x0508,
  RMS_CURRENT_TYPE: 0x21,
  ACTIVE_POWER_VAL_ATTRIBUTE: 0x050B,
  ACTIVE_POWER_TYPE: 0x29,
  ALARMS_MASK_ATTRIBUTE: 0x0800,
  ALARMS_MASK_TYPE: 0x19,
  VOLTAGE_OVERLOAD_ATTRIBUTE: 0x0801,
  VOLTAGE_OVERLOAD_TYPE: 0x29,
  CURRENT_OVERLOAD_ATTRIBUTE: 0x0802,
  CURRENT_OVERLOAD_TYPE: 0x29,
  ACTIVE_POWER_OVERLOAD_ATTRIBUTE: 0x0803,
  ACTIVE_POWER_OVERLOAD_TYPE: 0x29,
  
  // Node States 
  ND_JUST_JOINED:  0x00,
  ND_HAVE_ACTIVE:  0x01,
  ND_HAVE_EP_DESC:  0x02,
  ND_JOINED:        0x10, 
  ND_UNRESPONSIVE:  0x11,
  ND_LEAVE_SENT:    0x20,
  ND_LEFT:          0x30,
  ND_UNKNOWN:       0xff,

  OTA_WAITING_TIMEOUT: 15000,
  REFORM_TIMEOUT: 4000,
};

module.exports = Constants;
