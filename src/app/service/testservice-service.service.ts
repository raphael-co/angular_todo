import { Injectable } from '@angular/core';
import { Arr } from '../models/arr';

@Injectable({
  providedIn: 'root'
})
export class TestserviceServiceService {

  arr:Arr[] = [];


  constructor() { }

  getAllTasks(){}
}
