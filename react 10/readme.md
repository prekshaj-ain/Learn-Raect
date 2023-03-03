### Assignment 10
#### Q: Explore all the ways of writing css.
- Native css : .css files for component styling.

- scss : we can add multiple additional functionality to css such as variables, nesting, mixins, extend and more. scss is compiled to css.
- inline css : putting css with code. No extra css file. to back and forth with css and code. No need to write classname.
- Libraries like material-ui, chakra-ui : pre-build styled components.
pros: easy to use, reuseable, automatic themeing, consistent ui
cons: heavy bundle size, personal customization is hard.
- styled-components : css-in-js 
- Frameworks : to write optimized css. It saves time. 
pros: control over styling,  faster css styling process, responsiveness and security
cons: styling and code is mixed, which makes classnames big and king-of-ugly, It take time to learn

#### Q: How do we configure tailwind?
Steps to use tailwind css in app :

 - Install tailwind css
``` 
npm install -D tailwindcss postcss
npx tailwindcss init
 ```
 - Configure PostCSS
```
{
  "plugins": {
    "tailwindcss": {}
  }
}
 ```
 - Configure your template paths
```
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
 ```
 - Add the Tailwind directives to your CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;  
 ``` 
#### Q: In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
` Content ` - The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.
` Theme ` - The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.
` Plugins ` - Extending Tailwind with reusable third-party plugins.
` Extend ` -  if you’d like to extend the default scale, you can do so using the theme.extend.spacing section of your tailwind.config.js file:
```
module.exports = {
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    }
  }
}
 ```  

#### Q: Why do we have .postcssrc file?
PostCSS - A tool for transforming CSS with JavaScript.
PostCSS provides a large ecosystem of plugins to perform different functionalities like linting, minifying, inserting vendor prefixes, and many other things.
Despite its name, it is neither a post-processor nor a pre-processor, it is just a transpiler that turns a special PostCSS plugin syntax into a Vanilla CSS. You can think of it as the Babel tool for CSS.

 We use PostCSS because tailwind is installed as a PostCSS plugin.

While installing tailwind, install postcss as its peer dependency. Create a '.postcssrc' file in project root, and enable the tailwindcss plugin.