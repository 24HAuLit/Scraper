import { Category, Endpoint } from './scraper';

export class OpenAPIBuilder {
  private openAPI: any;

  constructor() {
    this.openAPI = {
      openapi: '3.0.0',
      info: {
        title: 'VirusTotal API',
        version: '1.0.0',
      },
      paths: {},
    };
  }

  addCategory(category: Category) {
    // Add the category to the OpenAPI JSON structure
  }

  addEndpoint(categoryName: string, endpoint: Endpoint) {
    // Add the endpoint to the specified category in the OpenAPI JSON structure
  }

  getSpecification() {
    return this.openAPI;
  }
}
