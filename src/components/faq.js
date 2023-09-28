import React, { useState } from "react";
import "./styles/faq.css";
function FAQSection() {
  const [showAnswers, setShowAnswers] = useState({}); // for tracking to show ans

  // function for toggle for showing ans
  const toggleAnswer = (index) => {
    setShowAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // particular index to toggle the visibility
    }));
  };

  const faqData = [
    {
      question: "What is SaaS?",
      answer:
        "SaaS stands for Software as a Service. It is a cloud computing model where software applications are hosted and provided to users over the internet on a subscription basis.",
    },
    {
      question: "How is SaaS different from traditional software?",
      answer:
        "Unlike traditional software, SaaS does not require installation on individual devices.It is accessed via a web browser, and updates and maintenance are handled by the SaaS provider.",
    },
    {
      question: "What are the benefits of using SaaS?",
      answer:
        "Benefits of SaaS include cost-effectiveness, automatic updates, scalability, accessibility from anywhere with an internet connection, and reduced IT infrastructure and maintenance costs.",
    },
    {
      question: "Is my data secure in a SaaS application?",
      answer:
        "SaaS providers typically invest in robust security measures, including data encryption, regular security updates, and compliance with industry standards. However, it is essential to review the provider security practices and certifications.",
    },
    {
      question: "Can I customize a SaaS application to fit my business needs?",
      answer:
        "Many SaaS applications offer customization options, but the extent of customization varies. Some allow branding and UI changes, while others provide API access for deeper customization.",
    },
    {
      question: "How do I choose the right SaaS provider for my business?",
      answer:
        "Consider factors like your specific business needs, pricing, scalability, support, security, and integration capabilities when selecting a SaaS provider. Read reviews and request demos or trials to make an informed decision.",
    },
    {
      question: "What happens if I need more users or additional features?",
      answer:
        "Most SaaS providers offer tiered pricing plans that allow you to upgrade to accommodate more users or access additional features as your business grows.",
    },
    {
      question: "Can I access SaaS applications on mobile devices?",
      answer:
        "Yes, many SaaS applications are accessible via mobile devices through dedicated apps or responsive web interfaces.",
    },
    {
      question: "Is there a trial period for SaaS applications?",
      answer:
        "Many SaaS providers offer free trials or demos to let you test the software before committing to a paid subscription.",
    },
    {
      question:
        "What happens if the SaaS provider experiences downtime or technical issues?",
      answer:
        "SaaS providers often have Service Level Agreements (SLAs) that specify guaranteed uptime and response times in case of disruptions. Be sure to review these SLAs in your contract.",
    },
    {
      question:
        "How do I migrate from an existing software solution to a SaaS application?",
      answer:
        "Migration processes vary depending on the software and data involved. Many SaaS providers offer migration assistance or tools to help ease the transition.",
    },
    {
      question: "What happens if I want to cancel my SaaS subscription?",
      answer:
        "Review the cancellation policy in your agreement. Many SaaS providers allow you to cancel at any time, but some may require notice or charge early termination fees.",
    },
    {
      question:
        "How is data backup and recovery handled in a SaaS application?",
      answer:
        "SaaS providers typically perform regular data backups and offer data recovery options in case of accidental deletion or data loss. Review their data retention and recovery policies.",
    },
  ];

  return (
    <>
      <section className="faq1 mt-3">
        <h2 className="text-center head-faq">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq">
            <ul>
              {faqData.map((item, index) => (
                <li key={index}>
                  <h3 onClick={() => toggleAnswer(index)}>{item.question}</h3>
                  {showAnswers[index] && <p>{item.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="faq-form">
            <h2 className="text-center">Ask a Question</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="contact">Contact:</label>
              <input type="text" id="contact" name="contact" required />
              <label htmlFor="contact">Email:</label>
              <input type="text" id="email" name="email" required />
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
              <label htmlFor="query">Your Question:</label>
              <textarea id="query" name="query" required />
              <button
                className="choose-plan-button"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;
