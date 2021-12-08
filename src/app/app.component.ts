import { Arr } from './models/arr';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Check {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}




// const testttttt= [
//   { id: 'azdef', title: 'ezfzef' },
//   { id: 'azdef', title: 'ezfzef' },
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  check: Check = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
  };
  title = 'angular';
  arr: Arr[] = [];
  public newTask: any;
  public newTask2: any;
  public erreur: any;
  id: number = 0
  placetab: any;
  compteur: number = 0
  reussis: boolean = false
  // ELEMENT_DATA :Arr[] = [];
  name: string = "";
  test = []


  constructor() { }
  ngOnInit(index: number) {
    console.log("1", this.arr)
    this.arr = JSON.parse(localStorage.getItem('task') || '')
    console.log(this.arr)

    this.reussis = this.arr[index].reussis
    console.log(this.reussis)

    // this.reussis = this.arr.reussis

    // this.ELEMENT_DATA = JSON.parse(localStorage.getItem('task') || '');

    // console.log("tableau en localstorage: ",this.ELEMENT_DATA)
    // console.log("tableau a la dure : ",testttttt)
  }
  // displayedColumns: string[] = ['id', 'title'];
  // dataSource = this.ELEMENT_DATA;


  create() {
    if (!this.newTask2) {
      this.erreur = "il faut au moins 1 caractere par champs"
    }
    else {
      if (this.newTask2.length < 40) {
        if (this.arr.length == 0) {
          let globaltask = {
            id: 1,
            title: this.newTask2,
            reussis: this.reussis
          }
          this.arr.push(globaltask);
          localStorage.setItem('task', JSON.stringify(this.arr));
          this.newTask = "";
          this.newTask2 = "";
          this.erreur = ""
        } else {
          let m = this.arr.length - 1
          console.log(this.arr.length)
          let globaltask = {
            id: this.arr[m].id + 1,
            title: this.newTask2,
            reussis: this.reussis
          }
          this.arr.push(globaltask);
          localStorage.setItem('task', JSON.stringify(this.arr));
          this.newTask = "";
          this.newTask2 = "";
          this.erreur = ""
        }
      }
      else {
        this.erreur = "il y a plus de 10 caractere dans un des deux champs"
      }
    }
  }
  delete(del: number) {
    this.arr.splice(del, 1)
    localStorage.setItem('task', JSON.stringify(this.arr));
  }
  deleteAll() {
    localStorage.removeItem('task');
    this.arr = []
  }

  Cheched(index: number) {
    // let id = this.arr[index].reussis
    // this.arr[index].reussis = true
    // console.log(this.arr)
    // console.log(this.arr[index].reussis)

    if (this.arr[index].reussis == false) {
      this.arr[index].reussis = true
      localStorage.setItem('task', JSON.stringify(this.arr));
      console.log(this.arr)
    } else {
      this.arr[index].reussis = false
      localStorage.setItem('task', JSON.stringify(this.arr));
      console.log(this.arr)
    }



  }
}
