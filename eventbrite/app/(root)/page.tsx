import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
          <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="h1-bold">
              Beyond Expectations, Beyond Imagination: Your Events, Our Perfection!
              </h1>
              <p className="p-regular-20 md:p-regular-24">
                Discover seamless event planning from start to finish. With expert coordination and attention .
              </p>
              <Button size={"lg"} asChild className="button w-full sm:w-fit">
                <Link href={"#events"}>
                    Explore Now
                </Link>
              </Button>
            </div>
            <Image
              src={"/assets/images/hero.png"}
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"/>
          </div>
      </section>

      <section id="events" className="wrapper my-8 flex-col gap-8 md:gap-12">
        <h2 className="h2-bold"> Trusted By <br/> Thousands of Events </h2>
          <div className="flex w-full flex-col gap-5md:flex-row"> 
            Search
            Categoryfilter
          
          </div>
      </section>
    </div>

  );
}
