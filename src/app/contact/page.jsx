
import FullForm from "@/components/screen/Contact/FullForm";
import TitleText from "@/components/shared/TitleText";

const ContactPage = () => {
  return (
    <section>
      <div className="mt-10 p-13 bg-black rounded-[20px]">
        <TitleText title="Contact" />
        <FullForm />
      </div>
    </section>
  );
};

export default ContactPage;
