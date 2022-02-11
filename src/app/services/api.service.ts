import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private api: HttpClient
  ) { }

  getUsers(page, limit) {
    return this.api.get('https://randomuser.me/api/?page=' + page + '&results=' + limit + '&seed=feed');
  }
}
