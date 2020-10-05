module.exports = {
    packageManager: 'yarn',
    experiments: ['./**/*.vitro.jsx', './**/*.vitro.tsx'],
    // globalCSS: ['tailwindcss/dist/tailwind.css'],
    transpileModules: ['@vitro'],
    importCSS: true,
    ignore: ['renderer'],
}
