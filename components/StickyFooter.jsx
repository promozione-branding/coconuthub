import React from "react";
import {
    Home,
    ShoppingBag,
    Info,
    Phone,
    MessageCircle
} from "lucide-react";
import Link from "next/link";
import { handleCallClick, handleWhatsappClick } from "@/track";

const Whatsapp = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path fill="#ffffff" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
    </svg>
)

export default function StickyFooter() {
    return (
        <>
            {/* Floating WhatsApp Button */}
            <a
                onClick={() => handleWhatsappClick({ source: "Website Sticky Button", })}
                href="https://wa.me/919818059818"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden flex fixed bottom-20 right-4 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg"
            >
                <Whatsapp className="w-6 h-6 text-white" />
            </a>

            {/* Footer */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg sm:hidden flex justify-around items-center py-2 px-2 z-40 rounded-t-2xl">

                {/* Home */}
                <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-amber-500 text-xs">
                    <Home size={20} />
                    <span>Home</span>
                </Link>

                {/* About */}
                <Link href="/about" className="flex flex-col items-center text-gray-600 hover:text-amber-500 text-xs">
                    <Info size={20} />
                    <span>About</span>
                </Link>

                {/* Center Highlight (Products) */}
                <Link
                    href="/products"
                    className="flex flex-col items-center text-white bg-amber-500 px-4 py-3 rounded-2xl shadow-lg -mt-6 text-xs hover:bg-amber-600"
                >
                    <ShoppingBag size={22} />
                    <span className="font-medium">Products</span>
                </Link>

                {/* Contact */}
                <Link href="/contact" className="flex flex-col items-center text-gray-600 hover:text-amber-500 text-xs">
                    <MessageCircle size={20} />
                    <span>Contact</span>
                </Link>

                {/* Call */}
                <a
                    onClick={() => handleCallClick({ source: "Website Mobile Sticky Footer", })}
                    href="tel:+919818059818"
                    className="flex flex-col items-center text-gray-600 hover:text-amber-500 text-xs"
                >
                    <Phone size={20} />
                    <span>Call</span>
                </a>
            </div>
        </>
    );
}