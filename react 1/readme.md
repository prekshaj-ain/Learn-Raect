### Assignment 1

#### q1: what is Emmet?
Bunch of different shortcuts and snippets. When you type a small amount of code eg: !.
It will generate numch of code for you eg: whole bioler plate.

#### q2: Difference between library and framework?
| Library | Framework  | 
| :----    | :------ |
| A library is a collection of prewritten code that can be used to simplify tasks. | Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.  |
|  library simply refers to a collection of code that is reused repeatedly. It is essentially a set of pre-defined functions and classes that programmers can use to simplify their work and speed up the development process. | Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc. |
| Less code is required to build libraries, which leads to faster loading times and better performance. | Developing a framework requires a lot of coding, which increases loading times and decreases performance. |
| JQuery, React JS, etc. | NodeJS, AngularJS, Vue JS, etc. |

#### q3: What is cdn? why do we need it?
A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

Improving website load times 
Reducing bandwidth costs
Increasing content availability and redundancy
Improving website security

#### q4: why is react known as react?
React is named react because of its ability to react to changes in data.
When the data in react component changes, react will automatically re-render the component to update the changes.

#### q5: what is crossOrigin in script tag?
When page often makes request to load the resources on other servers. Here is when the cors comes in.
The crossOrigin attribute sets the mode of request to http cors request

#### q6: what is integrity in script tag?
Integrity attribute allows the browser to check the fetched script to ensure that the code is never loaded if the source has been manipulated. 

#### q7: difference between react and reactDOM?
| React | ReactDOM  | 
| :----    | :------ |
| a javascript library, designed for building user interfaces | a complimentary library to React which glues React to the browser DOM |
| React has nothing to do with a browser or web for that matter | React-DOM binds the idea of React to a web browser. |

#### q8: difference between react.developement.js and react.production.js?
| react.developement.js | react.production.js  | 
| :----    | :------ |
| as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability |  runs in production mode which means this is the code running on your client's machine |
#### q9: what is defer and async?
To avoid a long pause in HTML parsing, the async attribute can be leveraged.This ensures that, when the script is encountered, parsing doesn't pause right away. Instead, the script is loaded in the background and only the HTML parsing is paused to execute it. HTML parsing resumes as usual after script execution is completed.
Scripts loaded this way are not guaranteed to execute in the order specified, but rather as they become available when they are loaded.     
``` <script src="script.js" async></script> ```
Finally, the defer attribute builds on top of the previous behavior to guarantee order of execution for scripts. As previously, scripts are loaded in the background as they are encountered. When the HTML parsing finishes, they are then executed in order.
``` <script src="script.js" defer></script> ```
