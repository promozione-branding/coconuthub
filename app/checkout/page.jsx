"use client"

import React from "react"
import { useCartStore } from "@/store/cart"
import Image from "next/image"
import { motion } from "framer-motion"

export default function CheckoutPage() {

  const { cart, totalPrice } = useCartStore()

  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    country: "",
    notes: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const whatsappSubmit = () => {

    if (cart.length === 0) {
      alert("Your cart is empty")
      return
    }

    const phoneNumber = "919818059818"

    const cartItems = cart
      .map(
        (item) =>
          `• ${item.name} | Qty: ${item.quantity} | ₹${item.price * item.quantity}`
      )
      .join("\n")

    const message = `
*New Order - Vishal Enterprises*

👤 Customer Details
Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}
Email: ${form.email}

📍 Address
${form.address}
${form.city}, ${form.state}
${form.postal}, ${form.country}

📦 Order Items
${cartItems}

💰 Total: ₹${totalPrice()}

📝 Notes
${form.notes}
`

    const encodedMessage = encodeURIComponent(message)

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="bg-[#f6f6f6] min-h-screen">

      {/* HERO */}
      <section
        style={{ backgroundImage: "url(/otherbg.webp)" }}
        className="relative py-32 bg-cover bg-center text-white text-center"
      >

        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Checkout
          </h1>

          <p className="text-lg text-white/90">
            Securely complete your order and enjoy premium quality dates delivered fresh to your doorstep.
          </p>
        </motion.div>

      </section>



      <div className="max-w-7xl mx-auto py-16 px-6 grid lg:grid-cols-[2fr_1fr] gap-12">

        {/* BILLING FORM */}
        <div className="bg-white p-10 shadow rounded-xl">

          <h2 className="text-2xl font-semibold mb-8">
            Billing Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border p-3 rounded-lg"
            />

            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border p-3 rounded-lg"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border p-3 rounded-lg md:col-span-2"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border p-3 rounded-lg md:col-span-2"
            />

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Street Address"
              className="border p-3 rounded-lg md:col-span-2"
            />

            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="border p-3 rounded-lg"
            />

            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State"
              className="border p-3 rounded-lg"
            />

            <input
              name="postal"
              value={form.postal}
              onChange={handleChange}
              placeholder="Postal Code"
              className="border p-3 rounded-lg"
            />

            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
              className="border p-3 rounded-lg"
            />

          </div>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Order Notes (Optional)"
            className="border p-3 rounded-lg w-full mt-6"
            rows={4}
          />

        </div>



        {/* ORDER SUMMARY */}
        <div className="bg-white p-8 shadow-xl rounded-xl h-fit sticky top-24">

          <h2 className="text-xl font-semibold mb-6">
            Your Order
          </h2>

          <div className="space-y-6">

            {cart.map((item, index) => (

              <div key={index} className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="rounded-md"
                  />

                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                </div>

                <p className="font-medium">
                  ₹{item.price * item.quantity}
                </p>

              </div>

            ))}

          </div>

          <div className="border-t mt-8 pt-6 space-y-4">

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{totalPrice()}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-red-700">
              <span>Total</span>
              <span>₹{totalPrice()}</span>
            </div>

          </div>

          <button
            onClick={whatsappSubmit}
            className="w-full mt-8 bg-[#86b738] hover:bg-[#6ea02c] text-white py-4 font-semibold tracking-wide rounded-lg"
          >
            PLACE ORDER ON WHATSAPP
          </button>

        </div>

      </div>

    </div>
  )
}