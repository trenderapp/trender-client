import axios, { AxiosInstance } from 'axios';

const baseapiurl = 'http://localhost:4000/api';

class RequestEmitter {
  private instance: AxiosInstance;

  constructor(token: string) {
    this.instance = axios.create({
      baseURL: baseapiurl,
      headers: {
        "trendertokenapi": token ?? null
      },
      validateStatus: (s) => s < 501
    });
  }

  protected async postRequest(url: string, data: object) {
    const request = await this.instance({
      method: 'POST',
      url: url,
      data: data
    });

    return request.data;
  }

  protected async patchRequest(url: string, data: object) {
    const request = await this.instance({
      method: 'PATCH',
      url: url,
      data: data
    });
    
    return request.data;
  }

  protected async getRequest(url: string) {
    const request = await this.instance({
      method: 'GET',
      url: url
    });

    return request.data;
  }

  protected async deleteRequest(url: string) {
    const request = await this.instance({
      method: 'DELETE',
      url: url
    });

    if (request.status !== 204) return false;
    else return true;
  }
}

export default RequestEmitter;
