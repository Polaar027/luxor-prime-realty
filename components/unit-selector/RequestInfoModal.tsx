"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface RequestInfoModalProps {
  unitId: string;
  unitNumber: string;
  onClose: () => void;
}

export function RequestInfoModal({ unitId, unitNumber, onClose }: RequestInfoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        developmentId: "dev_luxor_tower",
        unitId,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      }),
    });

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-sm rounded-xl bg-luxor-secondary border border-luxor-gold/20 p-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-luxor-muted hover:text-white"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <p className="text-xs uppercase tracking-wider text-luxor-gold mb-1">
              Unit {unitNumber}
            </p>
            <h3 className="text-lg font-semibold text-white mb-4">Request information</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                name="name"
                required
                placeholder="Full name"
                className="bg-luxor-primary border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-luxor-muted focus:outline-none focus:border-luxor-gold"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="bg-luxor-primary border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-luxor-muted focus:outline-none focus:border-luxor-gold"
              />
              <input
                name="phone"
                required
                placeholder="Phone number"
                className="bg-luxor-primary border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-luxor-muted focus:outline-none focus:border-luxor-gold"
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-2 py-2.5 rounded-md bg-luxor-gold text-luxor-primary font-semibold text-sm hover:bg-luxor-gold-light transition-colors disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send request"}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-4">
            <CheckCircle2 className="text-luxor-gold mb-3" size={36} />
            <h3 className="text-lg font-semibold text-white mb-1">Request received</h3>
            <p className="text-sm text-luxor-muted">
              A Luxor Prime advisor will reach out about unit {unitNumber} shortly.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
