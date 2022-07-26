This is a [Next.js](https://nextjs.org/) and [Nextra](https://nextra.vercel.app/) a library for creating webpages with markdown language.

## Getting Started

You have to have `NodeJS` and a package manager `yarn`. Then move with `cd` into this folder and run the following to download the packages required.

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result page.

## Configuration

All you have to edit are the files 

- `public/configuration.js` to update information about class time, deadlines, piazza link and about youself.
- `public/grading.json` to update student list and their points
- `public/schedule.json` to update schedule of the lectures and dates. The schedule file is a list of the following object

```js
    {
      "date": "24-Aug", // date of the class
      "day": "Wed", // Mon or Wed
      "topic": "Kemal Oflazer - Natural Language Processing", // Lecture topic
      "links": [
      ], // links to the presentation / video / images
      "breakDay": false // boolean, is it a break day or not
      "presentation": true,  // is it a presentation day or not
      "first": "The First Presentation", // first presentation topic, only needed if presentation day
      "second": "The Second Presentation" // second presentation topic, only needed if presentation day
    }
```


## Deployment

It is not easy to deploy a `NodeJS` applications from the AFS infrastructure that we have. To deploy any updates you have to do the following:

- Build your app by running `yarn build && yarn next export` command.
- Create a static files by running `yarn next export`. This will create an `out` folder in this directory.
- Open `fixdeploy.js` file and set the appropriate `target_folder`[^1].
- Run `node fixdeploy.js` to fix the files in the out folder.
- Now, upload the files into `unix` servers.
- Check the website.

[^1]: Now, we have to fix the links that are generated in the `out` folder. To do, open `/fixdeploy.js` file and edit `target_folder` constant. If you are building a staged version of your website, I suggest using `/~kharras/courses/07129/stage2023/` and if you are building a final version, just use `/~kharras/courses/07129/`, then you can move the files directly to the root folder `/~kharras/courses/07129/` in the `unix` machines.

## Learn more

To learn more about Next.js and Nextra, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Nextra Documentation](https://nextra.vercel.app/) - learn about Nextra works and how to configure it.