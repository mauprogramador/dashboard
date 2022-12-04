import { Period } from './../models/period';
import { Injectable } from "@angular/core";
import { Periods } from '../models/enums';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    public chart2021Data!: Period;
    public chart2022Data!: Period;

    constructor() {
        this.chart2021Data = new Period(Periods.yearOf2021);
        this.chart2022Data = new Period(Periods.yearOf2022);
    }


















}