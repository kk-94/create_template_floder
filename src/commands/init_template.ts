export default {
  web: (name: string) => {
    return {
      [`${name}.html`]: [
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        `<head>`,
        `  <meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        `  <meta http-equiv="X-UA-Compatible" content="ie=edge">`,
        `  <script src="./${name}.js"></script>`,
        `  <title>${name}</title>`,
        `</head>`,
        `<body>`,
        `</body>`,
        `</html>`
      ],
      [`${name}.js`]: [`console.log('${name} ok')`]
    };
  },
  h5: (name: string) => {
    return {
      [`${name}.html`]: [
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        `<head>`,
        `  <meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        `  <meta http-equiv="X-UA-Compatible" content="ie=edge">`,
        `  <script src="./${name}.js"></script>`,
        `  <title>${name}</title>`,
        `</head>`,
        `<body>`,
        `</body>`,
        `</html>`
      ],
      [`${name}.js`]: [`console.log('${name} ok')`]
    };
  },
};
