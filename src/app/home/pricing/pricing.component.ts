import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.less']
})
export class PricingComponent implements OnInit {

  selectedItem  = 1
  list= [
    {id:'0',title:'Gold Package', price:'$140',link:'/', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
    {id:'1',title:'Platinume Package', price:'$140',link:'/', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
    {id:'2',title:'Silver Package', price:'$140',link:'/', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
    {id:'3',title:'Another Package', price:'$140',link:'/', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
  ]
  filtered_list = []
  constructor() { 
    
  }

  filterList(id){
    id = Number(id)
    this.filtered_list = []
    let displayed_ids = [id - 1, id, id + 1]
    console.log('displayed_ids',displayed_ids)
    displayed_ids.forEach(i=>{
      if( i < 0) i = this.list.length -1
      else if( i >= this.list.length ) i = 0
      this.filtered_list.push(this.list[i])
    })
    console.log('ooooo',this.filtered_list)
  }
  ngOnInit(): void {
    this.filterList(this.selectedItem)
    
  }
  selectItem(id){
    console.log('ee',id)
    this.selectedItem = id
    this.filterList(id)
  }

  
}
