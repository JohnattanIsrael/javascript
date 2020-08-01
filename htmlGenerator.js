const htmlGenerator = (title, typeOfHeading) => {
    GeneratedHtml = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <h1>${typeOfHeading}</h1>
</body>
</html>
    `
    console.log(GeneratedHtml);
};
htmlGenerator('HTML Generator', 'Hello there!');

/*
> htmlGenerator('HTML Generator', 'Hello there!');

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Generator</title>
</head>
<body>
    <h1>Hello there!</h1>
</body>
</html>
*/

const htmlGenerator = (title, typeOfHeading) => {
    GeneratedHtml = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <h1>${typeOfHeading}</h1>
</body>
</html>
    `
    return GeneratedHtml;
};
htmlGenerator('HTML Generator', 'Hello there!');

// '\n' +
//   '    <!DOCTYPE html>\n' +
//   '<html lang="en">\n' +
//   '<head>\n' +
//   '    <meta charset="UTF-8">\n' +
//   '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
//   '    <title>HTML Generator</title>\n' +
//   '</head>\n' +
//   '<body>\n' +
//   '    <h1>Hello there!</h1>\n' +
//   '</body>\n' +
//   '</html>\n' +
//   '    '

const headingGenerator = (title, typeofHeading) => {
    return `
        <h${typeofHeading}>${title}</h${typeofHeading}>
    `
}
headingGenerator('Greetings', 2); // '\n        <h2>Greetings</h2>\n    '
headingGenerator('Hello There', 3); // '\n        <h3>Hello There</h3>\n    '

