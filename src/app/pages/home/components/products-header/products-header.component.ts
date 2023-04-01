import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'desc';
  itemsShowCount = 8;

  constructor() {}
  ngOnInit(): void {}
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(this.sort);
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }
  onColumnsUpdated(cnt: number): void {
    console.log('columns clicked and emitted');
    this.columnsCountChange.emit(cnt);
  }
}
