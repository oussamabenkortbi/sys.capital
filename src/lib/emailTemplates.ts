export function newsletterWelcomeTemplate() {
  // Keep it simple and broadly compatible: inline styles and table layout.
  // If you prefer, we can switch to @react-email for component-based templates.
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>مرحباً بك في Sys.Capital</title>
      <style>
        @media (prefers-color-scheme: dark) {
          .card { background: #0b0b0b !important; color: #f7f7f7 !important; }
          .muted { color: #bbb !important; }
          .button { background: #0ea5e9 !important; color: #fff !important; }
        }
        a { color: inherit; text-decoration: none; }
      </style>
    </head>
    <body style="margin:0;padding:0;background:#f7f7f7;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, 'Helvetica Neue', sans-serif;color:#111;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="center" style="padding: 24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;">
              <tr>
                <td style="padding: 16px 8px; text-align: center;">
                  <div style="font-size: 24px; font-weight: 800; letter-spacing: -0.02em;">
                    sys<span style="color:#6b7280;">.</span>capital
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 8px 8px 8px;">
                  <div class="card" style="background:#ffffff;border-radius:16px;padding:32px;box-shadow:0 1px 2px rgba(0,0,0,0.05);direction:rtl;">
                    <h1 style="margin:0 0 12px 0;font-size:28px;line-height:1.2;">مرحباً بك 👋</h1>
                    <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;">شكراً لاشتراكك في <strong>Sys.Capital</strong>. ستتلقى تحديثات المنتجات والمقالات والعروض المصممة لمساعدة الأعمال الجزائرية على النمو من خلال حلول CRM و ERP و POS و HR.</p>
                    <p style="margin:0 0 24px 0;font-size:16px;line-height:1.6;">لضمان وصول الرسائل، يرجى إضافة هذا البريد الإلكتروني إلى جهات الاتصال الخاصة بك.</p>
                    <div>
                      <a class="button" href="https://sys.capital" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#0ea5e9;color:#fff;border-radius:9999px;padding:12px 20px;font-weight:700;font-size:14px;letter-spacing:.08em;text-transform:uppercase;">Visit Website</a>
                    </div>
                    <p class="muted" style="margin:24px 0 0 0;font-size:12px;color:#555;">If you did not subscribe, you can ignore this email.</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 8px; text-align: center;">
                  <div class="muted" style="font-size:12px;color:#6b7280;">© ${new Date().getFullYear()} Sys.Capital. جميع الحقوق محفوظة.</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}
