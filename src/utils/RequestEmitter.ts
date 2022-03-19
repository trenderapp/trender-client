import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Events from 'events';
import { baseapiurl } from './Constante';

class RequestEmitter extends Events {
  private instance: AxiosInstance;
  
  constructor(token: string) {
    super();

    this.instance = axios.create({
      baseURL: baseapiurl,
      headers: {
        trendertokenapi: token ?? null
      },
      validateStatus: s => s < 501
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

  protected async uploadFiles(url: string, data: FormData) {
    const request = await this.instance({
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
      },
      url: url,
      data: data
    });

    return request.data;
  }

  protected async patchRequest(url: string, data: object, params?: AxiosRequestConfig) {
    const request = await this.instance({
      method: 'PATCH',
      url: url,
      data: data,
      params
    });

    return request.data;
  }

  protected async putRequest(url: string, data: object) {
    const request = await this.instance({
      method: 'PUT',
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

    return request.data;
  }
}

export default RequestEmitter;
