const ctrl = require('./../ctrls/ctrl')

module.exports = (router) => {

    /** get all Black Panther characters */
    router
        .route('/blackpanthers')
        .get(ctrl.getAllCharacters)

    /** save a Black Panther character */
    router
        .route('/blackpanther')
        .post(ctrl.addCharacter)

    /** get a Black Panther character */
    router
        .route('/blackpanther/:id')
        .get(ctrl.getCharacter)

    /** delete a Black Panther character */
    router
        .route('/blackpanther/:id')
        .delete(ctrl.deleteCharacter)

    /** update a Black Panther character */
    router
        .route('/blackpanther/:id')
        .put(ctrl.updateCharacter)
}