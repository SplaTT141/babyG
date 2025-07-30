export class PublicPageTemplate {

    head() {
        return `
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BabyG</title>
        <link rel="stylesheet" href="/css/main.css">
        </head>
        `;
    }

    header() {

    }

    main() {

    }

    footer() {

    }



    render() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        ${this.head()}
        <body>
            <h1>Hello wowrld!</h1>
        </body>
        
        </html>
        `;
    }
}