# Deployment Checklist

## Pre-Deployment Checklist

### ✅ Repository Setup
- [ ] Code is pushed to GitHub
- [ ] Repository is public or Render has access
- [ ] All files are committed
- [ ] No sensitive data in repository

### ✅ External Services Setup
- [ ] MongoDB Atlas cluster created
- [ ] MongoDB connection string obtained
- [ ] Cloudinary account created
- [ ] Cloudinary credentials obtained
- [ ] PayPal Developer account created
- [ ] PayPal sandbox credentials obtained
- [ ] Google Cloud Console project created
- [ ] Google OAuth credentials created

### ✅ Local Testing
- [ ] All services run locally
- [ ] Authentication works
- [ ] File uploads work
- [ ] Design creation works
- [ ] Database connections work

## Deployment Steps

### ✅ Step 1: Deploy on Render
- [ ] Go to render.com and sign up/login
- [ ] Click "New" → "Blueprint"
- [ ] Connect GitHub repository
- [ ] Select repository with render.yaml
- [ ] Wait for all services to be created

### ✅ Step 2: Configure Environment Variables
- [ ] Frontend service variables set
- [ ] API Gateway variables set
- [ ] Design Service variables set
- [ ] Upload Service variables set
- [ ] Subscription Service variables set

### ✅ Step 3: Update Service URLs
- [ ] Update API Gateway URLs to point to actual service URLs
- [ ] Update Frontend API_URL to point to API Gateway
- [ ] Update Subscription Service FRONTEND_URL

### ✅ Step 4: Test Deployment
- [ ] All services show "Live" status
- [ ] Frontend loads without errors
- [ ] Authentication works
- [ ] File uploads work
- [ ] Design creation works
- [ ] Database operations work

## Post-Deployment Checklist

### ✅ Monitoring Setup
- [ ] Check service logs for errors
- [ ] Monitor service performance
- [ ] Set up alerts if needed
- [ ] Test all major features

### ✅ Security Verification
- [ ] Environment variables are secure
- [ ] HTTPS is working
- [ ] CORS is properly configured
- [ ] Authentication is working

### ✅ Documentation
- [ ] Update README with deployment URLs
- [ ] Document any custom configurations
- [ ] Note any issues encountered

## Troubleshooting Checklist

### ❌ If Services Won't Start
- [ ] Check build logs
- [ ] Verify environment variables
- [ ] Check Node.js version compatibility
- [ ] Verify package.json dependencies

### ❌ If Database Connection Fails
- [ ] Verify MongoDB connection string
- [ ] Check MongoDB Atlas IP whitelist
- [ ] Verify database user permissions
- [ ] Test connection locally

### ❌ If Authentication Fails
- [ ] Verify Google OAuth credentials
- [ ] Check redirect URIs
- [ ] Verify NEXTAUTH_SECRET
- [ ] Check frontend URL configuration

### ❌ If File Uploads Fail
- [ ] Verify Cloudinary credentials
- [ ] Check file size limits
- [ ] Verify CORS configuration
- [ ] Check upload service logs

### ❌ If Payments Fail
- [ ] Verify PayPal credentials
- [ ] Check PayPal sandbox mode
- [ ] Verify frontend URL in PayPal settings
- [ ] Test payment flow

## Cost Monitoring

### ✅ Monthly Review
- [ ] Check Render usage and costs
- [ ] Monitor MongoDB Atlas usage
- [ ] Check Cloudinary usage
- [ ] Optimize if needed

## Maintenance

### ✅ Regular Tasks
- [ ] Update dependencies monthly
- [ ] Backup database regularly
- [ ] Monitor service health
- [ ] Review and update security

---

**Note**: Check off each item as you complete it. If you encounter issues, refer to the troubleshooting section in the main deployment guide. 