const About = () => {
    return (
        
        <div className="flex justify-center mt-4 mb-4 ">
            <div className="max-w-screen-xl bg-gradient-to-r from-orange-500 to-orange-300 shadow-md shadow-slate-400 rounded">
                <h1 className="pl-4 pt-4 font-black text-3xl">About Us</h1>
                {/* <hr className="pr-2 pl-2"></hr> */}
                <div className="flex p-4">
                    <img src="https://pbs.twimg.com/media/C1yRZKTUkAE1vxR.jpg" className="block w-1/5 p-4 object-scale-down border-dotted border-2 border-black" />
                    <div className="p-4 border-dotted border-2 border-black ">
                        <p className="p-2 text-black">
                            NELAKKII BOLCHAA, online matrimonial portal for Kodavas - 1st of its kind patronizing the Kodava Community and people with Kodava ancestry, be it for Single / Divorced / Widowed. The Kodava community today has rapidly embraced urbanization and is scattered across cities around the world, making it harder for young people to meet and choose their  “Life Partners” among our Kodava fraternity. So to provide comfortable and confidential matchmaking services to people in our community, ‘Nelakkii Bolachaa is the solace’.
                        </p>
                        <p className="p-2 text-black">
                            NELAKKII BOLCHAA is the sacred hanging lamp in the ‘nelakkii nadu badey’ or “central sanctorum” of the house’ or wedding mantapa, it stands witness to the wedding vows prescribed by the elders and absorbed by the bride and groom & starting of a new life to all the newly bride & bridegrooms of our community, where the people gathered on important occasions to formally conduct a ceremony, ritual or even to seek the blessings of our ‘Guru Karana and ancestors’ before the beginning of a new venture or event.
                        </p>
                        <p className="p-2 text-black">
                            NELAKKII BOLCHAA  accepts members after a stringent screening process and offers exclusive privacy options with dedicated “customer service” team for a convenient matchmaking experience to all its members by ensuring 100% screening, exclusive privacy options, photo protection features and verification of phone numbers, address and more information.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;