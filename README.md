<!-- ! Setup -->

- Create folder
  - Food Ordering App
    - Backend (MongoDb)
      - init npm "npm init -y"
      - intall express command "npm i express cors dotenv mongodb mongoose"
       - src
         - Routes
           - MyuserRoutes.
         - Model
           - User Schema
        
        - index.ts 
        - Midddleware(update User profile API,)
          - auth.ts
          - validation
      -
    - 

    - Frontend (using shadcn UI,Lucide icons &auth0 )
      - Header
        - Mobile Nav
        - DeskTop Nva
      - Hero
      - Footer
      - Auth0
      - User Profile Form
        - Success Toast(Shadcn Sooner)


<!--! Theory-->

- npm init -y

  - npm: This is the command-line interface for Node.js package

  - init: This is a subcommand of npm used to initialize a new Node.js project.

  -y: This is a flag that stands for "yes" or "yes to all". When you use the "-y" flag with "npm init", it automatically accepts all the default values without asking you to confirm each one individually.

- npm i express cors dotenv mongodb mongoose

  - npm: npm stands for Node Package Manager. It is a package manager for JavaScript, primarily used for managing dependencies in Node.js projects. With npm, developers can easily install, share, and manage packages and libraries for their projects.

  - Express: Express.js is a web application framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware support, template engines, and more. Express simplifies the process of creating server-side logic and handling HTTP requests and responses in Node.js applications. In short it handle the request which comming form the frontend

  - CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that controls access to resources from different domains. When scripts from one domain try to access resources on another domain, CORS determines whether the request is allowed.

  The cors package for Express.js is middleware that helps manage CORS. It allows servers to specify which domains are allowed to access their resources, enhancing security while enabling cross-origin requests when necessary.

  - dotenv: dotenv is a zero-dependency npm module that loads environment variables from a .env file into the process.env object in Node.js applications. This allows developers to keep sensitive configuration information, such as API keys, database URIs, or other environment-specific variables, separate from their codebase and easily manage them in different environments (e.g., development, staging, production).

  - An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. These variables are part of the environment in which a process runs and are typically used to configure or customize the behavior of applications or the operating system.

  Environment variables are essentially key-value pairs, where the key is the name of the variable and the value is the data associated with that variable. They are stored within the operating system's environment and can be accessed by programs or scripts running on the system.

  - mongodb: MongoDB is a popular NoSQL database management system known for its flexibility, scalability, and ease of use. It stores data in flexible, JSON-like documents and is widely used for building modern web applications, particularly those requiring flexible data models or handling large volumes of data.

  - mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction for interacting with MongoDB databases, allowing developers to define schemas, models, and relationships between data. Mongoose simplifies tasks such as defining schemas, performing CRUD operations, data validation, and more, making it easier to work with MongoDB in Node.js applications.

- npm i ts-node typescript nodemon
  - ts-node: ts-node is a TypeScript execution environment for Node.js, allowing you to run TypeScript files directly without the need for precompilation. It compiles TypeScript code on-the-fly and executes it within Node.js.

  - typescript: This package provides the TypeScript compiler, which is used to transpile TypeScript code into JavaScript. It allows you to write code in TypeScript and then compile it into JavaScript, which can be executed by Node.js or in the browser.

  - nodemon: It's a tool that watches your code files for changes and automatically restarts your Node.js application when it detects modifications. This helps developers during development by saving time and effort, as they don't need to manually stop and restart the server after making changes to the code

  This command installs several packages for a TypeScript Node.js project:

  - ts-node: Allows running TypeScript files    directly without compiling to JavaScript first.
  - typescript: The TypeScript compiler.
    nodemon: Automatically restarts the Node.js server when changes are detected.
  - @types/express: TypeScript type definitions for Express.js.
  - @types/cors: TypeScript type definitions for the CORS package.
  - @types/node: TypeScript type definitions for Node.js core modules.

- npx tsc --init
    -`npx tsc --init` initializes TypeScript setup by creating a default configuration file named `tsconfig.json`.

- npm install -D tailwindcss postcss autoprefixer
   - D: This flag is used to specify that the packages should be installed as devDependencies, which means they are only required for development purposes and not in production.
  - tailwindcss: This is the main Tailwind CSS package, which provides utility classes for styling HTML elements.
  - postcss: PostCSS is a tool for transforming CSS with JavaScript plugins. Tailwind CSS uses PostCSS for processing its CSS files.
  - autoprefixer: Autoprefixer is a PostCSS plugin that automatically adds vendor prefixes to CSS rules, ensuring compatibility with different browsers.
 - Created mongoDB and connect to MOngoDB database
   - user:admin password mongoDb : HolhiHvN7YWcwc71
