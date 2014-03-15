#include <SPI.h>
#include <Ethernet.h>
#include <PubSubClient.h>
#include <LiquidCrystal.h>

//
// Network Configuration
//
byte mac[] = { 0x90, 0xA2, 0xDA, 0x0E, 0x98, 0x91 };
byte server[] = { 192, 168, 1, 3 };
byte ip[] = { 192, 168, 1, 34 };

//
// Callback function header
//
void callback(char* topic, byte* payload, unsigned int length);

//
// toString function header
//
String toString(byte* payload, unsigned int length);

//
// Ethernet and MQTT Clients
//
EthernetClient ethClient;
PubSubClient client(server, 1883, callback, ethClient);

//
// LCD Shield
//
LiquidCrystal lcd(8, 9, 4, 5, 6, 7); 

void setup() {
  //
  // LCD Setup
  //
  lcd.begin(16, 2);
  lcd.setCursor(0, 0);
  lcd.print("MQTT Client");
  
  //
  // MQTT Client Setup
  //
  Ethernet.begin(mac, ip);
  if (client.connect("ardx01")) {
    client.subscribe("messages");
  }
}

void loop() {
  client.loop();
}

//
// MQTT Callback function
//
void callback(char* topic, byte* payload, unsigned int length) {

  if (strcmp(topic, "messages") == 0) {
    String msg = toString(payload, length);
    //
    // Print received message on LCD
    //
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Received:");
    lcd.setCursor(0, 1);  
    lcd.print(msg);
  }
}

//
// toString function
//
String toString(byte* payload, unsigned int length) {
  int i = 0;
  char buff[length + 1];
  for (i = 0; i < length; i++) {
    buff[i] = payload[i];
  }
  buff[i] = '\0';
  String msg = String(buff);
  return msg;
}
