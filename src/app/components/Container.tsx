"use client";

import { useEffect, useState } from "react";
import Input from "./Input";
import Chat from "./Chat";

const Container = ({}) => {
  const [form, setForm] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `Hello! How can I help you today?`,
    },
  ]); // [ { user: 'user', text: 'text' }
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (event: any) => {
    setForm("")
    event.preventDefault();
    setLoading(true);
    try {
      setMessages([...messages, { role: "user", content: form }]);
      if (typeof window !== "undefined") {
        const response = await window.fetch("/api/openai", {
          method: "POST",
          headers: new Headers({ "Content-type": "application/json" }),
          body: JSON.stringify({ form }),
        });
        
        const result = await response.json();
        if (!response.ok) {
          alert(result.error);
          return;
        }
        setMessages([
          ...messages,
          { role: "user", content: form },
          { role: "system", content: result },
        ]);
        
      }
      
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-grow w-screen h-[90vh] bg-slate-100 shadow-xl overflow-hidden">
      <Chat messages={messages} loading={loading} />
      <Input
        form={form}
        setForm={setForm}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};

export default Container;
