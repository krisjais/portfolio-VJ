export async function GET() {
  return Response.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Portfolio app is running successfully',
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '3000',
    version: '1.0.0'
  })
}