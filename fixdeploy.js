const replace = require('replace-in-file');
const fs = require('fs');
const target_folder_name = "/~kharras/courses/07129/"


const replaceFunction = async (target_folder) => {
    try {
        await replace({
            files: ['out/**/*.html', 'out/**/*.js'],
            from: [/href="\//g, /src="\//g, /href:"\//g, /route:"\//g, /_next\/static\/chunks\/pages\//g, /\/pages\/resources\//g],
            to: [`href="${target_folder}`, `src="${target_folder}`, `href:"${target_folder}`, `route:"${target_folder}`, '_next/static/pages/', '/pages-resources/'],
          })
        console.log("Done!");
      }
      catch (error) {
        console.error('Error occurred:', error);
      }
      
}


fs.rename('out/_next/static/chunks/pages', 'out/_next/static/pages', (err) => {
    if (err) {
        console.log("Error happened, please move the folder manually");
        throw err;
    }

    fs.rename('out/_next/static/pages/resources', 'out/_next/static/pages-resources', (err) => {
        if (err) {
            console.log("Error happened, please move the folder manually");
            throw err;
        }
        console.log('Done movings!');
    });
});

replaceFunction(target_folder_name);