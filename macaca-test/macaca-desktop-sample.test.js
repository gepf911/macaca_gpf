'use strict';

var wd = require('webdriver-client')({
  platformName: 'desktop',
  browserName: 'electron'
});

describe('macaca desktop sample', function() {
  this.timeout(5 * 60 * 1000);

  const driver = wd.initPromiseChain();
  const initialURL = 'http://ah.10086.cn/mall';

  before(() => {
    return driver
      .initDriver()
	  .maximize(driver)
      //.setWindowSize(1280, 800);
  });

  it('#0 should go into macaca', function() {
    return driver
      .get(initialURL)
      .sleep(3000);
  });

  it('#1 should works with shangcheng', function() {
    return driver
      .elementByClassName('red')
	  .click()
      
      .sleep(3000)
      .elementById('loginName')
	  .sendKeys('14755534934')
	  .elementById('smsValiCodeInput_')
	  .sendKeys('112233')
	  .elementById('yzm1')
	  .sendKeys('1111')
	  .elementById('licenseChk_index')
      .click()
	  .elementById('login_entry')
      .click()
      .sleep(5000)
      .source()
      .then(function(html) {
        html.should.containEql('14755534934');
      })
      //.hasElementByCss('#head > div.head_wrapper')
      //.then(function(hasHeadWrapper) {
      //  hasHeadWrapper.should.be.true();
      //})
      //.elementByXPathOrNull('//*[@id="kw"]')
      //.sendKeys(' elementByXPath')
      //.sleep(3000)
      //.elementById('su')
      //.click()
      //.sleep(5000)
      //.takeScreenshot();
  });

  it('#2 should get the url', function() {
    return driver
      .get(initialURL)
      .sleep(3000);
  });

  it('#3 should works with web', function() {
    return driver
	  .elementByLinkText("合约购机")
	  .click()
	  .sleep(3000);   
  });

  after((done) => {
    return driver
      .quit(done);
  });
});
