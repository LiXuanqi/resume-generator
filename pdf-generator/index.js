const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  
  console.log(await page.content());
  await page.pdf({path: 'api.pdf', format: 'A4'});
  
  await browser.close();
})();