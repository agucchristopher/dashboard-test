"use client";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <main className="bg-[#fff] flex-1">
      <header className="header flex columns-1 bg-black justify-start mb-2 h-[80px]">
        <Link className="items-center justify-center flex" href={"/"}>
          <Image
            onClick={() => {
              window.location.href = "../";
            }}
            // style={{}}
            src={"/ims.png"}
            width={90}
            className="resize m-2 ml-4"
            height={15}
          />
        </Link>
      </header>
    </main>
  );
};

export default page;
