import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full fixed top-0 left-0 z-10 bg-white shadow-md'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 custom-height'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo-black.png'
          alt='logo'
          width={40}
          height={10}
          title="T4 Survey Dahboard"
          className='object-contain'
        />
      </Link>
      <div className='flex space-x-4'>
        <Link href='/'>
          <CustomButton
            title='Home'
            btnType='button'
            containerStyles='text-primary-black rounded-full hover:text-blue-500 hover:bg-primary-black transition duration-300'
          />
        </Link>
        <Link href='/uni-variate-analysis'>
          <CustomButton
            title='Uni-Variate Analysis'
            btnType='button'
            containerStyles='text-primary-black rounded-full hover:text-blue-500 hover:bg-primary-black transition duration-300'
          />
        </Link>
        <Link href='/bi-variate-analysis'>
          <CustomButton
            title='Bi-Variate Analysis'
            btnType='button'
            containerStyles='text-primary-black rounded-full hover:text-blue-500 hover:bg-primary-black transition duration-300'
          />
        </Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
