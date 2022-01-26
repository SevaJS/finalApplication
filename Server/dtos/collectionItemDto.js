module.exports = class collectionDto {
    title;
    description;
    id;
    picture;

    constructor(model) {
        this.title = model.title;
        this.id = model._id;
        this.description = model.description;
        this.picture = model.picture
    }
}