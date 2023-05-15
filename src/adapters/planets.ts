import httpInstance, { IHttp } from './http'; // assuming http adapter is in a separate file
import config from '../config';
import { IPlanet } from '../consts';


class Api {
  private static instance: Api;
  private http: IHttp;

  private constructor(http: IHttp) {
    this.http = http;
  }

  public static getInstance(): Api {
    if (!Api.instance) {
      const http = httpInstance({baseURL: config.apiBaseUrl})
      Api.instance = new Api(http);
    }
    return Api.instance;
  }

  public async getPlanets(page = 1): Promise<{next: string | null | undefined, count: number, results: IPlanet[] }> {
    const response = await this.http.get<{next: string | null | undefined, count: number, results: IPlanet[] }>(`planets?page=${page}`);
    return response;
  }

  // add other methods for other endpoints as needed
}

export default Api.getInstance()
