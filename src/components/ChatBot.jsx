import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { BASE_API_URL } from "../../apiConst";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm a chatbot trained by Rohan. How can I help you today?", fromUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const userMsg = { text: trimmedInput, fromUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_API_URL}/api/gemini/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmedInput }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.answer || "No response", fromUser: false }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: " Failed to get a response.", fromUser: false },
      ]);
      console.error("API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-[200]">
      {/* Chat bubble - Hidden when drawer is open */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={toggleDrawer}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="w-[90vw] sm:w-80 h-[85vh] bg-gray-900 bg-opacity-90 backdrop-blur-md text-gray-100 rounded-2xl shadow-xl flex flex-col"
          >
            {/* Header with close (X) button */}
            <div className="flex justify-between items-center p-3 border-b border-gray-700">
              <span className="font-semibold text-sm">Rohan's Assistant</span>
              <button
                onClick={toggleDrawer}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Message area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-hide">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 px-4 rounded-xl max-w-[80%] whitespace-pre-wrap ${msg.fromUser ? "bg-gray-700 ml-auto text-right" : "bg-gray-800"}`}
                >
                  <ReactMarkdown
                    components={{
                      // eslint-disable-next-line no-unused-vars
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          className="text-blue-400 underline hover:text-blue-300 transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              ))}

              {isLoading && (
                <div className="p-2 px-4 rounded-xl bg-gray-800 w-fit">
                  <span className="animate-pulse">Typing<span className="animate-ping">...</span></span>
                </div>
              )}
            </div>

            {/* Input + send button */}
            <div className="p-3 flex items-center border-t border-gray-700">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !isLoading && sendMessage()}
                className="flex-1 bg-gray-800 text-gray-100 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-gray-600 transition"
                placeholder="Type a message..."
                disabled={isLoading}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={sendMessage}
                disabled={isLoading}
                className={`ml-2 p-2 rounded-full ${isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600"} text-white`}
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

};

export default Chatbot;
