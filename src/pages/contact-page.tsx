import ContactForm from "@/components/app/shared/contact-form";

import Layout from "@/components/app/layout";

function ContactPage() {
  return (
    <Layout>
      <section className="section_gap max-lg:!pt-28">
        <div className="container ">
          <ContactForm className="shadow-2xl rounded-3xl" />
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
