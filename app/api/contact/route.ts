import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, message, source } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // ලකුණ (Status Icon) තෝරා ගැනීම
    let statusIcon = "📝";
    if (source.includes("WhatsApp")) statusIcon = "🟢";
    if (source.includes("Gmail")) statusIcon = "🔴";

    const telegramMessage = `
${statusIcon} *New Activity: ${source}*
──────────────────
👤 *Name:* ${name || 'N/A'}
📧 *Email:* ${email || 'N/A'}
📱 *WhatsApp:* ${whatsapp || 'N/A'}
──────────────────
💬 *Message:*
${message || '(No message yet)'}
    `;

    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    return NextResponse.json({ success: res.ok });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
