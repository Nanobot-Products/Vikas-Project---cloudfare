export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API Routes for Cloudflare KV Inventory Sync
    if (url.pathname === '/api/inventory') {
      const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      };

      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
      }

      if (request.method === 'GET') {
        try {
          if (env && env.INVENTORY_KV) {
            const data = await env.INVENTORY_KV.get('vikas_inventory_data');
            if (data) {
              return new Response(data, {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
              });
            }
          }
          return new Response(JSON.stringify({ status: 'no_data', message: 'No cloud data found or KV not bound yet' }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        } catch (err) {
          return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }
      }

      if (request.method === 'POST') {
        try {
          const body = await request.text();
          if (env && env.INVENTORY_KV) {
            await env.INVENTORY_KV.put('vikas_inventory_data', body);
            return new Response(JSON.stringify({ success: true, timestamp: Date.now() }), {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
          }
          return new Response(JSON.stringify({ error: 'INVENTORY_KV binding not configured yet in Cloudflare Dashboard' }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        } catch (err) {
          return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }
      }
    }

    // Serve Static Assets (HTML, JSON, Images)
    if (env && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Vikas Inventory Suite', { status: 200 });
  }
};
