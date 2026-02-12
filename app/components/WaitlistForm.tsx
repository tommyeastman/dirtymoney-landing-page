"use client";

import { useState, FormEvent, useRef } from "react";

export function WaitlistForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://submit-form.com/wwGMUq1RB", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      // If submission fails, allow user to retry
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    setSubmitted(false);
    formRef.current?.reset();
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-md flex-col gap-4 text-left"
      >
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="first-name"
            className="text-sm font-medium text-hero-heading"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="first_name"
            placeholder="First Name"
            required
            className="rounded-xl border border-border-muted bg-white px-4 py-3 text-hero-heading placeholder:text-hero-muted/60 outline-none transition-all focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="last-name"
            className="text-sm font-medium text-hero-heading"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="last_name"
            placeholder="Last Name"
            required
            className="rounded-xl border border-border-muted bg-white px-4 py-3 text-hero-heading placeholder:text-hero-muted/60 outline-none transition-all focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-hero-heading"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="rounded-xl border border-border-muted bg-white px-4 py-3 text-hero-heading placeholder:text-hero-muted/60 outline-none transition-all focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 rounded-full bg-emerald px-8 py-3 text-base font-semibold text-white transition-all hover:bg-emerald-dark hover:shadow-lg hover:shadow-emerald/20 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Success Modal */}
      {submitted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="mx-4 w-full max-w-sm rounded-2xl border border-border-light bg-hero-bg p-8 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Checkmark */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald/15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h3 className="mb-2 text-xl font-bold text-hero-heading">
              Thanks for signing up!
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-hero-muted">
              We&apos;ll be in touch when Dirty Money is ready for you.
            </p>

            <button
              onClick={handleClose}
              className="rounded-full bg-emerald px-8 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-dark hover:shadow-lg hover:shadow-emerald/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
