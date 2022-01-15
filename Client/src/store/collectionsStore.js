import {makeAutoObservable} from "mobx";

export default class collectionsStore {

    constructor() {
        this._selectedType = {}
        this._collections = [
            {
                id: '1',
                title: "PIVO",
                author: "SEVA",
                theme: "PIVOO",
                description: "ETOT POST O PIVE",
                picture: ''
            },
            {
                id: '2',
                title: "PIVO",
                author: "SEVA",
                theme: "PIVOO",
                description: "ETOT POST O PIVE",
                picture: ''
            },
            {
                id: '3',
                title: "PIVO",
                author: "SEVA",
                theme: "PIVOO",
                description: "ETOT POST O PIVE",
                picture: ''
            },
            {
                id: '4',
                title: "PIVO",
                author: "SEVA",
                theme: "PIVOO",
                description: "ETOT POST O PIVE",
                picture: ''
            }


        ]
        this.collTypes = [
            {id: 1, name: 'PIVO'},
            {id: 2, name: 'BOOKS'},
            {id: 3, name: 'ALKO'},
            {id: 4, name: 'PIVO'},


        ]

        makeAutoObservable(this)
    }


    setSelectedType(type) {
        this._selectedType = type;

    }

    get selectedType() {
        return this._selectedType

    }

}