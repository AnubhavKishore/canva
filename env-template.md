# Environment Variables Template

Copy these variables and fill in your actual values for each service.

## Frontend Service (Next.js)

```env
NODE_ENV=production
API_URL=https://your-api-gateway-url.onrender.com
AUTH_GOOGLE_ID=your_google_client_id_here
AUTH_GOOGLE_SECRET=your_google_client_secret_here
NEXTAUTH_URL=https://your-frontend-url.onrender.com
NEXTAUTH_SECRET=your_nextauth_secret_here
```

## API Gateway Service

```env
NODE_ENV=production
PORT=10000
GOOGLE_CLIENT_ID=your_google_client_id_here
DESIGN=https://your-design-service-url.onrender.com
UPLOAD=https://your-upload-service-url.onrender.com
SUBSCRIPTION=https://your-subscription-service-url.onrender.com
```

## Design Service

```env
NODE_ENV=production
PORT=10001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/canva-clone?retryWrites=true&w=majority
```

## Upload Service

```env
NODE_ENV=production
PORT=10002
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/canva-clone?retryWrites=true&w=majority
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret
```

## Subscription Service

```env
NODE_ENV=production
PORT=10003
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/canva-clone?retryWrites=true&w=majority
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
FRONTEND_URL=https://your-frontend-url.onrender.com
```

## How to Get These Values

### Google OAuth Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client IDs
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `https://your-frontend-url.onrender.com/api/auth/callback/google`

### MongoDB Connection String
1. Go to [MongoDB Atlas](https://mongodb.com/atlas)
2. Create a cluster
3. Create a database user
4. Get connection string from "Connect" button
5. Replace `<password>` with your actual password

### Cloudinary Credentials
1. Go to [Cloudinary](https://cloudinary.com)
2. Sign up and log in
3. Go to Dashboard
4. Copy Cloud Name, API Key, and API Secret

### PayPal Credentials
1. Go to [PayPal Developer](https://developer.paypal.com)
2. Create a sandbox account
3. Go to My Apps & Credentials
4. Create a new app or use existing
5. Copy Client ID and Client Secret

### NextAuth Secret
Generate a random string (32+ characters) for NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

## Important Notes

1. **Never commit these values to Git**
2. **Use different values for development and production**
3. **Update URLs after deployment to match your actual service URLs**
4. **Test all services locally before deploying**
5. **Keep your credentials secure** 