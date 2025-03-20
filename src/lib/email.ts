import nodemailer from 'nodemailer';

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: process.env.EMAIL_SERVER_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

// Define email templates and functions
const emailTemplates = {
  orderConfirmation: (orderData: any) => {
    const items = orderData.items.map((item: any) => 
      `<tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.artwork.title}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">$${item.price.toFixed(2)}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">$${(item.quantity * item.price).toFixed(2)}</td>
      </tr>`
    ).join('');

    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0070f3; text-align: center;">Order Confirmation</h1>
        <p>Dear ${orderData.user.name},</p>
        <p>Thank you for your purchase! We're excited to confirm your order.</p>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f8f8; border-radius: 5px;">
          <p><strong>Order ID:</strong> ${orderData.id}</p>
          <p><strong>Date:</strong> ${new Date(orderData.createdAt).toLocaleDateString()}</p>
          <p><strong>Payment Method:</strong> ${orderData.paymentMethod}</p>
        </div>
        
        <h2 style="color: #333;">Order Summary</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f4f4f4;">
              <th style="padding: 10px; text-align: left;">Artwork</th>
              <th style="padding: 10px; text-align: left;">Quantity</th>
              <th style="padding: 10px; text-align: left;">Price</th>
              <th style="padding: 10px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${items}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Total:</strong></td>
              <td style="padding: 10px;"><strong>$${orderData.totalAmount.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
        
        <div style="margin: 20px 0;">
          <p>If you have any questions about your order, please contact us at <a href="mailto:support@artgallery.com">support@artgallery.com</a>.</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
          <p>© ${new Date().getFullYear()} ArtGallery. All rights reserved.</p>
        </div>
      </div>
    `;
  },
  
  artistSaleNotification: (orderData: any, artworkData: any) => {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0070f3; text-align: center;">New Sale Notification</h1>
        <p>Dear ${artworkData.user.name},</p>
        <p>Congratulations! Your artwork "${artworkData.title}" has been sold.</p>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f8f8; border-radius: 5px;">
          <p><strong>Artwork:</strong> ${artworkData.title}</p>
          <p><strong>Sale Price:</strong> $${artworkData.price.toFixed(2)}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <p>Please prepare the artwork for shipping. You will receive shipping details soon.</p>
        
        <div style="margin: 20px 0;">
          <p>If you have any questions, please contact us at <a href="mailto:artists@artgallery.com">artists@artgallery.com</a>.</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
          <p>© ${new Date().getFullYear()} ArtGallery. All rights reserved.</p>
        </div>
      </div>
    `;
  },
  
  welcomeEmail: (userData: any) => {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0070f3; text-align: center;">Welcome to ArtGallery!</h1>
        <p>Dear ${userData.name},</p>
        <p>Thank you for joining ArtGallery. We're excited to have you with us!</p>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f8f8; border-radius: 5px;">
          <p>ArtGallery is the perfect place to discover, showcase, and sell artwork in both traditional and 3D gallery formats. Here's what you can do:</p>
          <ul>
            <li>Browse our extensive collection of artworks</li>
            <li>Experience immersive 3D gallery exhibitions</li>
            <li>Create your own art collections</li>
            <li>Support artists with secure payments via Stripe or Bitcoin</li>
          </ul>
        </div>
        
        <div style="margin: 20px 0; text-align: center;">
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/gallery" style="display: inline-block; background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Explore the Gallery</a>
        </div>
        
        <p>If you have any questions, please don't hesitate to contact us at <a href="mailto:support@artgallery.com">support@artgallery.com</a>.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
          <p>© ${new Date().getFullYear()} ArtGallery. All rights reserved.</p>
        </div>
      </div>
    `;
  }
};

// Email sending functions
export async function sendOrderConfirmationEmail(orderData: any) {
  try {
    const info = await transporter.sendMail({
      from: `"ArtGallery" <${process.env.EMAIL_FROM}>`,
      to: orderData.user.email,
      subject: 'Your Order Confirmation',
      html: emailTemplates.orderConfirmation(orderData),
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    return { success: false, error };
  }
}

export async function sendArtistSaleNotification(orderData: any, artworkData: any) {
  try {
    const info = await transporter.sendMail({
      from: `"ArtGallery" <${process.env.EMAIL_FROM}>`,
      to: artworkData.user.email,
      subject: 'Your Artwork Has Been Sold!',
      html: emailTemplates.artistSaleNotification(orderData, artworkData),
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending artist sale notification email:', error);
    return { success: false, error };
  }
}

export async function sendWelcomeEmail(userData: any) {
  try {
    const info = await transporter.sendMail({
      from: `"ArtGallery" <${process.env.EMAIL_FROM}>`,
      to: userData.email,
      subject: 'Welcome to ArtGallery!',
      html: emailTemplates.welcomeEmail(userData),
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
} 