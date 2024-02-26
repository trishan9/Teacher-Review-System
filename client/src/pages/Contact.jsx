import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ArrowLeft, Building, Phone, Mail } from "lucide-react";
import { toast, Toaster } from "sonner";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j9mtmh3",
        "template_ysb7w35",
        form.current,
        "sLtYsD57se_LlwFsI"
      )
      .then(() => {
        toast.success("Your message has been sent");
      });
    const formValue = document.querySelector("form");

    formValue.reset();
  };

  return (
    <div className="relative overflow-y-hidden bg-gray-900 isolate min-h-[100vh]">
      <div className="grid grid-cols-1 mx-auto overflow-hidden max-w-7xl lg:grid-cols-2">
        <div className="relative px-6 pt-8 sm:pt-18 lg:static lg:px-8 lg:py-32">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 w-full overflow-hidden -z-10 ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>

                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>

                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>

              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                />
              </div>
            </div>

            <Link to="/">
              <ArrowLeft className="mb-6 text-white cursor-pointer w-7 h-7" />
            </Link>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in touch
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-gray-300">
              Welcome to InnoVisionX, your premier destination for cutting-edge
              IT services and client-centric application design. At InnoVisionX,
              we pride ourselves on delivering innovative and tailored IT
              solutions that go beyond mere functionality — we craft
              applications that clients love.
            </p>

            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>

                  <Building
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>

                <dd>
                  Kathmandu, Bagmati
                  <br />
                  Nepal
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>

                  <Phone className="w-6 text-gray-400 h-7" aria-hidden="true" />
                </dt>

                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                    +01 4696969
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>

                  <Mail className="w-6 text-gray-400 h-7" aria-hidden="true" />
                </dt>

                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:hello@example.com"
                  >
                    innovisionx.tech@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          action="#"
          method="POST"
          className="px-6 pt-20 sm:pb-20 lg:px-8 lg:py-32"
        >
          <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  First name
                </label>

                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Last name
                </label>

                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Email
                </label>

                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Phone number
                </label>

                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    required
                    minLength="7"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>

                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Toaster />
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
