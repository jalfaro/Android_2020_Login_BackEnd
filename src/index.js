const app = require("./config/server");
require('./app/routes/login')(app);

app.listen(app.get("PORT"), () => console.log(`Servidor correindo en el puerto ${app.get("PORT")}`));