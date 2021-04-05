const usuariosController = {
    index: (req, res) => {
        return res.send('Estou exibindo um mensagem atráves do controller!');
    }
}

module.exports = usuariosController;