import { makeAutoObservable } from "mobx";

export default class ItemStore {
  constructor() {
    this._types = [];
    this._items = [];
    this._selectedType = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setItems(items) {
    this._items = items;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get items() {
    return this._items;
  }

  get selectedType() {
    return this._selectedType;
  }
}
