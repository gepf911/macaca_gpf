'use strict';

var path = require('path');
var _ = require('macaca-utils');
var xml2map = require('xml2map');

var platform = process.env.platform || 'Android';
platform = platform.toLowerCase();

var iOSOpts = {
  platformVersion: '9.3',
  deviceName: 'iPhone 5s',
  platformName: 'iOS',
  //bundleId: 'xudafeng.ios-app-bootstrap',
  app: path.join(__dirname, '..', 'app', `${platform}-app-bootstrap.zip`)
};

var androidOpts = {
  platformName: 'Android',
  //package: 'com.github.android_app_bootstrap',
  //activity: 'com.github.android_app_bootstrap.activity.WelcomeActivity',
  app: path.join(__dirname, '..', 'app', `${platform}-app-bootstrap.zip`)
};

var wd = require('webdriver-client')(_.merge({}, platform === 'ios' ? iOSOpts : androidOpts));

// override back for ios
wd.addPromiseChainMethod('customback', function() {
  if (platform === 'ios') {
    return this;
  }

  return this
    .back();
});

describe('macaca mobile sample', function() {
  this.timeout(5 * 60 * 1000);

  var driver = wd.initPromiseChain();

  driver.configureHttp({
    timeout: 600000
  });

  before(function() {
    return driver
      .initDriver();
  });

  after(function() {
    return driver
      .sleep(3000)
      .quit();
  });

  it('#1 should click cancel_update button', function() {
    return driver
	  .sleep(3000)
	  .waitForElementById('com.sitech.ac:id/cancel_update')
	  //.elementByIdIfExists('com.sitech.ac:id/cancel_update')
      .click()
  });

  it('#2 should click home', function() {
    return driver
	  .sleep(5000)
	  .elementByIdIfExists('com.sitech.ac:id/tab_img_normal')
	  //.elementByLinkText("我的移动")
      .click()
      //.takeScreenshot();
  });

  it('#3 should click login', function() {
    return driver
	  .sleep(3000)
      .elementById('com.sitech.ac:id/mine_phone_txt')
      .click()
	  //.elementByName('Webview')
  });

  it('#4 should login app', function() {
    return driver
     // .swipe(200, 400, 200, 100, 500)
     // .customback()
	  .elementById('com.sitech.ac:id/phone_number')
	  .sendKeys('15156889837')
      .sleep(1000)
      .elementById('com.sitech.ac:id/key')
	  .sendKeys('778899')
	  .sleep(1000)
	  .elementById('com.sitech.ac:id/btn_log')
      .click()
	  .sleep(1000)
	  .elementById('com.sitech.ac:id/btn_log')
      .click()
	  .sleep(3000)
	  //.elementById('com.sitech.ac:id/tvjyb')
      //.click()
   //   .takeScreenshot();
  });
  
  it('#5 should logout app', function() {
    return driver
     // .swipe(200, 400, 200, 100, 500)
     // .customback()
	  .sleep(3000)
	  .elementByIdIfExists('com.sitech.ac:id/imageview1')
	  .click()
      .sleep(1000)
      .elementByIdIfExists('com.sitech.ac:id/userTv')
	  .click()
	  .sleep(3000)
	  .waitForElementById('com.sitech.ac:id/uesr_out_layout')
	  //.elementByLinkText("退出登录")
      //.click()
	  //.sleep(2000)
	  //.waitForElementById('com.sitech.ac:id/tvtc')
      //.click()
	  //shutdown_test_server
	  //.elementById('com.sitech.ac:id/tvjyb')
      //.click()
   //   .takeScreenshot();
  });

});
