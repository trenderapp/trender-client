import axios, { AxiosInstance } from 'axios';

const baseapiurl = 'https://api.trenderapp.com/api';

class EventEmitter {
  private instance: AxiosInstance;

  constructor(token: string) {
    this.instance = axios.create({
      baseURL: baseapiurl,
      headers: {
        trenderapikey: token ?? null
      }
    });
  }

  protected async postRequest(url: string, data: object) {
    const request = await this.instance({
      method: 'POST',
      url: url,
      data: data
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  protected async patchRequest(url: string, data: object) {
    const request = await this.instance({
      method: 'PATCH',
      url: url,
      data: data
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  protected async getRequest(url: string) {
    const request = await this.instance({
      method: 'GET',
      url: url
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  protected async deleteRequest(url: string) {
    const request = await this.instance({
      method: 'DELETE',
      url: url
    });

    if (request.status !== 204) throw request;
    else return true;
  }
}

export default EventEmitter;
