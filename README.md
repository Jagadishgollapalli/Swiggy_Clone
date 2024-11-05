# This is a complete Swiggy clone WEB project in collaboration with Sai Dinesh Kopparthi

### Package.JSON vs Package-lock.JSON

``` 
It keeps a track of what version of that package is installed in your system. Package-lock.JSON keep a track of exact version that is being installed. What is this integrity? So why is this integrity? This integrity is basically a hash, a SHA 5.2 hash,Why is this hash present? Over there? This hash is present basically, to avoid that, package-lock. JSON keeps a hash to verify that whatever is there in my machine right, whatever is there right now in my device machine is the same version which is being deployed onto the production.
```

###  When i do npx create -react-app,  we don't have any script tag inside index.html 
```
when you create a new React app using create-react-app, the generated index.html does not contain a direct <script> tag for the JavaScript entry file. Instead, the create-react-app setup manages this automatically during the build process. The JavaScript bundles are injected into the HTML dynamically when you run the development server or build for production.

How create-react-app Works? 

When you use create-react-app, it sets up a build configuration that includes a toolchain (Webpack under the hood) that handles the injection of your JavaScript files into index.html. This is why you do not see a direct <script> tag for your main JavaScript file in the HTML template.
If you're using Parcel to serve your app, you will need to handle the script injection yourself since Parcel does not do that automatically for a single-page application (SPA) like create-react-app.
```

# Parcel
- Dev Build
- Local server
- HMR = Hot Module Replacement (when we make any changes, parcel will  reflect the changes in the browser immediately)
- File watching algorithm
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Code Splitting
- Differential Bundling - support older browsers

---
#### DEV BUILD  - npx parcel index.html
#### PROD BUILD - npx parcel build index.html
--- 
When using Parcel, the commands npx parcel index.html and npx parcel build index.html serve different purposes in the development and production workflows. Here’s a breakdown of each command:

npx parcel index.html
Purpose:

This command starts a development server.
It serves your application in a local environment for development and testing.

Features:

1. Hot Module Replacement (HMR): This allows you to see changes in real time without refreshing the page. When you make changes to your code, Parcel automatically updates the application in the browser.
2. Detailed Error Messages: If there are any errors in your code, you’ll receive detailed error messages in the console, which can help you debug issues quickly.
3. Source Maps: This feature is enabled by default, allowing you to debug your code more effectively since it provides a mapping between your minified code and the original source code.
Command:

The command is usually run in the root directory of your project, where your index.html file is located. It looks like this:
bash
Copy code
npx parcel index.html
Output:

The development server typically runs on http://localhost:1234 (or another port if that’s taken), and you can access your application in the browser.
npx parcel build index.html

Purpose:
1. This command is used to create a production build of your application.
It prepares your code for deployment, optimizing it for performance.
Features:

1. Minification: The code is minified, which reduces file sizes and improves loading times. This means that unnecessary whitespace and comments are removed, and variable names might be shortened.
Tree Shaking: Unused code is eliminated from the final bundle, further reducing the size of the output files.
2. Bundling: All your assets (JavaScript, CSS, images, etc.) are bundled into fewer files, which minimizes the number of HTTP requests needed to load the application.
3. Production Optimizations: The build process may include optimizations specific to production environments, like setting environment variables to point to production APIs.

Command:
* This command is also run from the root directory and looks like this:
bash
Copy code
npx parcel build index.html
Output:
The output of this command is typically placed in a dist (distribution) folder, which contains all the files necessary to deploy your application.
---