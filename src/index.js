/**
 * Worker for serving Docusaurus assets at /blog/* while assets live at /.
 * This keeps canonical URLs as https://www.travelplan-ai.com/blog/... and
 * rewrites only the asset lookup path (no canonical/sitemap changes).
 */

const stripBlogBase = (pathname) => {
  if (pathname === '/blog') return '/';
  if (pathname === '/blog/') return '/';
  if (pathname.startsWith('/blog/')) return pathname.slice('/blog'.length);
  return pathname;
};

export default {
  async fetch(request, env) {
    try {
      if (!env.ASSETS || typeof env.ASSETS.fetch !== 'function') {
        return new Response('Assets binding missing', { status: 500 });
      }

      
      const url = new URL(request.url);

      // Only serve assets for /blog/* on the blog origin.
      if (url.pathname === '/blog' || url.pathname.startsWith('/blog/')) {
        url.pathname = stripBlogBase(url.pathname);

        const headers = new Headers(request.headers);
        const init = {
          method: request.method,
          headers,
        };

        if (request.method !== 'GET' && request.method !== 'HEAD') {
          init.body = request.body;
        }

        return env.ASSETS.fetch(new Request(url.toString(), init));
      }

      return new Response('Not Found', { status: 404 });
    } catch (error) {
      return new Response('Worker error', { status: 500 });
    }
  },
};
