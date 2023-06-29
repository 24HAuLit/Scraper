import Scraper from './scraper';

(async () => {
  const scraper = new Scraper();
  await scraper.initialize();
  await scraper.navigateToDocumentation();
  const openApiSpecs = await scraper.scrapeDocumentation();
  await scraper.saveSpecifications(openApiSpecs);
  await scraper.close();
})();
