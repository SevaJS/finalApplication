import {makeAutoObservable, observable} from 'mobx'
import TypeService from "../service/TypeService";

export default class typeStore {

    _selectedType = {};
    typeToCreate = {}
    collTypes = []

    constructor() {
        this._selectedType = {}
        this.typeToCreate = {}
        this.collTypes = []

        makeAutoObservable(this, {item: observable}, {deep: true})
    }


    setTypes(type) {
        this.collTypes = type
    }

    setSelectedTypeToCreate(type) {
        this.typeToCreate = type
    }

    get selectedTypeToCreate() {
        return this.typeToCreate
    }

    setSelectedType(type) {
        this._selectedType = type;

    }


    get selectedType() {
        return this._selectedType

    }

    async getTypes() {
        const res = await TypeService.getTypes()
        console.log(res)
        return res
    }

    async createType(data) {
        const res = await TypeService.createTypes(data)
        console.log(res)
        return res
    }


}