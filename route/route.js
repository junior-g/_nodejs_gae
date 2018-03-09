module.exports = (router) => {

    /** get all Black Panther characters */
    router
        .route('blackpanther')
        .get()

    /** save a Black Panther character */
    router
        .route('blackpanther')
        .post()

    /** get a Black Panther character */
    router
        .route('blackpanther/:id')
        .get()

    /** delete a Black Panther character */
    router
        .route('blackpanther/:id')
        .delete()
}