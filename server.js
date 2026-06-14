const cds = require('@sap/cds')

// En desarrollo (auth mocked), inyectar automáticamente las credenciales del usuario
// 'dev' en cada request para que las apps Fiori funcionen sin popup de login.
// En producción, auth.kind es 'xsuaa' y este middleware se saltea.
cds.on('bootstrap', (app) => {
  if (cds.env.requires.auth?.kind === 'mocked') {
    const devCreds = Buffer.from('dev:dev').toString('base64')
    app.use((req, _res, next) => {
      if (!req.headers.authorization) {
        req.headers.authorization = `Basic ${devCreds}`
      }
      next()
    })
  }
})

module.exports = cds.server
