import Head from 'next/head'
import Image from 'next/image'
const Login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>netflix</title>
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <form action="">
        <h1 className="text-4xl font-semibold">Sign In</h1>{' '}
        <div>
          <label htmlFor="" className="inline-block w-full">
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label htmlFor="">
            <input type="password" placeholder="password" className="input" />
          </label>
        </div>
        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
          // onClick={() => setLogin(true)}
          type="submit"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            className="cursor-pointer text-white hover:underline"
            // onClick={() => setLogin(false)}
            type="submit"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
