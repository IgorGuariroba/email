import app from "./server";

app.listen({
    host: process.env.HOST_API,
    port: process.env.PORT ?  Number(process.env.PORT) : 3333,
}).then(() => {
    console.log('HTTP service running')
})