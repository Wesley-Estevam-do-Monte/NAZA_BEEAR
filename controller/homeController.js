
const homePage = ( req, res ) => {
    res.render('home');
}

const jogadores = ( req, res ) => {
    res.render('tables')
}

module.exports = {
    homePage,
    jogadores
}