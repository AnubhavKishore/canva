# Canva Clone - Render Deployment Guide

This guide will walk you through deploying your Canva Clone project on Render.com.

## Project Architecture

Your project consists of:
- **Frontend**: Next.js 15 application
- **API Gateway**: Express.js proxy service
- **Design Service**: Express.js + MongoDB
- **Upload Service**: Express.js + MongoDB + Cloudinary
- **Subscription Service**: Express.js + MongoDB + PayPal

## Prerequisites

Before deploying, ensure you have:

1. **Render Account**: Sign up at [render.com](https://render.com)
2. **MongoDB Database**: Set up a MongoDB database (MongoDB Atlas recommended)
3. **Cloudinary Account**: For image uploads
4. **PayPal Developer Account**: For payment processing
5. **Google OAuth Credentials**: For authentication

## Step 1: Prepare Your Repository

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Ensure your repository structure matches**:
   ```
   CANVA_CLONE/
   ├── client/                 # Next.js frontend
   ├── server/
   │   ├── api-gateway/        # API Gateway service
   │   ├── design-service/     # Design service
   │   ├── upload-service/     # Upload service
   │   └── subscription-service/ # Subscription service
   └── render.yaml            # Render configuration
   ```

## Step 2: Set Up External Services

### MongoDB Database
1. Go to [MongoDB Atlas](https://mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Get your connection string
5. Note down the connection string for later use

### Cloudinary Setup
1. Go to [Cloudinary](https://cloudinary.com)
2. Create an account
3. Get your:
   - Cloud name
   - API Key
   - API Secret

### PayPal Setup
1. Go to [PayPal Developer](https://developer.paypal.com)
2. Create a sandbox account
3. Get your:
   - Client ID
   - Client Secret

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `https://your-frontend-url.onrender.com/api/auth/callback/google`

## Step 3: Deploy on Render

### Option A: Using render.yaml (Recommended)

1. **Connect your GitHub repository to Render**:
   - Go to [render.com](https://render.com)
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Select the repository containing your project

2. **Render will automatically detect the render.yaml file** and create all services

3. **Configure Environment Variables**:
   After the services are created, you'll need to set the environment variables manually in each service's dashboard.

### Option B: Manual Deployment

If you prefer to deploy services individually:

#### 1. Deploy MongoDB Database
- Go to Render Dashboard
- Click "New" → "PostgreSQL" (or use MongoDB Atlas)
- Choose "Starter" plan
- Note the connection string

#### 2. Deploy API Gateway
- Click "New" → "Web Service"
- Connect your GitHub repository
- Set build command: `cd server/api-gateway && npm install`
- Set start command: `cd server/api-gateway && npm start`
- Add environment variables (see below)

#### 3. Deploy Other Services
Repeat the same process for:
- Design Service
- Upload Service
- Subscription Service
- Frontend

## Step 4: Environment Variables Configuration

### Frontend Service
```
NODE_ENV=production
API_URL=https://your-api-gateway-url.onrender.com
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
NEXTAUTH_URL=https://your-frontend-url.onrender.com
NEXTAUTH_SECRET=your_nextauth_secret
```

### API Gateway Service
```
NODE_ENV=production
PORT=10000
GOOGLE_CLIENT_ID=your_google_client_id
DESIGN=https://your-design-service-url.onrender.com
UPLOAD=https://your-upload-service-url.onrender.com
SUBSCRIPTION=https://your-subscription-service-url.onrender.com
```

### Design Service
```
NODE_ENV=production
PORT=10001
MONGO_URI=your_mongodb_connection_string
```

### Upload Service
```
NODE_ENV=production
PORT=10002
MONGO_URI=your_mongodb_connection_string
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret
```

### Subscription Service
```
NODE_ENV=production
PORT=10003
MONGO_URI=your_mongodb_connection_string
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
FRONTEND_URL=https://your-frontend-url.onrender.com
```

## Step 5: Update Service URLs

After deployment, update the service URLs in your environment variables:

1. **API Gateway**: Update `DESIGN`, `UPLOAD`, and `SUBSCRIPTION` URLs
2. **Frontend**: Update `API_URL` to point to your API Gateway
3. **Subscription Service**: Update `FRONTEND_URL`

## Step 6: Test Your Deployment

1. **Check all services are running** in Render dashboard
2. **Test the frontend** by visiting your frontend URL
3. **Test authentication** by trying to log in
4. **Test file uploads** by uploading an image
5. **Test design creation** by creating a new design

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check if all dependencies are in package.json
   - Ensure Node.js version compatibility
   - Check build logs in Render dashboard

2. **Environment Variables**:
   - Ensure all required variables are set
   - Check for typos in variable names
   - Verify URLs are correct

3. **Database Connection**:
   - Verify MongoDB connection string
   - Check if MongoDB Atlas IP whitelist includes Render's IPs
   - Ensure database user has correct permissions

4. **CORS Issues**:
   - Update CORS configuration in services
   - Add your frontend URL to allowed origins

### Logs and Debugging

- Check service logs in Render dashboard
- Use `console.log()` statements for debugging
- Monitor service health and performance

## Cost Optimization

- Use "Starter" plans for development
- Consider "Standard" plans for production
- Monitor usage and optimize accordingly
- Use free tiers where possible (MongoDB Atlas, Cloudinary)

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **HTTPS**: All Render services use HTTPS by default
3. **CORS**: Configure CORS properly for production
4. **Authentication**: Ensure proper token validation
5. **Database**: Use strong passwords and proper access controls

## Monitoring and Maintenance

1. **Set up monitoring** for your services
2. **Configure alerts** for service downtime
3. **Regular backups** of your MongoDB database
4. **Update dependencies** regularly
5. **Monitor costs** and optimize usage

## Support

If you encounter issues:
1. Check Render's documentation
2. Review service logs
3. Test locally first
4. Contact Render support if needed

---

**Note**: This deployment guide assumes you're using the render.yaml file for automated deployment. Adjust the steps if you're deploying manually. 