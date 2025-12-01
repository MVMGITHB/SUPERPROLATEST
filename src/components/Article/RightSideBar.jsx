import Link from "next/link";

import Image from "next/image";

export const RightSideBar = ({ pathname, data }) => {
  const data1 = [
    "Get",
    "Free Gift Voucher",
    "Free Lounge Access",
    "Benefits Of 1,21,799",
  ];
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      {/* <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">



        {
          data?.Ads[1] ? (<>
                      <AnimatedLink1
                        text={data?.Ads[1].text1}
                        link={data?.Ads[1].link1}
                        apply={data?.Ads[1].text2}
                      />
          
                    </>) :(<>
                    
        {pathname === '/automobile/fastag-annual-pass' ? (
          <AnimatedLink
            text={"Increased Offer Generated For Your Old Car, Bid Valid For Two Hours Only"}
            link="https://www.cars24.com/sell-marketing/?utm_source=affiliate&utm_medium=email_ob&utm_campaign=mv2341&utm_term=super01"
            apply={"Get Price"}
          />
        ) : (
         <AnimatedLink1
            text={data1}
            link="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5742&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D"
            apply={"Get Price"}
          />
        )}
                    </>)
        }


      </div> */}

      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        {pathname === "/automobile/fastag-annual-pass" ? (
          <>
            <Link
              href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
              rel="noopner noreferrer"
              title="Go to Aditya Birla PL"
              target="_blank"
            >
              <Image
                src="/adityaBirla.webp"
                alt="Aditya Birla PL"
                width={1920} // replace with actual image width
                height={480} // replace with actual image height
                className="w-full h-[480px] object-cover rounded-md"
              />
            </Link>
          </>
        ) : (
          <Link
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
            rel="noopener noreferrer"
            title="Go to Aditya Birla PL"
            target="_blank"
          >
            <Image
              src="/adityaBirla.webp"
              alt="Aditya Birla PL"
              width={1920} // replace with actual image width
              height={480} // replace with actual image height
              className="w-full h-[480px] object-contain rounded-md"
            />
          </Link>
        )}
      </div>
    </div>
  );
};
