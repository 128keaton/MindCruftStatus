requirejs.config({
    baseUrl: "node_modules/",
    paths: {
        'jquery': 'jquery/dist/jquery.min',
        'font-awesome': '@fortawesome/fontawesome-free/js/all'
    }
});

// Load the main app module to start the app
requirejs(["../js/app/main"]);