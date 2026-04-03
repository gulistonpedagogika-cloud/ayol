import React from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function AIAssistant() {
  const [messages, setMessages] = React.useState<Message[]>([
    { role: 'model', text: "Assalomu alaykum! Men sizning siyosiy va huquqiy maslahatchingizman. Ayollarning siyosiy huquqlari, saylov jarayonlari yoki yetakchilik haqida qanday savollaringiz bor?" }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: "Siz 'Siyosiy Ayol' platformasining AI maslahatchisisiz. Sizning vazifangiz ayollarga siyosiy madaniyat, huquqiy savodxonlik, saylov jarayonlari, O'zbekiston qonunchiligi va ayollar yetakchiligi haqida ma'lumot berishdir. Javoblaringiz doimo hurmat bilan, rag'batlantiruvchi va aniq faktlarga asoslangan bo'lishi kerak. O'zbek tilida javob bering.",
        }
      });

      const aiText = response.text || "Kechirasiz, javob olishda xatolik yuz berdi.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Kechirasiz, tizimda vaqtinchalik nosozlik yuz berdi. Iltimos, birozdan so'ng qayta urinib ko'ring." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold mb-4">Siyosiy Mentor</h2>
        <p className="text-brand-ink/60">Siyosat va huquq sohasidagi barcha savollaringizga AI yordamida javob oling.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-brand-primary/5 overflow-hidden flex flex-col h-[600px]">
        {/* Chat Header */}
        <div className="bg-brand-primary p-4 flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="text-white font-bold">AI Maslahatchi</div>
            <div className="text-white/60 text-xs flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Onlayn
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 bg-brand-bg/30"
        >
          {messages.map((msg, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={i}
              className={cn(
                "flex items-start space-x-3",
                msg.role === 'user' ? "flex-row-reverse space-x-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                msg.role === 'user' ? "bg-brand-primary" : "bg-white border border-brand-primary/10"
              )}>
                {msg.role === 'user' ? <User className="text-white w-4 h-4" /> : <Bot className="text-brand-primary w-4 h-4" />}
              </div>
              <div className={cn(
                "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                msg.role === 'user' 
                  ? "bg-brand-primary text-white rounded-tr-none" 
                  : "bg-white text-brand-ink rounded-tl-none border border-brand-primary/5"
              )}>
                <div className="markdown-body">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-white border border-brand-primary/10 flex items-center justify-center">
                <Bot className="text-brand-primary w-4 h-4" />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-brand-primary/5 shadow-sm">
                <Loader2 className="w-5 h-5 text-brand-primary animate-spin" />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-brand-primary/10">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Savolingizni yozing..."
              className="w-full bg-brand-bg/50 border border-brand-primary/10 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center hover:bg-brand-primary/90 disabled:opacity-50 transition-all"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center mt-3 text-brand-ink/40 uppercase tracking-widest">
            Gemini AI tomonidan quvvatlanadi
          </p>
        </div>
      </div>
    </div>
  );
}
