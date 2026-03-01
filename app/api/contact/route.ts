import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // page.tsx එකෙන් එවන දත්ත ලබා ගැනීම
    const { name, email, whatsapp, subject, message } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // ටෙලිග්‍රෑම් එකට ලැබෙන මැසේජ් එක ලස්සනට Format කිරීම
    const telegramMessage = `
🚀 *New Portfolio Inquiry!*
──────────────────
👤 *From:* ${name}
📧 *Email:* ${email}
📱 *WhatsApp:* ${whatsapp || 'Not provided'}
📝 *Subject:* ${subject || 'Project Inquiry'}
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
        parse_mode: 'Markdown', // අකුරු තද කර පෙන්වීමට (Bold)
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      const errorData = await res.json();
      console.error('Telegram API Error:', errorData);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
