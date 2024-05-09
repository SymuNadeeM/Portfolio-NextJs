import FormInput from "@/components/screen/Contact/FormInput";
import TitleText from "@/components/shared/TitleText";

const ContactPage = () => {
  return (
    <section>
      <div className="mt-10 p-13 bg-black ">
        <TitleText title="Contact" />
        <div className="mt-4 px-11.5 py-15 bg-grayBg rounded-[20px]">

        
        <form action="#" className="space-y-10">
          <FormInput type="text" placeholder="" label="Name" />
          <FormInput type="email" placeholder="" label="Email" />
          <FormInput type="textarea" placeholder="" label="Message" />
          <div className="">
            <button className="w-[133px] h-[50px] border border-border_Sub hover:border-white bg-transparent button_sub text-white rounded-xl">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
