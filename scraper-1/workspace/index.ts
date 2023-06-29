import { Scraper } from './scraper';
import { OpenAPIBuilder } from './openapi-builder';

async function main() {
  const scraper = new Scraper();
  const openAPIBuilder = new OpenAPIBuilder();

  await scraper.navigateTo('https://developers.virustotal.com/reference/overview');
  const scrapedData = await scraper.scrape();
  await scraper.close();

  for (const category of scrapedData.categories) {
    openAPIBuilder.addCategory(category);

    for (const endpoint of category.endpoints) {
      openAPIBuilder.addEndpoint(category.name, endpoint);
    }
  }

  const openAPISpecification = openAPIBuilder.getSpecification();
  console.log(JSON.stringify(openAPISpecification, null, 2));
}

main();
