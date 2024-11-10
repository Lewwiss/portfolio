import { config } from "@/config";

const Footer = () => {
    return (
        <div className='flex flex-grow items-end pt-10'>
          <p className='font-semibold text-lg text-background-500'>© {new Date().getFullYear()} {config.name}. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;
