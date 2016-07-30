SystemJS.config({
    paths: {
        "cratis-javascript-core/": "Source/"
    },
    browserConfig: {
        "paths": {
            "npm:": "/jspm_packages/npm/",
            "github:": "/jspm_packages/github/",
            "cratis.javascript.core/": "/Source/"
        }
    },
    nodeConfig: {
        "paths": {
            "npm:": "jspm_packages/npm/",
            "github:": "jspm_packages/github/",
            "cratis.javascript.core/": "Source/"
        }
    },
    devConfig: {
        "map": {
            "babel-runtime": "npm:babel-runtime@5.8.38",
            "core-js": "npm:core-js@1.2.7",
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
            "babel": "npm:babel-core@5.8.38",
            "process": "github:jspm/nodelibs-process@0.2.0-alpha",
            "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
            "path": "github:jspm/nodelibs-path@0.2.0-alpha"
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "cratis-javascript-core": {
            "main": "Distribution/index.js",
            "map": {
                "cratis-javascript-core": "github:Cratis/JavaScript.Core@master/Distribution"
            },
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "cratis-javascript-reflection": "github:Cratis/JavaScript.Reflection@master"
    },
    packages: {}
});
