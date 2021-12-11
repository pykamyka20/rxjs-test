import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/main/service/main.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { concat, debounceTime, map, Observable, switchMap, switchMapTo } from 'rxjs';
import { MainInterface } from 'src/app/main/interface/main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  emptyStatus: string = '';
  emptyEmail: string = '';
  searchForm: FormGroup = new FormGroup({});
  _params!: Params
  clients$!: Observable<MainInterface[]>

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this._params = params
    });
    this.createSearchForm()
    this.createClientsList()
  }


  createSearchForm() {
    this.searchForm.addControl('search', new FormControl(this._params['email'] || '', [
    ]));
    this.searchForm.addControl('checkBox', new FormControl(this._params['status'] == 'active' ? true : false || '', [
    ]));
  }

  createClientsList() {
    const default$ = this.mainService.getData(this.emptyStatus, this.emptyEmail)
    .pipe(map(data => {return data['data']}))
    const search$ = this.searchForm.valueChanges
    .pipe(
      debounceTime(400),
      switchMap(data => {
      console.log(data)
        return this.mainService.getData(data.checkBox ? 'active' : 'inactive', data.search).pipe(map(data => {return data['data']}))
      }),
    )
    this.clients$ = concat(default$, search$)
  }


}