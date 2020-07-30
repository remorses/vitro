const NODE_ENV = process.env.NODE_ENV
console.log('NODE_ENV', NODE_ENV)

module.exports = {
    // basePath: NODE_ENV == 'production' ? '/.vitro' : '/',
    experiments: ['./**/*.vitro.jsx', './**/*.vitro.tsx'],
    globalCSS: ['tailwindcss/dist/tailwind.css'],
    ignore: ['renderer'],
}
