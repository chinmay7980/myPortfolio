import server from '../dist/server/server.js';

// Using Vercel's Node.js runtime which has native Web Standard Request/Response support
export default async function handler(request) {
  return server.fetch(request);
}
