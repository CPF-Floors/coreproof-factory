import Link from "next/link";
import Image from "next/image";
function Orders() {
  return (
    <div className="h-lvh w-100 bg-white pt-5">
      <div className="flex flex-row items-center">
        <Link href="/dashboard">
          <Image
            className="m-5"
            src="/Back.svg"
            height="40"
            width="40"
            alt="Back"
          ></Image>
        </Link>
        <h2 className="font-semibold my-10 ">My orders list</h2>
      </div>
      <div className="flex justify-center">
        <Link href="/new-order">
          <button className="p-4 mx-8 text-white">New Order</button>
        </Link>
      </div>
      <div className="orders-links w-100 text-center">
        <Link className="mx-5" href="#">
          All
        </Link>
        <Link className="mx-5" href="#">
          Running
        </Link>
        <Link className="mx-5" href="#">
          Completed
        </Link>
      </div>
    </div>
  );
}

export default Orders;
