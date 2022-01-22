module.exports = class collectionDto {
    title;
    author;
    theme;
    description;
    id;
    picture;

    constructor(model) {
        this.title = model.title;
        this.id = model._id;
        this.author = model.author;
        this.theme = model.theme;
        this.description = model.description;
        this.picture = model.picture
    }
}