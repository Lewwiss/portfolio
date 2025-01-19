import { config } from "@/config";

const Announcement = () => {
    if (!config.announcement) return null;

    return (
        <div className='w-full bg-primary text-white text-center py-2.5 px-8'>
            <p className='font-bold'>
                {config.announcement}
            </p>
        </div>
    )
}

export default Announcement;
