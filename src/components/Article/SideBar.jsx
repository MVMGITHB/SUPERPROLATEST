import Link from 'next/link';
import AnimatedLink from './AnimatedLink';
import AnimatedLink1 from './AnimatedLink1';

export const SideBar = ({ pathname, data }) => {

  const data1 = [
    "Get",
    "Free Gift Voucher",
    "Free Lounge Access",
    "Benefits Of 1,21,799",
  ]

  
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      {/* <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">


        {
          data?.Ads[0] ? (<>
            <AnimatedLink1
              text={data?.Ads[0].text1}
              link={data?.Ads[0].link1}
              apply={data?.Ads[0].text2}
            />

          </>) : (<>
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





      <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">



        {pathname === '/automobile/fastag-annual-pass' ? (
          <>  <Link
            href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
            target="_blank"
          >
            <img
              src="/ajionew.webp"
              alt="Tata Neu Event"
              className="w-full h-[480px] object-conver rounded-md"
              loading='lazy'
            />
          </Link></>
        ) : (

           <Link
            href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
            target="_blank"
          >
            <img
              src="/ajionew.webp"
              alt="Tata Neu Event"
              className="w-full h-[480px] object-conver rounded-md"
              loading='lazy'
            />
          </Link>
          // <Link href="http://trk.yasd.in/click?campaign_id=166&pub_id=945" target="_blank">

          //   <img
          //     src="https://mvmbs.com/images/bjj1.webp"
          //     alt="Promotion"
          //     className="w-full  object-cover"
          //   />
          // </Link>
        )}


      </div>
    </div>
  );
};
