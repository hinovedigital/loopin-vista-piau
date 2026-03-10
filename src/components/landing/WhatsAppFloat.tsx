const WHATSAPP_LINK = "https://wa.me/5589981486496?text=Olá!%20Vi%20o%20site%20da%20Loopin%20TV%20e%20quero%20saber%20mais";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ boxShadow: "0 4px 20px hsla(142, 71%, 45%, 0.4)" }}
    aria-label="Fale conosco no WhatsApp"
  >
    <svg viewBox="0 0 32 32" className="w-7 h-7 fill-primary-foreground">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.742 3.072 9.372L1.06 31.44l6.256-2.004A15.933 15.933 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.598c-.392 1.104-1.942 2.02-3.182 2.286-.848.18-1.956.324-5.684-1.222-4.772-1.978-7.836-6.82-8.074-7.138-.228-.318-1.914-2.55-1.914-4.862 0-2.312 1.212-3.45 1.642-3.922.39-.43 1.04-.608 1.662-.608.198 0 .376.01.536.018.472.02.71.048 1.022.79.39.93 1.34 3.264 1.458 3.502.12.238.2.516.04.826-.148.318-.228.516-.456.794-.228.278-.48.62-.684.832-.228.238-.466.496-.2.97.266.472 1.182 1.948 2.538 3.156 1.742 1.55 3.21 2.032 3.664 2.258.356.178.78.148 1.058-.148.356-.378.794-.998 1.24-1.61.318-.436.716-.49 1.11-.33.398.148 2.524 1.19 2.956 1.408.432.218.72.326.826.508.104.182.104 1.062-.288 2.166z" />
    </svg>
  </a>
);

export default WhatsAppFloat;
