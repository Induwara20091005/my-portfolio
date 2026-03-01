import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, subject, message, source } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const telegramMessage = `
🚀 *New Portfolio Inquiry!*
──────────────────
👤 *From:* ${name}
📧 *Email:* ${email}
📱 *WhatsApp:* ${whatsapp || 'Not provided'}
📝 *Subject:* ${subject}
🛠️ *Action:* ${source}
──────────────────
💬 *Message:*
${message}
    `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const res = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
