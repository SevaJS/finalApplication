import { makeAutoObservable, observable } from "mobx";
import TypeService from "../service/TypeService";

export default class typeStore {
  _selectedType = {};

  typeToCreate = { type: "All" };

  collTypes = [];

  constructor() {
    this._selectedType = {};
    this.typeToCreate = {};
    this.collTypes = [];

    makeAutoObservable(this, { item: observable }, { deep: true });
  }

  setTypes(type) {
    this.collTypes = type;
  }

  setSelectedTypeToCreate(type) {
    this.typeToCreate = type;
  }

  get selectedTypeToCreate() {
    return this.typeToCreate;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get selectedType() {
    return this._selectedType;
  }

  async getTypes() {
    return await TypeService.getTypes();
  }

  async createType(data) {
    return await TypeService.createTypes(data);
  }
}
