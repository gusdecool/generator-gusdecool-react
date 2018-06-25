const Generator = require('yeoman-generator');

class ReactAppGenerator extends Generator {

    /**
     * @NOTE: can't change parameters name, due to yeoman using eval()
     * @param args
     * @param opts
     */
    constructor(args, opts) {
        super(args, opts);

        this.argument('appName', {required: true, type: String, description: 'The app name'});
    }

    //---------------------------------------------------------------------------------------------
    // Task queue
    //---------------------------------------------------------------------------------------------

    writing() {
        this.fs.copy(
            this.templatePath(),
            this.destinationPath(this.options.appName),
            { globOptions: { dot: true } }
        );

        [
            './build/index.html',
            './src/Scss/style.scss',
            './src/entry.jsx',
            './package.json',
            './README.md',
            './webpack.config.js',
        ].forEach(fileName => {
            this.fs.copyTpl(
                this.templatePath(fileName),
                this.destinationPath(this.options.appName + '/' + fileName),
                {
                    appName: this.options.appName
                }
            );
        });
    }

    install() {
        this.yarnInstall(undefined, {cwd: this.options.appName});
    }

}

module.exports = ReactAppGenerator;