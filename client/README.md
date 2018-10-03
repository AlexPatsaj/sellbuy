# Midddly client layout

cd client
npm run dev

// production build
npm run build
npm run export

//
NODE_ENV=production node server.js

# stuff to do for production : 
- remove cors by forwarding requests to the api with a proxy server 