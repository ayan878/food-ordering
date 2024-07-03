
# Full Stack Food ordering app

## Backend Project

### Project Setup

#### Create Backend Folder

1. Create a directory named `backend` for your backend project.

   ```bash
   mkdir backend
   cd backend
   ```

#### Initialize Node.js Project

2. Initialize a new Node.js project with default settings.

   ```bash
   npm init -y
   ```

#### Install Dependencies

3. Install necessary Node.js packages for building the backend:

   ```bash
   npm install express cors mongodb mongoose
   npm install ts-node typescript nodemon @types/express @types/cors @types/node
   ```

   - `express`: Fast, unopinionated, minimalist web framework for Node.js
   - `cors`: Middleware for enabling CORS (Cross-Origin Resource Sharing)
   - `mongodb` and `mongoose`: MongoDB driver and ODM (Object-Document Mapper) for Node.js
   - `ts-node` and `typescript`: TypeScript support for Node.js development
   - `nodemon`: Utility for automatically restarting the server during development

#### Configure `package.json`

4. Update the `package.json` file:

   - Set `main` to `/src/index.ts`:

     ```json
     "main": "/src/index.ts"
     ```

   - Add a script for running the development server using `nodemon`:

     ```json
     "scripts": {
       "dev": "nodemon"
     }
     ```

### Running the Project

5. To start the backend server in development mode, run:

   ```bash
   npm run dev
   ```

   This command will use `nodemon` to monitor changes in your TypeScript files and automatically restart the server.

### Project Structure

6. Create a basic project structure:

   ```bash
   mkdir -p src/{controllers,models,routes}
   touch src/index.ts
   ```

#### Example `src/index.ts` File

7. Add the following code to `src/index.ts` to set up a basic Express server:

   ```typescript
   import express, { Application, Request, Response } from 'express';
   import cors from 'cors';

   const app: Application = express();
   const PORT = process.env.PORT || 5000;

   app.use(cors());
   app.use(express.json());

   app.get('/', (req: Request, res: Response) => {
     res.send('Hello, World!');
   });

   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

### Environment Variables

8. Create a `.env` file in the root directory to store environment variables:

   ```
   PORT=5000
   MONGO_URI=your_mongo_database_uri
   ```

### Connecting to MongoDB

9. Set up Mongoose to connect to MongoDB by creating a `src/db.ts` file:

   ```typescript
   import mongoose from 'mongoose';

   const connectDB = async () => {
     try {
       await mongoose.connect(process.env.MONGO_URI || '', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       });
       console.log('MongoDB connected');
     } catch (error) {
       console.error(error.message);
       process.exit(1);
     }
   };

   export default connectDB;
   ```

10. Update `src/index.ts` to include the MongoDB connection:

    ```typescript
    import express, { Application, Request, Response } from 'express';
    import cors from 'cors';
    import connectDB from './db';

    const app: Application = express();
    const PORT = process.env.PORT || 5000;

    connectDB();

    app.use(cors());
    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello, World!');
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    ```

### Additional Information

- Ensure that you have Node.js and npm installed on your system.
- Use a `.env` file to manage environment variables securely.
- Customize the project structure and code as needed to fit your specific requirements.

## Frontend Project

### Project Setup

#### Initialize Vite Project

1. Create a new Vite project.

   ```bash
   npm create vite@latest
   cd your-project-name
   npm install
   ```

#### Install Tailwind CSS

2. Install Tailwind CSS and its dependencies.

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

3. Initialize Tailwind CSS.

   ```bash
   npx tailwindcss init -p
   ```

#### Configure `tsconfig.json`

4. Update `tsconfig.json` to set up path aliases.

   ```json
   {
     "compilerOptions": {
       // ...
       "baseUrl": ".",
       "paths": {
         "@/*": [
           "./src/*"
         ]
       }
       // ...
     }
   }
   ```

#### Install Type Definitions for Node.js

5. Install type definitions for Node.js.

   ```bash
   npm install -D @types/node
   ```

### Configure Vite

6. Update `vite.config.ts` to include path aliases.

   ```typescript
   import path from 'path';
   import react from '@vitejs/plugin-react';
   import { defineConfig } from 'vite';

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
     },
   });
   ```

### Initialize Shadcn UI

7. Initialize Shadcn UI.

   ```bash
   npx shadcn-ui@latest init
   ```

## Additional Information

- Ensure that you have Node.js and npm installed on your system.
- Customize the project structure and code as needed to fit your specific requirements.

### Explanation:

- **Backend**: Instructions for setting up the backend environment using Node.js, Express, MongoDB, and Mongoose. Includes creating the folder, initializing the project, installing dependencies, configuring `package.json`, and connecting to MongoDB.
- **Frontend**: Instructions for setting up the frontend environment using Vite, Tailwind CSS, and React. Includes initializing the project, installing Tailwind CSS, configuring path aliases, and initializing Shadcn UI.
