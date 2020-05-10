import { access } from "fs";
import { PassThrough } from "stream";

describe("This is a TestPart ", function () {
  var a;
  var j = "10";
  var multy = "15";
  it("To be True", function () {
    a = true;
    expect(a).toBe(true);
    console.log("Print me if above conidtion is true")
  })
  it("Not to be True", function () {
    a = false;
    expect(a).not.toBe(true);
    console.log("Print me if above condition is true");
  })
  it("Equal to", function () {
    expect(a).toEqual(false);
    console.log("Print me if above condition is true");
  })
  it("To be Null", function () {
    a = null;
    console.log("Print me if null is defined");
  })
  it("Expected Message", function () {
    var message = "Thank you for Contacting us ...!"
    expect(message).toContain('Thank')
    console.log("Vaidation message is successfully")
  })
  it("Should be Lessthan", function () {
    var i = "10";
    expect(i).toBeLessThan(15)
    console.log("My value is lessthan i")
  })
  it("Should be Greterthan ", function () {
    //var j = "11";
    expect(j).toBeGreaterThan(3)
    console.log("My value is greterthan j")
  })
  it("Multy condition check", function () {
    expect(multy).toBeGreaterThan(5)
    expect(multy).toBeLessThan(100)
    expect(multy).toContain(1)
    console.log("Congrats all conditions are validated..!")
  })
  beforeAll("I am going to Execute First", function () {
    console.log("I am first gonna execute")
  })
  afterAll("I am last gonna execute...!", function () {
    console.log("I am last executed method")
  })
  beforeEach("Execute me Again and Again", function () {
    console.log("BEFORE EACH....!")
  })
  afterEach("Execute me Again and Again After", function () {
    console.log("After Each...")
  })
})


// before ALL  >> developer webdsite vs >> sql RTCPeerConnectionIceEvent
// json permission accessauthentication lass PassThrough

// driver iis android or not ?
// driver is ios  ?
//  is my application is installed or not ?
//  reinstall import {  } from "module";
// import { getHeapCodeStatistics } from "v8";
// import { get } from "https";

//  afterall >>  screenshot 
//  validation  >> welcome messages,status getHeapCodeStatistics,current url get

//  click on mobile  >> lesssthan 10000
//  beforeeach >> clear cart IDBCursorWithValue
//  methos 
// after each >> bl >> x  = 1000  1000*10% = 1100

// afterall >> driverclose
// connection 
// report allure
// zio file >> upload in a sharedrive ,inedrive